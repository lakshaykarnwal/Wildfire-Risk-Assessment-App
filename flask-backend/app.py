from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import numpy as np
from sklearn.cluster import KMeans
from PIL import Image
import os
import base64
from io import BytesIO
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors

app = Flask(__name__)
CORS(app, supports_credentials=True)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def home():
    return "Welcome to the Wildfire Detection App!"

@app.route('/images', methods=['GET'])
def list_images():
    if not os.path.exists(UPLOAD_FOLDER):
        return jsonify({'error': 'Upload folder does not exist'}), 404

    images = os.listdir(UPLOAD_FOLDER)
    images = [img for img in images if img.endswith(('JPG', 'jpeg', 'png'))]
    return jsonify(images)

@app.route('/uploads/<filename>', methods=['GET'])
def get_image(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/process_image', methods=['POST'])
def process_image_by_name():
    data = request.json
    filename = data.get('filename')
    
    if not filename:
        return jsonify({'error': 'No filename provided'}), 400

    file_path = os.path.join(UPLOAD_FOLDER, filename)
    if not os.path.exists(file_path):
        return jsonify({'error': 'File not found'}), 404

    image = Image.open(file_path)
    img_array = np.array(image)
    processed_data = process_image(img_array)

    return jsonify({
        'image': image_to_base64(img_array),
        'anomalies': processed_data['anomalies'],
        'highlighted_image': image_to_base64(np.array(processed_data['highlighted_image'])),
        'clustered_image': image_to_base64(np.array(processed_data['clustered_image']))
    }), 200

def process_image(image_array):
    gray_image = np.mean(image_array, axis=2)
    anomalies = detect_anomalies(gray_image)

    # Create an anomaly mask
    anomaly_mask = np.array(anomalies, dtype=np.uint8) * 255  # Convert to binary mask
    anomaly_mask = np.stack([anomaly_mask] * 3, axis=-1)  # Convert to RGB format

    # Overlay the anomaly mask on the original image
    highlighted_image = np.where(anomaly_mask > 0, [255, 0, 0], image_array)  # Red color for anomalies

    flat_image = gray_image.reshape(-1, 1)
    kmeans = KMeans(n_clusters=5)
    kmeans.fit(flat_image)
    clustered_image = kmeans.labels_.reshape(gray_image.shape)

    return {
        "anomalies": anomalies,
        "highlighted_image": highlighted_image.tolist(),  # Include highlighted image
        "clustered_image": clustered_image.tolist()
    }

def detect_anomalies(image_array):
    threshold = np.percentile(image_array, 75)
    anomalies = np.where(image_array > threshold, 1, 0)
    return anomalies.tolist()

def image_to_base64(image_array):
    image = Image.fromarray(image_array.astype(np.uint8))
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    return f"data:image/png;base64,{img_str}"

if __name__ == '__main__':
    app.run(debug=True)

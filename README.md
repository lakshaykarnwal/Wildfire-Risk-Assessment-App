# Wildfire Detection App 🔥

The Wildfire Detection App is a web application designed to analyze raw infrared imagery for detecting potential wildfire hotspots. Using a combination of image processing and machine learning techniques, the app identifies anomalies that could indicate the presence of a fire. The project includes a user-friendly interface to upload and process images and display results in a visually appealing way.

## Screenshots

<img width="741" alt="Screenshot 2024-08-29 at 2 38 55 PM" src="https://github.com/user-attachments/assets/debd336b-a812-4ce2-9f25-95764b6e89d0">

Select the image you want to analyze

<img width="516" alt="Screenshot 2024-08-29 at 2 41 05 PM" src="https://github.com/user-attachments/assets/a9891b98-5559-4de5-9f6b-ab91fa7d00a9">

The app analyzes the image and shows the output image

## Features

- **Image Carousel**: View and select images from a carousel to process.
- **Anomaly Detection**: Processes selected images to detect anomalies that could indicate wildfires.
- **Results Display**: Visual representation of detected anomalies alongside the original image.
- **Responsive UI**: The application is designed to be responsive and user-friendly.
- **Credits**: Displays credits for the images used in the app.

## Anomaly Detection Algorithm

### How Anomalies Are Calculated

The anomaly detection process involves analyzing raw infrared images to identify potential wildfire hotspots. The following steps outline the process:

1. **Image Preprocessing**: The raw infrared images are preprocessed to enhance quality and remove noise. This may involve operations such as normalization, resizing, and filtering.

2. **Feature Extraction**: Key features from the preprocessed images are extracted. This includes identifying areas of interest that may exhibit unusual patterns compared to the norm.

3. **Anomaly Detection**:

   - **Anomaly Scoring**: Anomalies are detected using a machine learning model or a statistical method that scores areas of the image based on their deviation from expected patterns. The model is trained to recognize features associated with wildfires.
   - **Thresholding**: The scores are compared against a predefined threshold to classify areas as anomalous. Areas with scores above the threshold are flagged as potential hotspots.

4. **Result Generation**: The detected anomalies are visualized and overlaid on the original image to highlight regions of interest.

### Displaying Anomalies on the Original Image

The results of the anomaly detection are displayed on the original image as follows:

1. **Highlighting Anomalous Areas**: Anomalous regions are marked on the original image using bounding boxes or heatmaps. This visualization helps to quickly identify where potential hotspots are located.

2. **Overlay Creation**: An overlay image is created where detected anomalies are highlighted. This overlay is then combined with the original image to provide a clear visual representation of both the original data and the detected anomalies.

3. **Result Visualization**: The original image with the overlay is displayed to the user, allowing them to see the detected anomalies in the context of the original infrared imagery.

By following these steps, the application provides users with a visual and intuitive way to understand where potential wildfire hotspots are located, helping in early detection and response.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces, especially single-page applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Slick Carousel**: A popular carousel/slider library used for the image carousel feature.

### Backend

- **Flask**: A lightweight Python web framework used to handle API requests and process images.
- **Python**: The primary programming language used in the backend for image processing and anomaly detection.

### Other Technologies

- **Email.js**: (If applicable) Used for sending emails directly from the app.
- **REST API**: Utilized to communicate between the frontend and backend services.

## Getting Started

### Prerequisites

- **Node.js**: Install Node.js and npm from [nodejs.org](https://nodejs.org/).
- **Python**: Install Python from [python.org](https://www.python.org/).
- **Flask**: Install Flask using pip:

  ```bash
  pip install Flask
  ```

- **React-Slick & Slick-Carousel**: Install these dependencies for the carousel feature:

  ```bash
  npm install react-slick slick-carousel
  ```

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/wildfire-detection-app.git
   cd wildfire-detection-app
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm start
   ```

   This will start the frontend on http://localhost:3000.

4. **Set up the Flask backend**:
   ```
   cd backend
   flask run
   ```
   This will start the backend server on http://127.0.0.1:5000.

## Usage

1. Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
2. Select an image from the carousel.
3. Click on the image to process it.
4. View the results of the anomaly detection.

## Credits

Images are from Humming Bird Nova's Fire AI Sample Data RAW infrared images: [https://www.mapnova.com/sample-data](https://www.mapnova.com/sample-data).

## Contributing

Feel free to submit issues or pull requests to improve the project.

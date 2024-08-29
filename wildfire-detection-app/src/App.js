import React, { useState, useEffect } from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';  // Ensure this path is correct
import AnomalyDetectionResult from './components/AnomalyDetectionResult';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [anomalies, setAnomalies] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  useEffect(() => {
    if (selectedImage) {
      fetch('http://127.0.0.1:5000/process_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: selectedImage }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Anomaly data:', data);
        setAnomalies(data);
      })
      .catch(error => console.error('Error fetching anomaly data:', error));
    }
  }, [selectedImage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Wildfire Risk Assessment 🔥
      </h1>
      <div className="carousel-container mx-auto max-w-4xl">
        <Carousel {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item relative cursor-pointer" onClick={() => handleImageClick(image)}>
              <img
                src={`http://127.0.0.1:5000/uploads/${image}`}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="carousel-overlay absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Click to Process</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {anomalies && <AnomalyDetectionResult anomalies={anomalies} />}
      <footer className="text-center mt-8 text-gray-600">
        <p className="text-sm">
          Images are from Humming Bird Nova's Fire AI Sample Data RAW infrared images: <a href="https://www.mapnova.com/sample-data" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.mapnova.com/sample-data</a>
        </p>
      </footer>
    </div>
  );
};

export default App;

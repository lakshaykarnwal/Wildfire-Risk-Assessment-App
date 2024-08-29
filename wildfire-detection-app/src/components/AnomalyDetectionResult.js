import React from 'react';

const AnomalyDetectionResult = ({ anomalies }) => {
  return (
    <div className="flex flex-col items-center mt-12"> {/* Added margin-top for space above */}
      <h2 className="text-2xl font-bold mb-8">Anomaly Detection Results</h2> {/* Increased margin-bottom for spacing */}
      {anomalies ? (
        <div className="mb-8 text-center">
          <h4 className="text-lg font-semibold mb-2">Detected Anomalies</h4>
          <div className="flex flex-col items-center">
            <h5 className="text-md font-medium mb-2">Original Image</h5>
            <img
              src={anomalies.image}
              alt="Original Image"
              className="w-3/4 mb-4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-md font-medium mb-2">Highlighted Anomalies</h5>
            <img
              src={anomalies.highlighted_image}
              alt="Highlighted Anomalies"
              className="w-3/4 mb-4"
            />
          </div>
        </div>
      ) : (
        <p className="text-center">No anomalies detected.</p>
      )}
    </div>
  );
};

export default AnomalyDetectionResult;

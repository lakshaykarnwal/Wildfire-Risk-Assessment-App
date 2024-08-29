import React from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const FileUpload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    onUpload(e.target.files);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 p-8 bg-gradient-to-r from-[#02435c] to-[#036080] rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="flex flex-col items-center mb-4">
        <CloudArrowUpIcon className="h-12 w-12 text-white mb-2" />
        <h2 className="text-white text-2xl font-bold">Upload Your Image</h2>
        <p className="text-white text-sm opacity-75 mt-2">Supported formats: JPG, PNG</p>
      </div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden" 
        id="file-upload" 
      />
      <label 
        htmlFor="file-upload" 
        className="cursor-pointer mb-4 py-2 px-6 w-full text-center text-white border-2 border-white rounded-md bg-opacity-20 bg-[#036080] hover:bg-opacity-50 transition-all duration-300 ease-in-out"
      >
        Choose Files
      </label>
      <button
        className="bg-[#036080] text-white py-2 px-6 rounded-md shadow-md hover:bg-[#027ca6] transition-colors duration-200 ease-in-out"
      >
        Upload Files
      </button>
    </div>
  );
};

export default FileUpload;

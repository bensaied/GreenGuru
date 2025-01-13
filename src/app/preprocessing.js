"use client";
import React, { useState, useEffect } from "react";
import { TbPlant2 } from "react-icons/tb";
import Head from "next/head";

const Preprocessing = ({ ngrokURL }) => {
  // Connect to GoogleColab
  const [flaskStatus, setFlaskStatus] = useState(null);
  // Upload and manage image
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // useEffect for GreenGuru-Flask Status
  useEffect(() => {
    const checkFlaskReadiness = async (ngrokUrl) => {
      try {
        const formattedNgrokUrl = ngrokUrl.endsWith("/")
          ? ngrokUrl
          : `${ngrokUrl}/`;
        const response = await fetch(`${formattedNgrokUrl}health`);
        if (response.ok) {
          setFlaskStatus(true);
        } else {
          setFlaskStatus(false);
        }
      } catch (error) {
        setFlaskStatus(false);
      }
    };

    if (ngrokURL) {
      checkFlaskReadiness(ngrokURL);
    }
  }, [ngrokURL]);
  // Handle Image Change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Generate a preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };
  // Handle Upload Image
  const handleUpload = () => {
    if (selectedFile) {
      // Upload logic (e.g., sending the file to a server or API)
      alert(`Uploading: ${selectedFile.name}`);
      // Reset file input after upload
      setSelectedFile(null);
      setPreview(null);
    } else {
      alert("No file selected!");
    }
  };

  return (
    // Preprocessing if the user connect to GoogleColab through Ngrok
    <div className="relative w-full h-screen overflow-hidden">
      <Head>
        <title>GreenGuru</title>
        <meta
          name="description"
          content="GreenGuru is an AI-based web application for plant classification and parasitic herb detection. It supports 12 types of seedlings, using computer vision models to make efficient predictions and produce reliable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background Video */}
      <div className="relative w-full h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/greenGuruVid.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-green-300 opacity-30"></div>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center top-10 transition-all duration-500 ease-in-out">
        <img
          title="GreenGuru"
          src="/logo.png"
          alt="GreenGuru Logo"
          className="max-w-md"
        />
      </div>

      {/* Form */}
      <div
        className="fixed top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-30 p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out"
        style={{ width: "350px", marginTop: "30px" }}
      >
        {/* Upload Button */}
        <div className="flex flex-col items-center mb-4">
          {/* Upload Button */}
          <button
            onClick={() => document.getElementById("file-input").click()}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transform hover:scale-105 transition-transform duration-300"
          >
            <TbPlant2 />
            Upload Plant Image
          </button>

          {/* Hidden File Input */}
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          {/* Preview Section */}
          {preview && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={preview}
                alt="Plant Preview"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
              <button
                onClick={handleUpload}
                className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
              >
                Confirm Upload
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          {flaskStatus === true ? (
            <div className="p-2 bg-transparent rounded-lg shadow-sm max-w-sm w-full text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-500"></div>
                <h2 className="text-sm font-semibold text-gray-700">
                  GreenGuru-Flask is Running!
                </h2>
              </div>
            </div>
          ) : flaskStatus === false ? (
            <div className="p-2 bg-transparent rounded-lg shadow-sm max-w-sm w-full text-center">
              <div className="flex items-center justify-center gap-2">
                {/* Animated Pulsing Icon */}
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></div>
                  <div className="h-full w-full rounded-full bg-red-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-sm font-semibold text-gray-700">
                  GreenGuru-Flask is Not Running!
                </h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4">
        <strong>&copy; 2025 GreenGuru. All Rights Reserved.</strong>
      </footer>
    </div>
  );
};

export default Preprocessing;

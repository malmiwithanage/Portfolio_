import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver"; // Import saveAs from file-saver

// Define inline styles
const buttonStyle = {
  backgroundColor: "#007bff", // Example background color
  color: "#ffffff", // Example text color
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const DownloadButton = () => {
  const handleDownload = () => {
    // Example PDF file path (change to your actual PDF path)
    const pdfUrl = "Resume Malmi Withanage.pdf";

    // Fetch or process your PDF file here if it's dynamic

    // Download the PDF using FileSaver.js
    saveAs(pdfUrl, "resume.pdf"); // This will trigger the download
  };

  return (
    <motion.button
      onClick={handleDownload}
      style={buttonStyle} // Apply inline styles
      className="mt-4" // Add additional classes if needed
    >
      <FontAwesomeIcon icon={faDownload} className="mr-2" />
      Download Resume
    </motion.button>
  );
};

export default DownloadButton;

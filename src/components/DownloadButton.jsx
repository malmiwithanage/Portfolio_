import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver"; // Import saveAs from file-saver

import { styles } from "../styles";

const DownloadButton = ({ pdfUrl }) => {
  const handleDownload = () => {
    saveAs(pdfUrl, "Resume_Malmi_Withanage.pdf"); // Trigger the download using file-saver
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`${styles.sectionButton} mt-4`}
    >
      <FontAwesomeIcon icon={faDownload} className="mr-2" />
      Download Resume
    </motion.button>
  );
};

export default DownloadButton;

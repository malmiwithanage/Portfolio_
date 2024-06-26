import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver"; // Import saveAs from file-saver

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
      className={`${styles.sectionButton} mt-4`}
    >
      <FontAwesomeIcon icon={faDownload} className="mr-2" />
      Download Resume
    </motion.button>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am currently immersed in my undergraduate studies at the esteemed Sri
        Lanka Institute of Information Technology, where I am continually honing
        my skills and knowledge. Driven by a relentless pursuit of excellence, I
        embody a resilient and ambitious spirit that propels me towards tackling
        challenges head-on and exceeding expectations. My approach to tasks and
        situations is characterized by a sophisticated blend of maturity and
        responsibility, reflecting my commitment to delivering exceptional
        results. My adeptness in navigating dynamic and competitive environments
        is underscored by my exceptional interpersonal skills. Whether leading a
        team or collaborating as part of one, I consistently prioritize the
        organization's interests while fostering synergy and innovation.
      </motion.p>

      {/* Include the download button component here */}
      <DownloadButton />
    </>
  );
};

export default SectionWrapper(About, "about");

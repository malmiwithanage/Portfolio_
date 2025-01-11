import React from "react";
import { saveAs } from "file-saver"; // Import the saveAs function
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import the download icon
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const DownloadButton = () => {
  const pdfUrl =
    "https://raw.githubusercontent.com/malmiwithanage/Resume/main/Resume%20Malmi%20Withanage.pdf"; // Replace with your actual GitHub raw PDF URL

  const handleDownload = () => {
    saveAs(pdfUrl, "Resume_Malmi_Withanage.pdf"); // Trigger the download using file-saver
  };

  return (
  <motion.button
    onClick={handleDownload}
    className={`${styles.sectionButton} mt-4 bg-gradient-to-r from-[#b95ff6] to-[#02b495] hover:from-[#02b495] hover:to-[#b95ff6] text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105`}
  >
    <FontAwesomeIcon icon={faDownload} className="mr-2" />
    Download Resume
  </motion.button>
);

}
  

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a software dev who’s all about building awesome things with 
        TypeScript, JavaScript, and frameworks like React, Node.js, and 
        Three.js. I’m a fast learner and love vibing with teams to create 
        slick, scalable, and user-friendly solutions that actually make a 
        difference. Can’t wait to bring my skills to your next big project and make an impact!
      </motion.p>

    <motion.div>
    <DownloadButton />

    </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

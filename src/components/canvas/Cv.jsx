import React from "react";
//import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const Cv = () => {
  return (
    <>
      
      

     

      <motion.q>
        <div >
      <a href="r1.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>

      </div>
      </motion.q>
    </>
  );
};

export default SectionWrapper(About, "about");

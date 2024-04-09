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

const Footer = () => {
  return (
    <>
 
      <div>
      <motion.o>
        <div >
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>FaceBook</p>
        </div>
      </motion.o>
      </div>

      
    </>
  );
};

export default SectionWrapper(Footer, "");

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
      <div> </div>
      {/*}  <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServiceCard key={services.title} index={index} {...services}
        />
      ))}
    </div> */}

     

      <motion.div variants={textVariant()}>
        <div style={{ marginTop: "100px", marginBottom: "5px" }}>
          <p className={styles.sectionSubText}>Where I Live</p>
          <h2 className={styles.sectionHeadText}>Location.</h2>
        </div>
      </motion.div>

    
    </>
  );
};

export default SectionWrapper(About, "about");

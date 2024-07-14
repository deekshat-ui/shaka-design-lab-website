import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";
import heroVideo from "../assets/hero-section-vid.mov";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      id="herosection"
      className={[styles.heroSection, className].join(" ")}
    >
      {/* <img className={styles.bgIcon} alt="" src="/bg@2x.png" /> */}
      <video className={styles.bgIcon} src={heroVideo} autoPlay loop muted />
      {/* <video autoPlay loop muted className="bg-vid">
        <source src={heroVideo} type="video/mp4" />
      </video> */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 3.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={styles.text}>
          <motion.h1 className={styles.transformingSpacesInspiring}>
            TRANSFORMING SPACES, INSPIRING LIVES
          </motion.h1>
          <motion.h1 className={styles.weSpecialiseInContainer}>
            <p
              className={styles.weSpecialiseIn}
            >{`We specialise in creating beautiful, `}</p>
            <p className={styles.functionalSpacesTailored}>
              functional spaces tailored to your unique style and needs.
            </p>
          </motion.h1>
        </div>
        <Button
          className={styles.btn}
          endIcon={<img width="22px" height="22px" src="/arrow--right-2.svg" />}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "14",
            background: "rgba(255, 255, 255, 0.5)",
            border: "rgba(255, 255, 255, 0.4) solid 1px",
            borderRadius: "25px",
            "&:hover": { background: "rgba(255, 255, 255, 0.5)" },
            width: 243,
            height: 50,
          }}
        >
          DISCOVER MORE
        </Button>
      </motion.div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;

import React, { useState } from "react";
import { Button, Modal, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";
import heroVideo from "../assets/hero-section-vid.mp4";
import MessageSection from "../sections/MessageSection";

const HeroSection = ({ className = "" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      id="herosection"
      className={[styles.heroSection, className].join(" ")}
    >
      <video className={styles.bgVideo} src={heroVideo} autoPlay loop muted />
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
            TRANSFORMING SPACES INSPIRING LIVES
          </motion.h1>
          <motion.h1 className={styles.weSpecialiseInContainer}>
            <p className={styles.weSpecialiseIn}>
              We specialise in creating beautiful,
            </p>
            <p className={styles.functionalSpacesTailored}>
              functional spaces tailored to your unique style and needs.
            </p>
          </motion.h1>
        </div>
        <Button
          className={styles.btn}
          endIcon={<img width="22px" height="22px" src="/arrow--right-2.svg" />}
          variant="contained"
          onClick={handleOpen}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <MessageSection />
        </Box>
      </Modal>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;

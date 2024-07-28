import React, { useState } from "react";
import { Button, Modal, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import MessageSection from "../sections/MessageSection";
import styles from "../sections/GetInTouchVRSection.module.css";

const GetStarted = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.getStarted}>
      <div className={styles.getStartedWrapper}>
        <h1 className={styles.getStarted1}>{`Get Started `}</h1>
      </div>
      <span className={styles.experienceYourDream}>
        Experience your dream space before it’s built with our 3D rendering and
        walkthrough video services. Contact ShaKa Design Lab today to learn more
        and schedule a consultation. Let us bring your vision to life with
        unparalleled clarity and detail.
      </span>
      <div className={styles.getStartedInner}>
        <div className={styles.frameParent}>
          <a className={styles.getInTouch}>GET IN TOUCH</a>
          <img
            onClick={handleOpen}
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="./right-arrow-circle-icon.svg"
          />
        </div>
      </div>
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
    </div>
  );
};

export default GetStarted;

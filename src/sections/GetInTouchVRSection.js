import PropTypes from "prop-types";
import styles from "../sections/GetInTouchVRSection.module.css";

const GetStarted = () => {
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
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="./right-arrow-circle-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

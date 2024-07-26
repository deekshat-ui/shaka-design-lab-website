import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from '../components/VideoBannerComponent.module.css';

const texts = [
  "Realistic Visualization",
  "Interactive Walkthrough Videos",
  "Enhanced Decision Making",
  "Effective Communication",
  "Marketing and Presentation"
];

const variants = {
  enter: () => ({
    y: -20,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0
  })
};

const TextLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={styles.loopWrap}>
      <AnimatePresence>
        <motion.span
          className={styles.motionSpan}
          variants={variants}
          key={index}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.5 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const VideoBannerComponent = () => {
  return (
    <div className={styles.styledInputWrap}>
      <TextLoop />
      {/* <input className={styles.styledInput} /> */}
    </div>
  );
}

export default VideoBannerComponent;

import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./AccordionComponent.module.css";

const Accordion = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {content.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionHeader}
            onClick={() => handleToggle(index)}
            onMouseEnter={() => handleToggle(index)}
            onMouseLeave={() => handleToggle(index)}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={styles.icon}>
              {activeIndex === index ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.open : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
          <div className={styles.separator}></div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

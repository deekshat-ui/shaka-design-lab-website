import { motion, useTransform, useScroll } from "framer-motion";
import { cubicBezier, circOut } from "framer-motion"

import styles from "./HorizontalScrollCorouselComponent.module.css";
import { useRef } from "react";

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

const x = useTransform(scrollYProgress, [0, 7], ["-20%", "150%"]);

  return (
    <section ref={targetRef} className={styles.horizontalScrollCarousel}>
      <div className={styles.carouselContainer}>
        <motion.div style={{ x }} className={styles.carouselContent}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className={styles.card}>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
        }}
        className={styles.cardBackground}
      ></div>
      {/* <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{card.title}</p>
      </div> */}
    </div>
  );
};

export default HorizontalScrollCarousel;

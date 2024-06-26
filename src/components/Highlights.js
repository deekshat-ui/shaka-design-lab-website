import PropTypes from "prop-types";
import styles from "./Highlights.module.css";

const Highlights = ({ className = "" }) => {
  return (
    <section className={[styles.highlights, className].join(" ")}>
      <div id="animation_linear_scroll" className={styles.bar}>
        <div className={styles.elementGroup}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <h3 className={styles.childContainer}>No Hidden Costs</h3>
        </div>
        <div className={styles.elementGroup}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <h3 className={styles.childContainer}>Easy EMI</h3>
        </div>
        <div className={styles.elementGroup}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-2.svg"
          />
          <h3 className={styles.childContainer}>On-Time Delivery</h3>
        </div>
        <div className={styles.elementGroup}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-3.svg"
          />
          <h3 className={styles.childContainer}>Satisfied Customers</h3>
        </div>
        <div className={styles.elementGroup}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-4.svg"
          />
          <h3 className={styles.childContainer}>All Payments Accepted</h3>
        </div>
        <div className={styles.elementGroup}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-5.svg"
          />
          <h3 className={styles.childContainer}>Assured Warranty</h3>
        </div>
      </div>
    </section>
  );
};

Highlights.propTypes = {
  className: PropTypes.string,
};

export default Highlights;

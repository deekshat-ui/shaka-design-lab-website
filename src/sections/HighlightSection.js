import PropTypes from "prop-types";
import styles from "./HighlightSection.module.css";

const HighlightSection = ({ className = "" }) => {
  return (
    <section className={[styles.highlights, className].join(" ")}>
      <div id="animation_linear_scroll" className={styles.bar}>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s /7  * (7 - 1) * -1)" }}
        >
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <h3 className={styles.childContainer}>No Hidden Costs</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 2) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <h3 className={styles.childContainer}>Easy EMI</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 3) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-2.svg"
          />
          <h3 className={styles.childContainer}>On-Time Delivery</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 4) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-3.svg"
          />
          <h3 className={styles.childContainer}>Satisfied Customers</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 5) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-4.svg"
          />
          <h3 className={styles.childContainer}>All Payments Accepted</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 6) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-5.svg"
          />
          <h3 className={styles.childContainer}>Assured Warranty</h3>
        </div>
        <div
          className={styles.elementGroup}
          style={{ animationDelay: "calc(15s / 7 * (7 - 7) * -1)" }}
        >
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-6.svg"
          />
          <h3 className={styles.childContainer}>Vastu Consultation</h3>
        </div>
      </div>
    </section>
  );
};

HighlightSection.propTypes = {
  className: PropTypes.string,
};

export default HighlightSection;

import PropTypes from "prop-types";
import styles from "./Highlights.module.css";

const Highlights = ({ className = "" }) => {
  return (
    <section className={[styles.highlights, className].join(" ")}>
      <div className={styles.bar}>
        <div className={styles.clockCheck}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <h3 className={styles.noHiddenCostsContainer}>
            <p className={styles.noHidden}>No Hidden</p>
            <p className={styles.costs}>Costs</p>
          </h3>
        </div>
        <div className={styles.clockCheck1}>
          <img className={styles.icon1} alt="" src="/icon-1.svg" />
          <h3 className={styles.easyEmi}>Easy EMI</h3>
        </div>
        <div className={styles.clockCheck2}>
          <img className={styles.icon2} alt="" src="/icon-2.svg" />
          <h3 className={styles.onTimeDelivery}>
            <p className={styles.onTime}>On-Time</p>
            <p className={styles.delivery}>Delivery</p>
          </h3>
        </div>
        <div className={styles.faceHappy}>
          <img className={styles.icon3} alt="" src="/icon-3.svg" />
          <h3 className={styles.satisfiedCustomers}>
            <p className={styles.satisfied}>Satisfied</p>
            <p className={styles.customers}>Customers</p>
          </h3>
        </div>
        <div className={styles.currencyRupee}>
          <img className={styles.icon4} alt="" src="/icon-4.svg" />
          <h3 className={styles.allPaymentsAccepted}>All Payments Accepted</h3>
        </div>
        <div className={styles.award03}>
          <img className={styles.icon5} alt="" src="/icon-5.svg" />
          <h3 className={styles.assuredWarranty}>
            <p className={styles.assured}>Assured</p>
            <p className={styles.warranty}>Warranty</p>
          </h3>
        </div>
      </div>
    </section>
  );
};

Highlights.propTypes = {
  className: PropTypes.string,
};

export default Highlights;

import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <img
        className={styles.navbarLogoIcon}
        loading="lazy"
        alt=""
        src="/navbar-logo.svg"
      />
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
          <div className={styles.navigationBackground} />
          <a className={styles.home}>Home</a>
          <a className={styles.about}>About</a>
          <a className={styles.services}>Services</a>
          <a className={styles.portfolio}>Portfolio</a>
          <a className={styles.process}>Process</a>
          <a className={styles.process1}>3D Services</a>
          <a className={styles.contact}>Contact</a>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

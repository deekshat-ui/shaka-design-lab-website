import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = [styles.navbar];
  if (scrolled) {
    navbarClasses.push(styles.scrolled);
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <img
        className={styles.navbarLogoIcon}
        loading="lazy"
        alt=""
        src="/navbar-logo.svg"
      />
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
          <a className={styles.navItems}>Home</a>
          <a className={styles.navItems}>About</a>
          <a className={styles.navItems}>Services</a>
          <a className={styles.navItems}>Portfolio</a>
          <a className={styles.navItems}>Process</a>
          <a className={styles.navItems}>3D Services</a>
          <a className={styles.navItems}>Contact</a>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

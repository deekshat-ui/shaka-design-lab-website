import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
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
          <a className={styles.navItems}>Process</a>
          <a className={styles.navItems}>VR Services</a>
          <a className={styles.navItems}>Contact</a>
        </div>
      </div>
      {/* <Button
        className={styles.btn}
        variant="contained"
        sx={{
          color: "black",
          fontSize: "14",
          background: "rgba(255, 255, 255, 0.5)",
          border: "rgba(255, 255, 255, 0.4) solid 1px",
          borderRadius: "25px",
          "&:hover": { background: "rgba(255, 255, 255, 0.5)" },
        }}
      >
        Book now
      </Button> */}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

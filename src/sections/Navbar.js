import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // Check which section is currently in view
    const sections = [
      "herosection",
      "servicesection",
      "processsection",
      "vrservicessection",
      "messagesection",
      "contactsection",
    ];
    let current = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          current = section;
          break;
        }
      }
    }

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

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
          <a
            className={`${styles.navItems} ${
              activeSection === "herosection" ? styles.active : ""
            }`}
            onClick={() => scrollToSection("herosection")}
          >
            Home
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "servicesection" ? styles.active : ""
            }`}
            onClick={() => scrollToSection("servicesection")}
          >
            Services
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "processsection" ? styles.active : ""
            }`}
            onClick={() => scrollToSection("processsection")}
          >
            Process
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "vrservicessection" ? styles.active : ""
            }`}
            onClick={() => scrollToSection("vrservicessection")}
          >
            VR Services
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "messagesection" ? styles.active : ""
            }`}
            onClick={() => scrollToSection("contactsection")}
          >
            Contact
            <span className={styles.underline}></span>
          </a>
        </div>
      </div>
      {/* Button code commented out */}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

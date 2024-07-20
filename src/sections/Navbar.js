import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.state &&
      location.state.scrollTo
    ) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(location.state.scrollTo);
      }
    }
  }, [location]);

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
          <Link
            to="/vrservices"
            className={`${styles.navItems} ${
              activeSection === "vrservicessection" ? styles.active : ""
            }`}
          >
            VR Services
            <span className={styles.underline}></span>
          </Link>
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
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

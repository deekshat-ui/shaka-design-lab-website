import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
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
        if (rect.top <= 10 && rect.bottom >= 10) {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <div className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}>
          <a
            className={`${styles.navItems} ${
              activeSection === "herosection" ? styles.active : ""
            }`}
            onClick={() => {
              scrollToSection("herosection");
              setMenuOpen(false);
            }}
          >
            Home
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "servicesection" ? styles.active : ""
            }`}
            onClick={() => {
              scrollToSection("servicesection");
              setMenuOpen(false);
            }}
          >
            Services
            <span className={styles.underline}></span>
          </a>
          <a
            className={`${styles.navItems} ${
              activeSection === "processsection" ? styles.active : ""
            }`}
            onClick={() => {
              scrollToSection("processsection");
              setMenuOpen(false);
            }}
          >
            Process
            <span className={styles.underline}></span>
          </a>
          <Link
            to="/vrservices"
            className={`${styles.navItems} ${
              activeSection === "vrservicessection" ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            VR Services
            <span className={styles.underline}></span>
          </Link>
          <a
            className={`${styles.navItems} ${
              activeSection === "messagesection" ? styles.active : ""
            }`}
            onClick={() => {
              scrollToSection("contactsection");
              setMenuOpen(false);
            }}
          >
            Contact
            <span className={styles.underline}></span>
          </a>
        </div>
        <button className={styles.menuIcon} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

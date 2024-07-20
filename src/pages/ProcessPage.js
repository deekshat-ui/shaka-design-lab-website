import { Button } from "@mui/material";
import Navbar from "../sections/Navbar";
import Accordion from "../components/AccordionComponent";
import ContactSection from "../sections/ContactSection";
import styles from "./ProcessPage.module.css";

const ProcessPage = () => {
  const processData = [
    {
      index: 0,
      title: "Residential Design",
      content:
        "From cozy apartments to luxurious homes, we create spaces that reflect your personality and lifestyle.",
    },
    {
      index: 1,
      title: "Commercial Design",
      content:
        "We design functional, aesthetically pleasing commercial spaces that enhance productivity and brand image.",
    },
    {
      index: 2,
      title: "Renovations",
      content:
        "Transform your space with our comprehensive renovation services, from concept to completion.",
    },
    {
      index: 3,
      title: "Consultations",
      content:
        "Get expert advice and guidance for your interior design projects",
    },
  ];
  return (
    <div className={styles.mainDesign}>
      <Navbar />
      <section className={styles.processContainer}>
        <div className={styles.highlights}>
          <span>Our Design Process</span>
        </div>
        <div className={styles.accordion}>
          <Accordion content={processData} />
        </div>
      </section>
      <ContactSection />
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.shakaDesignsLlp}>
            ©2024 | ShaKa Designs LLP. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;

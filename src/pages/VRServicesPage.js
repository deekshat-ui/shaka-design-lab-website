import { Button } from "@mui/material";
import Navbar from "../sections/Navbar";
import ContactSection from "../sections/ContactSection";
import styles from "./VRServicesPage.module.css";

const VRServicesPage = () => {
  return (
    <div id="vrservicessection" className={styles.mainDesign}>
      <Navbar />

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

export default VRServicesPage;

import { Button } from "@mui/material";
import Navbar from "../sections/Navbar";
import VideoBannerComponent from "../components/VideoBannerComponent";
import GetInTouchSection from "../sections/GetInTouchVRSection";
import ContactSection from "../sections/ContactSection";
import styles from "./VRServicesPage.module.css";

const VRServicesPage = () => {
  return (
    <div id="vrservicessection" className={styles.mainDesign}>
      <Navbar />
      <div className={styles.heroSection}>
        <img className={styles.bgIcon} alt="" src="/vr-page-hero-img.jpg" />
        <div className={styles.content}>
          <span>Experience the future of design with</span>
          <span>
            <VideoBannerComponent />
          </span>
        </div>
      </div>
      <GetInTouchSection />
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

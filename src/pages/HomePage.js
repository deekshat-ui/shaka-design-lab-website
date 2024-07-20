import React, { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import HighlightSection from "../sections/HighlightSection";
import ServicesSection from "../sections/ServicesSection";
import PortfolioSection from "../sections/PortfolioSection";
import MessageSection from "../sections/MessageSection";
import ContactSection from "../sections/ContactSection";
import styles from "./HomePage.module.css";
import HeroSectionVideo from "../assets/video-1.mp4";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.mainDesign}>
      <Navbar />
      <HeroSection
        onModalOpen={() => setIsModalOpen(true)}
        onModalClose={() => setIsModalOpen(false)}
      />
      <HighlightSection />
      <ServicesSection />
      <section className={styles.banner}>
        <video
          className={styles.bgVideo}
          src={HeroSectionVideo}
          autoPlay
          loop
          muted
        />
        <h1 className={styles.craftedBeauty}>Crafted Beauty</h1>
      </section>
      <PortfolioSection />
      <MessageSection />
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

export default HomePage;

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
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload } from "@cloudinary/react";

const HomePage = () => {
  const cld1 = new Cloudinary({
    cloud: {
      cloudName: "dofo7drvd",
    },
  });

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
        <AdvancedVideo
          className={styles.bgVideo}
          cldVid={cld1
            .video("banner-section-video")
            .delivery("q_auto")
            .format("auto")}
          autoPlay
          loop
          muted
          plugins={[lazyload()]}
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

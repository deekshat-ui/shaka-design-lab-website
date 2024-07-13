import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import ServiceList from "../components/ServiceList";
import HeadTitle from "../components/HeadTitle";
import Projects from "../components/Projects";
import LetsTalk from "../components/LetsTalk";
import GetInTouch from "../components/GetInTouch";
import styles from "./MainDesign.module.css";
import videoBg from "../assets/video-1.mp4";

const MainDesign = () => {
  return (
    <div className={styles.mainDesign}>
      <Navbar />
      <HeroSection />
      <Highlights />
      <ServiceList />
      <section className={styles.banner}>
        <video className={styles.bgVideo} src={videoBg} autoPlay loop muted />
        <h1 className={styles.craftedBeauty}>Crafted Beauty</h1>
      </section>
      <section className={styles.blog}>
        <HeadTitle />
        <Projects />
      </section>
      <LetsTalk />
      <GetInTouch />
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

export default MainDesign;

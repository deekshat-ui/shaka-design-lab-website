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

const MainDesign = () => {
  return (
    <div className={styles.mainDesign}>
      <Navbar />
      <HeroSection />
      <Highlights />
      <section className={styles.servicesIntro}>
        <div className={styles.overviewContentParent}>
          <div className={styles.overviewContent}>
            <Button
              className={styles.overviewContentChild}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#181818",
                fontSize: "14",
                background: "#f5f5f5",
                borderRadius: "25px",
                "&:hover": { background: "#f5f5f5" },
                width: 153,
                height: 35,
              }}
            >
              OUR SERVICES
            </Button>
          </div>
          <h1 className={styles.aBriefOverview}>
            A brief overview of the services offered
          </h1>
        </div>
      </section>
      <ServiceList />
      <section className={styles.banner}>
        <img className={styles.bgIcon} alt="" src="/bg-1@2x.png" />
        <h1 className={styles.craftedBeauty}>Crafted Beauty</h1>
        <div className={styles.play1Wrapper}>
          <img
            className={styles.play1Icon}
            loading="lazy"
            alt=""
            src="/play-1.svg"
          />
        </div>
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

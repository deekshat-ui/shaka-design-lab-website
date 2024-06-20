import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";

const HeroSection = ({ className = "" }) => {
  return (
    <section className={[styles.heroSection, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.transformingSpacesInspiring}>
            TRANSFORMING SPACES, INSPIRING LIVES
          </h1>
          <h1 className={styles.weSpecialiseInContainer}>
            <p
              className={styles.weSpecialiseIn}
            >{`We specialise in creating beautiful, `}</p>
            <p className={styles.functionalSpacesTailored}>
              functional spaces tailored to your unique style and needs.
            </p>
          </h1>
        </div>
        <Button
          className={styles.btn}
          endIcon={<img width="22px" height="22px" src="/arrow--right-2.svg" />}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "14",
            background: "rgba(255, 255, 255, 0.5)",
            border: "rgba(255, 255, 255, 0.4) solid 1px",
            borderRadius: "25px",
            "&:hover": { background: "rgba(255, 255, 255, 0.5)" },
            width: 243,
            height: 50,
          }}
        >
          DISCOVER MORE
        </Button>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;

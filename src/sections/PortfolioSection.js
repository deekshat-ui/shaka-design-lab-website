import PropTypes from "prop-types";
import HeadTitle from "./HeadTitle";
import Projects from "./Projects";
import styles from "./PortfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <section id="processsection" className={styles.blog}>
      <HeadTitle />
      <Projects />
    </section>
  );
};
export default PortfolioSection;

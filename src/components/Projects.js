import PropTypes from "prop-types";
import styles from "./Projects.module.css";

const Projects = ({ className = "" }) => {
  return (
    <div className={[styles.projects, className].join(" ")}>
      <div className={styles.projectTypes}>
        <h1 className={styles.residential}>RESIDENTIAL</h1>
        <div className={styles.typeList}>
          <div className={styles.typeItems} />
        </div>
        <div className={styles.typeList1}>
          <div className={styles.commercial}>Commercial</div>
        </div>
        <div className={styles.typeList2}>
          <div className={styles.typeListChild} />
        </div>
        <div className={styles.typeList3}>
          <div className={styles.renovations}>ReNoVations</div>
        </div>
      </div>
      <div className={styles.blog}>
        <div className={styles.div}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <h1 className={styles.livingRoom}>Living Room</h1>
        </div>
        <div className={styles.div1}>
          <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
          <h1 className={styles.bedroom}>Bedroom</h1>
        </div>
        <div className={styles.div2}>
          <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
          <h1 className={styles.balcony}>Bathroom</h1>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;

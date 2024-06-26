import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ServiceList.module.css";

const ServiceList = ({ className = "" }) => {
  return (
    <section className={[styles.serviceList, className].join(" ")}>
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
      <div className={styles.serviceItems}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCardParent}>
              <div className={styles.serviceCard}>
                <input
                  className={styles.serviceDetails}
                  placeholder="Residential Design"
                  type="text"
                />
                <img
                  className={styles.arrowRight1}
                  alt=""
                  src="/arrow--right-1.svg"
                />
              </div>
              <div className={styles.serviceBackgrounds} />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <input
                  className={styles.frameChild}
                  placeholder="Commercial Design"
                  type="text"
                />
                <img
                  className={styles.arrowRight11}
                  alt=""
                  src="/arrow--right-1-1.svg"
                />
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <input
                  className={styles.frameInner}
                  placeholder="Renovations"
                  type="text"
                />
                <img
                  className={styles.arrowRight2}
                  alt=""
                  src="/arrow--right-1-1.svg"
                />
              </div>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <input
                  className={styles.frameInput}
                  placeholder="Consultations"
                  type="text"
                />
                <img
                  className={styles.arrowRight12}
                  alt=""
                  src="/arrow--right-1-1.svg"
                />
              </div>
              <div className={styles.frameChild1} />
            </div>
          </div>
          <div className={styles.serviceDescription}>
            <div className={styles.descriptionItems}>
              <Button
                className={styles.descriptionList}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#181818",
                  fontSize: "14",
                  borderColor: "#181818",
                  borderRadius: "25px",
                  "&:hover": { borderColor: "#181818" },
                  width: 205,
                  height: 35,
                }}
              >
                FURNITURE SELECTION
              </Button>
              <div className={styles.descriptionList1}>
                <div className={styles.customDesigns}>CUSTOM DESIGNS</div>
              </div>
              <Button
                className={styles.descriptionList2}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#181818",
                  fontSize: "14",
                  borderColor: "#181818",
                  borderRadius: "25px",
                  "&:hover": { borderColor: "#181818" },
                  width: 169,
                  height: 35,
                }}
              >
                SPACE PLANNING
              </Button>
              <div className={styles.descriptionList3}>
                <div className={styles.colorConsultation}>
                  COLOR CONSULTATION
                </div>
              </div>
            </div>
            <div className={styles.serviceSummary}>
              <div className={styles.fromCozyApartments}>
                From cozy apartments to luxurious homes, we create spaces that
                reflect your personality and lifestyle.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.consultation}>
          <Button
            className={styles.btn}
            endIcon={
              <img width="22px" height="22px" src="/arrow--right-2-2.svg" />
            }
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#181818",
              fontSize: "14",
              borderColor: "#181818",
              borderRadius: "25px",
              "&:hover": { borderColor: "#181818" },
              width: 305,
            }}
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

ServiceList.propTypes = {
  className: PropTypes.string,
};

export default ServiceList;

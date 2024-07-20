import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ServicesSection.module.css";
import Accordion from "../components/AccordionComponent";
import React, { useState } from "react";

const ServiceList = ({ className = "" }) => {
  const servicesData = [
    {
      index: 0,
      title: "Residential Design",
      content:
        "From cozy apartments to luxurious homes, we create spaces that reflect your personality and lifestyle.",
    },
    {
      index: 1,
      title: "Commercial Design",
      content:
        "We design functional, aesthetically pleasing commercial spaces that enhance productivity and brand image.",
    },
    {
      index: 2,
      title: "Renovations",
      content:
        "Transform your space with our comprehensive renovation services, from concept to completion.",
    },
    {
      index: 3,
      title: "Consultations",
      content:
        "Get expert advice and guidance for your interior design projects",
    },
  ];

  return (
    <section
      id="servicesection"
      className={[styles.serviceList, className].join(" ")}
    >
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
      <Accordion content={servicesData} />
    </section>
  );
};

ServiceList.propTypes = {
  className: PropTypes.string,
};

export default ServiceList;

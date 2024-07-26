import { Button } from "@mui/material";
import Navbar from "../sections/Navbar";
import Accordion from "../components/AccordionComponent";
import ContactSection from "../sections/ContactSection";
import styles from "./ProcessPage.module.css";

const ProcessPage = () => {
  const processData = [
    {
      index: 0,
      title: "Initial Consultation",
      content: `
      <div style="text-align: left;">
        <b>Objective</b>: Understand your vision, needs, and budget
        <ul>
          <li>Meeting: We begin with an in-depth consultation, either in-person or virtually.</li>
          <li>Discussion Topics: Your style preferences, functional requirements, project goals, and budget constraints.</li>
          <li>Site Visit: If possible, we visit the site to take initial measurements and assess the space.</li>
        </ul>
      </div>
    `,
    },
    {
      index: 1,
      title: "Concept Development",
      content: `
      <div style="text-align: left;">
        <b>Objective</b>: Create a customized design concept that aligns with your vision.
        <ul>
          <li>Design Brief: We develop a detailed design brief based on our initial discussions.</li>
          <li>Mood Boards: Our team creates mood boards and concept sketches to visualize the design direction.</li>
          <li>Preliminary Layouts: We draft preliminary floor plans and layouts to illustrate the proposed use of space.</li>
          <li>Feedback: We present these initial ideas to you and gather feedback to refine the concept.</li>
        </ul>
      </div>
    `,
    },
    {
      index: 2,
      title: "Design Development",
      content: `
      <div style="text-align: left;">
        <b>Objective</b>: Develop detailed design plans and select materials.
        <ul>
          <li>Detailed Plans: We create detailed floor plans, elevations, and 3D renderings.</li>
          <li>Material Selection: We curate a selection of materials, finishes, fabrics, and furniture that fit the design concept.</li>
          <li>Samples: Physical samples and swatches are provided for your review.</li>
          <li>Budget Review: We present an updated budget based on the selected materials and design elements.</li>
        </ul>
      </div>
    `,
    },
    {
      index: 3,
      title: "BOQ Assistance and Estimation",
      content: `
      <div style="text-align: left;">
        <b>Objective</b>: Creating a BOQ for an interior design project follows similar principles to general construction but focuses more on finishes, furnishings, and decorative elements.
        <ul>
          <li>Itemize Quantities: Measure and quantify all materials, furnishings, and tasks.</li>
          <li>List Items: For each space, list the required items & Include detailed descriptions, unit of measurement, and quantity required.</li>
          <li>Cost Estimation: Research and determine the cost of each item that includes material costs, labor costs, and any other relevant expenses.</li>
          <li>Compile the BOQ: Arrange the items systematically, usually by space/room. Ensure clarity and accuracy to avoid discrepancies during the project.</li>
        </ul>
      </div>
    `,
    },
  ];

  return (
    <div className={styles.mainDesign}>
      <Navbar />
      <section className={styles.processContainer}>
        <div className={styles.highlights}>
          <span>Our Design Process</span>
        </div>
        <div className={styles.accordion}>
          <Accordion content={processData} />
        </div>
      </section>
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

export default ProcessPage;

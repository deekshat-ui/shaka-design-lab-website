import PropTypes from "prop-types";
import styles from "./ContactSection.module.css";

const ContactSection = ({ className = "" }) => {
  return (
    <footer
      id="contactsection"
      className={[styles.getInTouch, className].join(" ")}
    >
      <div className={styles.contactDetails}>
        <div className={styles.address}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />

          <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          <div className={styles.aSubhamApartmentContainer}>
            <p className={styles.aSubhamApartment}>
              4A,&nbsp;Subham&nbsp;Apartment,
            </p>
            <p className={styles.aHussainpur}>75/1/A&nbsp;Hussainpur,</p>
            <p className={styles.kolkata700107}>Kolkata&nbsp;-&nbsp;700107</p>
          </div>
          <div className={styles.contact}>
            Phone number:&nbsp;033-35034016,&nbsp;8777612563
          </div>
          <div className={styles.email}>
            <span>
              Email address:&nbsp;
              <a
                className={styles.shakadesignscom}
                href="mailto:business@shakadesigns.com"
                target="_blank"
              >
                <span className={styles.shakadesignscom1}>
                  business@shakadesigns.com
                </span>
              </a>
               
            </span>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.socialLinks}>
          <div className={styles.socialIcons}>
            <div className={styles.socialIconsfacebooknegativeWrapper}>
              <img
                className={styles.socialIconsfacebooknegative}
                loading="lazy"
                alt=""
                src="/social-iconsfacebooknegative.svg"
              />
            </div>
            <div className={styles.socialIconsinstagramnegativWrapper}>
              <img
                className={styles.socialIconsinstagramnegativ}
                loading="lazy"
                alt=""
                src="/social-iconsinstagramnegative.svg"
              />
            </div>
            <div className={styles.socialIconsxTwitterorigiWrapper}>
              <img
                className={styles.socialIconsxTwitterorigi}
                loading="lazy"
                alt=""
                src="/social-iconsx-twitteroriginal.svg"
              />
            </div>
            <div className={styles.socialIconspinterestoriginaWrapper}>
              <img
                className={styles.socialIconspinterestorigina}
                loading="lazy"
                alt=""
                src="/social-iconspinterestoriginal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfService}>Terms of service</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

ContactSection.propTypes = {
  className: PropTypes.string,
};

export default ContactSection;

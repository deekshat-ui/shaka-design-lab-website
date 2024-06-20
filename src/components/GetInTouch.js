import PropTypes from "prop-types";
import styles from "./GetInTouch.module.css";

const GetInTouch = ({ className = "" }) => {
  return (
    <footer className={[styles.getInTouch, className].join(" ")}>
      <div className={styles.shakaLogo}>Shaka design lab</div>
      <div className={styles.contactDetails}>
        <div className={styles.address}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          <div className={styles.aSubhamApartmentContainer}>
            <p
              className={styles.aSubhamApartment}
            >{`4A, Subham Apartment, `}</p>
            <p className={styles.aHussainpur}>75/1/A Hussainpur,</p>
            <p className={styles.kolkata700107}>Kolkata - 700107</p>
          </div>
          <div
            className={styles.contact}
          >{`Phone number: 033-35034016 , 8777612563 `}</div>
          <div className={styles.email}>
            <span>
              Email address: Business
              <a
                className={styles.shakadesignscom}
                href="mailto:info@shakadesigns.com"
                target="_blank"
              >
                <span className={styles.shakadesignscom1}>
                  @shakadesigns.com
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
              <div className={styles.whyChooseUs}>Why Choose Us?</div>
              <div className={styles.services}>Services</div>
              <div className={styles.contact1}>Contact</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfService}>Terms of service</div>
              <div className={styles.faqs}>FAQs</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./LetsTalk.module.css";

const LetsTalk = ({ className = "" }) => {
  return (
    <section className={[styles.letsTalk, className].join(" ")}>
      <div className={styles.contactUsWrapper}>
        <h1 className={styles.contactUs}>Contact Us</h1>
      </div>
      <div className={styles.form}>
        <TextField
          className={styles.inputFields}
          placeholder="First Name"
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <TextField
          className={styles.inputFields1}
          placeholder="Last Name"
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <div className={styles.inputFields2}>
          <div className={styles.emailAddress}>Email Address</div>
          <div className={styles.inputFieldsChild} />
        </div>
        <div className={styles.inputFields3}>
          <div className={styles.message}>Message</div>
          <div className={styles.inputFieldsItem} />
        </div>
      </div>
      <div className={styles.submit}>
        <Button
          className={styles.btn}
          disableElevation
          variant="outlined"
          sx={{
            color: "#000",
            fontSize: "14",
            borderColor: "#000",
            borderRadius: "27px",
            "&:hover": { borderColor: "#000" },
            width: 205,
            height: 53,
          }}
        >
          Send message
        </Button>
      </div>
    </section>
  );
};

LetsTalk.propTypes = {
  className: PropTypes.string,
};

export default LetsTalk;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import styles from "./MessageSection.module.css";

const MessageSection = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobType, setJobType] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(phone));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    if (newPhone && !validatePhone(newPhone)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    var templateParams = {
      to_name: "Shaka Design Labs",
      from_name: name,
      from_email: email,
      phone: phone,
      message: jobType,
    };
    emailjs
      .send(
        "service_fr7sytr",
        "template_t65uwge",
        templateParams,
        "ggcK47lqjU0OEUDzZ"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert(
          "Your message has been sent successfully! We will contact you shortly."
        );
        setName("");
        setEmail("");
        setPhone("");
        setJobType("");
        setEmailError("");
        setPhoneError("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <section
      id="messagesection"
      className={[styles.letsTalk, className].join(" ")}
    >
      <div className={styles.contactUsWrapper}>
        <h1 className={styles.contactUs}>Contact Us</h1>
      </div>
      <div className={styles.form}>
        <TextField
          className={styles.inputFields}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <TextField
          className={styles.inputFields}
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <TextField
          className={styles.inputFields}
          placeholder="Phone Number"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          error={!!phoneError}
          helperText={phoneError}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <FormControl
          className={styles.inputFields}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        >
          <InputLabel id="job-type-label">Looking for</InputLabel>
          <Select
            labelId="job-type-label"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            label="Job Type"
          >
            <MenuItem value="Commercial New Job">Commercial-New Job</MenuItem>
            <MenuItem value="Commercial Renovation">
              Commercial-Renovation
            </MenuItem>
            <MenuItem value="Residential New Job">Residential-New Job</MenuItem>
            <MenuItem value="Residential Renovation">
              Residential-Renovation
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.submit}>
        <Button
          type="submit"
          onClick={handleSubmit}
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

MessageSection.propTypes = {
  className: PropTypes.string,
};

export default MessageSection;

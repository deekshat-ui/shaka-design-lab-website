import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import styles from "./MessageSection.module.css";

const MessageSection = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID (e.g., 'contact_form')
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: "business@shakadesigns.com",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
        // Clear the form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      })
      .finally(() => {
        handleClose();
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
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
        <TextField
          className={styles.inputFields}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "35px", fontSize: "18px" },
            "& .MuiInputBase-input": { color: "#4d4d4d" },
            width: "470px",
          }}
        />
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

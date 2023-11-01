import React from "react";
import { Link } from "react-router-dom";
import "../Styles/styles.scss";

function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <div className="contact ref-description itemPageFont">
        <h3>
          <u>Contact & Follow</u>
        </h3>
        <Link className="contactLink" to="https://github.com/Ryan-McMurtry">
          <p>
            <b>Github:</b> https://github.com/Ryan-McMurtry
          </p>
        </Link>
        <Link
          className="contactLink"
          to="https://linkedin.com/in/ryan-mcmurtry/"
        >
          <p>
            <b>LinkedIn:</b> https://linkedin.com/in/ryan-mcmurtry/
          </p>
        </Link>

        <p>
          <b>Email:</b> rkainoam@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;

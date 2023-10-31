import React from "react";
import stripeImg from "../../images/payment-logo.jpg"
import "../../Styles/styles.scss";

function Footer() {
    return (
      <div className="footer">
        <div className="footerContent">
          <div className="left">
            <span classname="copyright">
              &#169; Copyright 2023 Ryan McMurtry. All Rights Reserved.
            </span>
          </div>
          <div className="right">
            <img className="stripeImg" src={stripeImg} />
          </div>
        </div>
      </div>
    );
}


export default Footer;
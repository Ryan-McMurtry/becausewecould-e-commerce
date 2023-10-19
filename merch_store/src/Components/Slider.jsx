import React from "react";
import lArrow from "../images/left_arrow_icon.png";
import rArrow from "../images/right_arrow_icon.png";
import img1 from "../images/function_album_cover_design_concept.jpg";
import img2 from "../images/c4.jpg";
import img3 from "../images/love_bounce_album_cover_design_concept.jpg";
import "../Styles/styles.scss";


function Slider() {
    return (
      <div className="slider">
        <div className="sliderContainer">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
        <div className="icons">
          <div className="icon">
            <img src={lArrow} />
          </div>
          <div className="icon">
            <img src={rArrow} />
          </div>
        </div>
      </div>
    );
}


export default Slider;
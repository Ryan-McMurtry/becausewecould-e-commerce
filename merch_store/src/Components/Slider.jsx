import React, { useState } from "react";
import lArrow from "../images/left_arrow_icon.png";
import rArrow from "../images/right_arrow_icon.png";
import img1 from "../images/function_album_cover_design_concept.jpg";
import img2 from "../images/c4.jpg";
import img3 from "../images/love_bounce_album_cover_design_concept.jpg";
import img4 from "../images/tsubi-club.jpg";
import img5 from "../images/cosmogramma.jpg";
import img6 from "../images/potsu.jpg";
import img7 from "../images/juno.jpg";
import img8 from "../images/06-burst.jpg";
import img9 from "../images/liz.jpg";
import "../Styles/styles.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="sliderContainer"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
      </div>
      <div className="icons">
        <div className="icon">
          <img src={lArrow} onClick={prevSlide} />
        </div>
        <div className="icon">
          <img src={rArrow} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default Slider;

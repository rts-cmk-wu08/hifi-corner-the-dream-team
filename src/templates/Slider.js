import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";

const Example = () => {
  const images = [
    "Billeder skal fetches",
    "Billeder skal fetches",
    "Billeder skal fetches",
  ];

  return (
    <Slide>
      <div className="each-slide-effect slidershowSlider">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span className="slide__spanDot">Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect slidershowSlider">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span className="slide__spanDot">Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect slidershowSlider">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span className="slide__spanDot">Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};

export default Example;

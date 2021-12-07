import { useEffect, useState } from "react";

import "./carousel.css";

const Carousel = ({ current, setCurrent, blueprints }) => {
  let blueprintsMaxLength = blueprints.length - 1;

  const handlePrev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? blueprintsMaxLength : prevState - 1
    );
  };

  const handleNext = () => {
    setCurrent((prevState) =>
      prevState === blueprintsMaxLength ? 0 : prevState + 1
    );
  };

  const handleBluePrint = () => {};

  return (
    <div id="carousel-container">
      <div
        id="carousel-button-left"
        className="carousel-buttons"
        onClick={handlePrev}
      >
        {`<`}
      </div>
      <div id="image-container">
        {blueprints.map((blueprint, index) => (
          <div
            id={blueprint.id}
            className={`carousel-content ${
              index === current ? " content" : " content active"
            }`}
            key={index}
            onClick={handleBluePrint}
          >
            {index === current && (
              <img
                id="carousel-image"
                src={blueprint.imageUrl}
                height="400px"
                width="500px"
              />
            )}
          </div>
        ))}
      </div>
      <div
        id="carousel-button-right"
        className="carousel-buttons"
        onClick={handleNext}
      >
        {`>`}
      </div>
    </div>
  );
};

export default Carousel;

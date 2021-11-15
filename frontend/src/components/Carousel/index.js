import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [carousel, setCarousel] = useState(["item 1", "item 2", "item 3"]);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? carousel.length - 1 : current - 1
    );
  };
  const handleNext = () => {
    setCurrent((prevState) =>
      prevState === carousel.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div id="carousel-container">
      <button onClick={handlePrev}>left</button>
      <div id="image-container">
        {carousel.map((element, index) => (
          <div key={index}>{index === current && element}</div>
        ))}
      </div>
      <button onClick={handleNext}>right</button>
    </div>
  );
};

export default Carousel;

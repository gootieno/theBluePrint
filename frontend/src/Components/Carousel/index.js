import { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ children, items, handleItems }) => {
  const [current, setCurrent] = useState(0);

  const handleCarousel = (event) => {
    if (event.target.name === "left") {
      setCurrent((prevIndex) =>
        prevIndex === 0 ? items.length - 2 : prevIndex - 1
      );
    } else {
      setCurrent((prevIndex) =>
        prevIndex === items.length - 2 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    console.log("current ", current);
    handleItems(items[current]);
  }, [current]);

  return (
    <div id="carousel-container">
      <button
        name="left"
        onMouseDown={handleCarousel}
        className="carousel-buttons"
      >
        {"<"}
      </button>
      {children}
      <button
        name="right"
        onMouseDown={handleCarousel}
        className="carousel-buttons"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;

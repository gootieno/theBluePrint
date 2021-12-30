import { useState } from "react";
import "./dynamic-carousel.css";

const DynamicCarousel = ({ handleProject, items, dataRoute }) => {
  const [current, setCurrent] = useState(0);

  const handleButtonRight = (event) => {
    if (current !== items.length - 1) setCurrent((prevState) => prevState + 1);
  };

  const handleButtonLeft = (event) => {
    if (current !== 0) setCurrent((prevState) => prevState - 1);
  };

  return (
    <div id="carousel-container-outer">
      <div
        id="carousel-left-button"
        className="carousel-buttons"
        onClick={handleButtonLeft}
      >
        {`<`}
      </div>
      <div id="carousel-container-inner">
        {items.map((item, i) => (
          <div
            key={`key-${i}`}
            onClick={() => setCurrent(i)}
            className={
              i === current ? "carousel-items current" : "carousel-items"
            }
          >
            <div
              id={`item-${item.id}`}
              data-name={item.name}
              data-route={dataRoute}
              className="carousel-single-item"
              onClick={handleProject}
            >
              {`item ${item.name}`}
            </div>
          </div>
        ))}
      </div>
      <div
        id="carousel-right-button"
        className="carousel-buttons"
        onClick={handleButtonRight}
      >
        {`>`}
      </div>
    </div>
  );
};

export default DynamicCarousel;

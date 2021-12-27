import { useEffect, useState } from "react";
import "./dynamic-carousel.css";

const DynamicCarousel = ({ handleProject, items, dataRoute }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {}, [current]);

  const handleButtonRight = (event) => {
    document.getElementById("carousel-container-inner").scrollLeft += 300;
    if (current !== items.length - 1) setCurrent((prevState) => prevState + 1);
  };

  const handleButtonLeft = (event) => {
    document.getElementById("carousel-container-inner").scrollLeft -= 300;
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
            className={
              i === current ? "carousel-items current" : "carousel-items"
            }
          >
            <div
              id={`item-${item}`}
              data-name={item}
              data-route={dataRoute}
              className="carousel-single-item"
              onClick={handleProject}
            >
              {`item ${item}`}
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

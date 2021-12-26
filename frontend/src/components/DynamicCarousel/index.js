import { useEffect } from "react";
import { useState } from "react";
import "./dynamic-carousel.css";

const DynamicCarousel = ({ handleProject }) => {
  const [current, setCurrent] = useState(0);

  const [itemsArr, setItemsArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  const handleButtonRight = () => {
    document.getElementById("carousel-container-inner").scrollLeft += 300;
    if (current !== itemsArr.length - 1)
      setCurrent((prevState) => prevState + 1);
  };

  const handleButtonLeft = () => {
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
        {itemsArr.map((item, i) => (
          <div
            className={
              i === current ? "carousel-items current" : "carousel-items"
            }
            onClick={handleProject}
          >
            <div
              id={`item-${item}`}
              className="carousel-single-item"
            >{`item ${item}`}</div>
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

import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [carousel, setCarousel] = useState([
    "https://ih1.redbubble.net/image.1101060514.8885/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg",
    "https://i.ytimg.com/vi/0QTvi6BBJII/maxresdefault.jpg",
    "https://i.pinimg.com/originals/c2/7c/4f/c27c4f51aaa1d0a22015ca091a046696.jpg",
  ]);
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
      <div
        id="carousel-button-left"
        className="carousel-buttons"
        onClick={handlePrev}
      >
        <div id="left">left</div>
      </div>
      <div id="image-container">
        {carousel.map((element, index) => (
          <div
            id="carousel-content"
            className={index === current ? "content" : "content active"}
            key={index}
          >
            {index === current && <img id="carousel-image" src={element} />}
          </div>
        ))}
      </div>
      <div
        id="carousel-button-right"
        className="carousel-buttons"
        onClick={handleNext}
      >
        <div id="right">right</div>
      </div>
    </div>
  );
};

export default Carousel;

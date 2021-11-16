import { useState } from "react";

import "./carousel.css";

const Carousel = ({ current, setCurrent }) => {
  const [carousel, setCarousel] = useState([
    "https://i.pinimg.com/originals/0c/26/c8/0c26c89223132796dfe3e2c1a50dc017.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ae44534954809.57c6b45732879.jpg",
    "https://i.pinimg.com/originals/c2/7c/4f/c27c4f51aaa1d0a22015ca091a046696.jpg",
  ]);

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
        left
      </div>
      <div id="image-container">
        {carousel.map((element, index) => (
          <div
            id="carousel-content"
            className={index === current ? "content" : "content active"}
            key={index}
          >
            {index === current && (
              <img
                id="carousel-image"
                src={element}
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
        right
      </div>
    </div>
  );
};

export default Carousel;

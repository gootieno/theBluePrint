import "./carousel.css";

const Carousel = ({ children, current, setCurrent, items }) => {
  const handleCarousel = (event) => {
    if (event.target.name === "left" && current === 0) {
      setCurrent(items.length - 1);
      return;
    }

    if (event.target.name === "right" && current === items.length - 1) {
      setCurrent(0);
      return;
    }

    if (event.target.name === "left") {
      setCurrent((prev) => prev - 1);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

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

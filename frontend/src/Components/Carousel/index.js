import "./carousel.css";

const Carousel = ({ children, current, setCurrent, items }) => {
  const handleCarousel = (event) => {
    event.target.classList.add("mouse-down");
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

  const handleMouseUp = (event) => {
    event.target.classList.remove("mouse-down");
  };

  return (
    <div id="carousel-container">
      <button
        name="left"
        onMouseDown={handleCarousel}
        onMouseUp={handleMouseUp}
        className="carousel-buttons"
      >
        {"<"}
      </button>
      {children}
      <button
        name="right"
        onMouseDown={handleCarousel}
        onMouseUp={handleMouseUp}
        className="carousel-buttons"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;

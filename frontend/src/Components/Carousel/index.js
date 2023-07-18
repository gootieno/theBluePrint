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
    console.log("current ", current);
  };

  return (
    <div>
      <button name="left" onClick={handleCarousel}>
        {"<"}
      </button>
      {children}
      <button name="right" onClick={handleCarousel}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;

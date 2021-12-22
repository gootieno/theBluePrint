import BluePrint from "../BluePrints";
import "./carousel.css";

const Carousel = ({
  carouselItems,
  current,
  setCurrent,
  handleCarouselItem,
  dataRoute,
}) => {
  let carouselMaxLength = carouselItems.length - 1;

  const handlePrev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? carouselMaxLength : prevState - 1
    );
  };

  const handleNext = () => {
    setCurrent((prevState) =>
      prevState === carouselMaxLength ? 0 : prevState + 1
    );
  };

  return (
    <div id="carousel-container">
      <div
        id="carousel-button-left"
        className="carousel-buttons"
        onClick={handlePrev}
      >
        {`<`}
      </div>
      <div id="image-container">
        {carouselItems.map((item, index) => (
          <div
            id={item.id}
            className={`carousel-content ${
              index === current ? " content" : " content active"
            }`}
            key={index}
          >
            {index === current && (
              <img
                data-route={dataRoute}
                id="carousel-image"
                src={item.imageUrl}
                height="400px"
                width="500px"
                onClick={handleCarouselItem}
                data-name={item.name}
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
        {`>`}
      </div>
    </div>
  );
};

export default Carousel;

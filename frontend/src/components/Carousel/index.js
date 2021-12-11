import BluePrint from "../BluePrint";
import "./carousel.css";

const Carousel = ({ current, setCurrent, blueprints, handleBluePrint }) => {
  let blueprintsMaxLength = blueprints.length - 1;

  const handlePrev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? blueprintsMaxLength : prevState - 1
    );
  };

  const handleNext = () => {
    setCurrent((prevState) =>
      prevState === blueprintsMaxLength ? 0 : prevState + 1
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
        {blueprints.map((blueprint, index) => (
          <div
            id={blueprint.id}
            className={`carousel-content ${
              index === current ? " content" : " content active"
            }`}
            key={index}
          >
            {index === current && (
              <BluePrint
                blueprint={blueprint}
                handleBluePrint={handleBluePrint}
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

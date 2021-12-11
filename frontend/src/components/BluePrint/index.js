import "./blueprints.css";

const BluePrint = ({ blueprint, handleBluePrint }) => {
  return (
    <img
      data-route="blueprints"
      id="blueprint-image"
      src={blueprint.imageUrl}
      height="400px"
      width="500px"
      onClick={handleBluePrint}
      data-name={blueprint.carName}
    />
  );
};

export default BluePrint;

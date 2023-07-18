import "./blueprint.css";

const Blueprint = ({ blueprint }) => {
  return (
    <div id="blueprint-container">
      <img
        id={blueprint.id}
        src={blueprint.imageUrl}
        alt={blueprint.name}
        className="blueprint-images"
      />
    </div>
  );
};

export default Blueprint;

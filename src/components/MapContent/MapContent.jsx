import { places } from "../../utils/places";
import "./MapContent.css";

const MapContent = ({ getPlace }) => {
  return (
    <div className="MapContent">
      <img
        src={places[getPlace].img}
        className="MapContentIMG"
        alt={places[getPlace].name}
      />
      <div className="MapContentText">
        <h1>{places[getPlace].name}</h1>
        <h2>{places[getPlace].description}</h2>
        <h3>"{places[getPlace].quote}"</h3>
      </div>
      <a href="#map" className="backMap">
        Back to the map
      </a>
    </div>
  );
};

export default MapContent;

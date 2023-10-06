import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function App() {
  const imageBounds = [
    [0, 0],
    [1000, 1000],
  ];

  return (
    <div className="map">
      <MapContainer center={[48.8566, 2.3522]} zoom={10}>
        <TileLayer attribution='&copy;{" "}
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>{" "}
          contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
      </MapContainer>
    </div>
  );
}

import React from "react";
import ReactMapGL from "react-map-gl";

const viewport = {
  latitude: 50.25,
  longitude: 7.72,
  zoom: 2,
};

function App(props) {
  return (
    <div>
      <h1>React Maplibre Map</h1>
      <label htmlFor="search">Suche: </label>
      <input id="search" type="text" />
      <ReactMapGL
        {...viewport}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
    </div>
  );
}

export default App;

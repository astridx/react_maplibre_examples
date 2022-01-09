import React from 'react';
import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [7.72, 50.25],
  zoom: 2
});

function App(props) {
  return (
    <div>
      <h1>React Maplibre Map</h1>
    </div>
  );
}

export default App;

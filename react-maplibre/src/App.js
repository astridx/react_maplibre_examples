import React from 'react';
import maplibregl from 'maplibre-gl';

const appName = "app";

function showDate(mode = "onlyYear") {
  const d = new Date();
  if (mode === "onlyYear") return d.getFullYear();
  else return d.getMonth() + 1 + "-" + d.getFullYear();
}

function App(props) {
  let subtitle = "";
  if (props) {
    subtitle =
      "Open-source mapping libraries for developers of web and mobile applications.";
  }
  return (
    <div>
      <h1>React Maplibre Map</h1>
      <h2>{subtitle}</h2>
      <small>{appName}</small>
      <br />
      <small>{showDate("monthAndYear")}</small>
    </div>
  );
}

export default App;

import React from 'react';

const appName = "app";

function App(props) {
  let subtitle = '';
  if (props) {
    subtitle = "Open-source mapping libraries for developers of web and mobile applications.";
  }
  return (
    <div>
      <h1>React Maplibre Map</h1>
      <h2>{subtitle}</h2>
      <small>{appName}</small>
    </div>
  );
}

export default App;

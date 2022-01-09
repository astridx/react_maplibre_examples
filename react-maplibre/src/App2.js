import React from 'react';

function App(props) {
  let subtitle = '';
  if (props) {
    subtitle = "Open-source mapping libraries for developers of web and mobile applications.";
  }
  return (
    <div>
      <h1>React Maplibre Map</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default App;

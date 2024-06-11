// src/App.jsx
import React, { useState } from 'react';
import Map from './Map.jsx';
import './index.css'; // 스타일시트 추가

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <>
      Zoom level: {zoomLevel}x
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <hr />
      <Map zoomLevel={zoomLevel} />
    </>
  );
}

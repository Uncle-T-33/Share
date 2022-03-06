import React from "react";
import "./App.css";
import Box from "./Example/Box";
import Card from "./Example/Card";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <Box />
      <div style={{ height: "4rem", width: "100%", display: "block" }} />
      <Card />
    </div>
  );
}

export default App;

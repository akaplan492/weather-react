import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Weather city="New York" />
      <Footer />
    </div>
  );
}

export default App;

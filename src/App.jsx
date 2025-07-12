import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cards from "./components/cards/Cards";

function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => setStays(response.data))
      .catch((error) => console.error("Error fetching stays:", error));
  }, []);

  return (
    <div>
      <Header />
      <Cards stays={stays} className="p-4 md:p-6" />
    </div>
  );
}

export default App;

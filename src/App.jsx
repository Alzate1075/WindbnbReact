import React, { useEffect, useState } from "react";
import axios from "axios";
import FiltroStays from "./components/FiltroStays";

function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => setStays(response.data))
      .catch((error) => console.error("Error fetching stays:", error));
  }, []);

  return <FiltroStays stays={stays} />;
}

export default App;

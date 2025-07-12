import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => {
        setStays(response.data);
        console.log(stays);
      })
      .catch((error) => {
        console.error("Error fetching stays:", error);
      });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

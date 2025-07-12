import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => {
        setStays(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stays:", error);
      });
  }, []);

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div>
        <Cards
          stays={stays}
          className="overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2"
        />
      </div>
    </div>
  );
}

export default App;

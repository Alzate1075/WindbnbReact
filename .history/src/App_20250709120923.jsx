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
        <Cards stays={stays} className="p-4 md:p-8" />
      </div>
    </div>
  );
}

export default App;

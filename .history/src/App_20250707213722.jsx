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
        console.log(stays);
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
        <Cards stays={stays} />
        {stays.map((stay) => (
          <div key={stay.id} className="stay-card">
            <img src={stay.photo} alt={stay.title} />
            <h2>{stay.title}</h2>
            <p>{stay.description}</p>
            <p>{stay.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

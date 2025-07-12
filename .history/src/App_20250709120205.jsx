import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [hotel, sethotel] = useState([]);

  useEffect(() => {
    axios
      .get("/hotels.json")
      .then((response) => {
        sethotel(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, []);

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div>
        <Cards hotel={hotel} className="p-4 md:p-8" />
      </div>
    </div>
  );
}

export default App;

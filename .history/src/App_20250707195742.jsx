import { useState, useEffect } from "react";
import axios from "axios";

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
  });
  return <></>;
}

export default App;

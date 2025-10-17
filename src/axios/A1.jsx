import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const loadFacts = async () => {
      try {
        const res = await axios.get("https://catfact.ninja/facts");
        console.log(res.data)
        setFacts(res.data.data); 
      } catch (err) {
        console.error("Error loading facts:", err);
      }
    };
    loadFacts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🐱 Cat Facts</h2>
      <ul>
        {facts.map((item, index) => (
          <li key={index}>{item.fact}</li>
        ))}
      </ul>
    </div>
  );
}

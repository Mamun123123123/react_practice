import React, { useState, useEffect } from "react";
import axios from "axios";

const A3 = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(res.data);
        setJoke(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1> Random Joke</h1>
      {joke ? (
        <div>
          <h3>{joke.setup}</h3>
          <p><strong>{joke.punchline}</strong></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default A3;

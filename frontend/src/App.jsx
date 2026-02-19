import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <>
      <h1> Hi I am Rustom</h1>
      <h3>{jokes.length} jokes available</h3>
      {jokes.map(joke => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;

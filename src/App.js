import './App.css';
import axios from 'axios';
import fetchMovieData from "./api/apiDetails";
import { useState, useEffect } from 'react';

function App() {

  const [showName, setShowName] = useState("");

  useEffect(() => {
    fetchMovieData()
      .then((data => {
        console.log(data[0])
        setShowName(JSON.stringify(data))
      }))
      .catch((err => console.log(err)))

    // setShowName(data);  
  }, []);


  return (
    <div className="App">
      <h1>Movie Details</h1>

      <p>{showName[1]}</p>
    </div>
  );
}

export default App;


// confirmed.value
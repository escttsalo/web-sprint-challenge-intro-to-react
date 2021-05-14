import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  // const [filmData, setFilmData] = useState()
  useEffect( () => {
    axios
    .get('https://swapi.dev/api/people')
    .then( res => {
      setData(res.data)
    })
    .catch( err => alert(err))
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        data && data.map( char => {
          return <Character name={char.name} birthYear={char.birth_year}></Character>
        })
      }
    </div>
  );
}

export default App;

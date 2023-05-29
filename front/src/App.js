import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "milagros4046@hotmail.com";
  const password = "Rosales123";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    fetch(`http://localhost:3000/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  return (
    <div>
      <div className="App" style={{ padding: "35px" }}>
        <Nav onSearch={onSearch} random={random} />
        <div>
          <Routes>
            <Route exact path="/" element={<Form login={login} />}></Route>
            <Route path="/" element={<Nav />}></Route>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;

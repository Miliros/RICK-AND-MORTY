import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Episodes from "./components/Episodes/Episodes";


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "milagros4046@hotmail.com";
  const password = "Rosaher123";
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

  // function onSearch(id) {
  //   fetch(`http://localhost:3000/onsearch/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         characters.find((element) => element.id === data.id) === undefined
  //           ? setCharacters((characters) => [...characters, data])
  //           : alert("Personaje repetido, prueba otro ID.");
  //       } else {
  //         alert("No hay personajes con ese ID.");
  //       }
  //     });
  // }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div>
      <div>
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Form login={login} />}></Route>
            <Route path="/" element={<Nav />}></Route>
            <Route
              path="/home"
              element={<Home onClose={onClose} characters={characters} />}
            ></Route>
            <Route exact path="/detail/:id" element={<Detail />}></Route>
            <Route path="/episodes" element={<Episodes />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;

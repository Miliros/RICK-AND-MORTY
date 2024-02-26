import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Home from "./components/Home/Home.jsx";
import Episodes from "./components/Episodes/Episodes.jsx";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  // const username = "milagros4046@hotmail.com";
  // const password = "Rosaher123";
  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    !isAuthenticated && !isLoading && loginWithRedirect(); // no estoy autenticado y no esta cargando me lleva al login
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    isAuthenticated && !isLoading && navigate("/home");  //si estoy autenticado y no esta cargando me lleva a /home
  }, [isAuthenticated, isLoading]);

  


  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div>
      <div>
        <Nav />
        <div>
          <Routes>
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

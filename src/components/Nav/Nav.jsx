import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {location.pathname !== "/" && (
        <div className={styles.navBar}>
          <SearchBar onSearch={props.onSearch} />
          <Link to="/About">About </Link>
          <Link to="/Home">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      )}
    </div>
  );
}

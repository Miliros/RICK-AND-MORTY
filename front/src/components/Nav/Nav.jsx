import { React, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllChars, getAllEpisodes, removeState } from "../../redux/action";
import logo from "../../../src/logo r&m.png";

export default function Nav(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      {location.pathname !== "/" && (
        <div className={styles.navBar}>
          <div className={styles.divLinks}>
            <img className={styles.logo} src={logo} alt="" />

            <Link
              className={styles.links}
              to="/home"
              onClick={() => dispatch(getAllChars())}
            >
              <p>Home</p>
            </Link>

            <Link className={styles.links} to="/episodes">
              <p>Episodes</p>
            </Link>
            <Link className={styles.links} to="/favorites">
              <p>Favorites</p>
            </Link>
          </div>
          <div className={styles.searchBar}>
            {" "}
            <SearchBar />
          </div>
        </div>
      )}
    </div>
  );
}

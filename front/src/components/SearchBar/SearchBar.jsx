import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharByName } from "../../redux/action";
import { useLocation } from "react-router-dom";

export default function SearchBar(props) {
  const [characterName, setCharacterName] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const handleChange = (e) => {
    setCharacterName(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getCharByName(characterName));
  };
  return (
    <>
      {location.pathname === "/home" && (
        <div className={styles.divSerchBar}>
          <input
            placeholder="character..."
            className={styles.inputSearch}
            type="search"
            onChange={handleChange}
          />
          <button
            type="submit"
            className={styles.addButton}
            onClick={handleOnClick}
          >
            search
          </button>
        </div>
      )}
    </>
  );
}

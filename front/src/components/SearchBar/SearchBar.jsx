import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  return (
    <div className={styles.divSerchBar}>
      <input
        placeholder="personaje..."
        className={styles.inputSearch}
        type="search"
        onChange={handleChange}
      />
      <button
        className={styles.addButton}
        onClick={() => props.onSearch(character)}
      >
        Agregar
      </button>

      <button className={styles.buttonRandom} onClick={() => props.random()}>
        RANDOM CHARACTER
      </button>
    </div>
  );
}

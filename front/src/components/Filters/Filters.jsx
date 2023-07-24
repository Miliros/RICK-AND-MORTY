import { orderCards } from "../../redux/action";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";

export default function Filters({ setCount, setGender, setCheckState }) {
  const dispatch = useDispatch();

  const handleFiltergender = (e) => {
    setCheckState(true);

    setCount(1);
    setGender(e.target.value);
  };

  const handleOrderName = (e) => {
    setCheckState(true);

    dispatch(orderCards(e.target.value));
  };

  return (
    <div className={styles.cntnGen}>
      <div className={styles.cntnFilters}>
        <div className={styles.divFilter}>
          <p>Filters</p>
          <div>
            <label>Gender</label>
            <select
              className={styles.select}
              onChange={(e) => handleFiltergender(e)}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless </option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
        <div className={styles.divOrder}>
          <p>Order</p>
          <label>Alphabetically</label>
          <select
            className={styles.select}
            onChange={(e) => handleOrderName(e)}
          >
            <option>-</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
}

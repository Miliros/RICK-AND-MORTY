import React from "react";
import { connect } from "react-redux";
import {useDispatch} from "react-redux"
import { orderCards } from "../../redux/action";
import styles from "./Favorites.module.css";

export function Favorites(props) {
 const dispatch = useDispatch();
 const handleOptionChange= (event)=>{
  dispatch(orderCards(event.target.value))
 }
  return (
    <div>
      {props.myFavorites.map((charact) => (
        <div className={styles.divCard}>
          <div className={styles.divImg}>
            <h2 className={styles.name}>{charact.name}</h2>
            <img className={styles.img} src={charact.image} alt="" />
          </div>
          <div>
            <select>
            <option value="Ascendente" onChange={handleOptionChange}>Ascendente</option>
            <option value="Descendente" onChange={handleOptionChange}>Ascendente</option>
            </select>
            <select>
            <option value="Male" onChange={handleOptionChange}>Male</option>
            <option value="Female" onChange={handleOptionChange}>Female</option>
            <option value="Genderless" onChange={handleOptionChange}>Genderless</option>
            <option value="Genderless" onChange={handleOptionChange}>Genderless</option>
            <option value="unknown" onChange={handleOptionChange}>unknown</option>


            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);

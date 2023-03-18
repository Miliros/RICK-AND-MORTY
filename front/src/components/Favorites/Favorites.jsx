import React,{ useEffect } from "react";
import { connect } from "react-redux";
import {useDispatch, useSelector} from "react-redux"
import { orderCards, getFavorite } from "../../redux/action";
import styles from "./Favorites.module.css";

export function Favorites() {
//  const dispatch = useDispatch();
 const { myFavorites } = useSelector(state => state);

//  useEffect(() => {
//   dispatch(getFavorite())
//  }, [dispatch])

 const handleOptionChange= (event)=>{
  dispatch(orderCards(event.target.value))
 }

  return (
    <div>
      {myFavorites.map((charact) => (
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

export default Favorites;

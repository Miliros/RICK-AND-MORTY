import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addCharacter, deleteCharacter } from "../../redux/action";
// import { connect } from "react-redux";
import {useDispatch} from "react-redux"



export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(deleteCharacter(props.id));
    }
    if (isFav === false) {
      setIsFav(true);
      console.log("props", props)
     dispatch(addCharacter(props))
    }
  };
  // useEffect(() => {
  //   props.myFavorites.forEach((fav) => {
  //       if (fav.id === props.id) {
  //         setIsFav(true);
  //     }
  //   });
  // }, [props.myFavorites]);


  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.buttonOnClose} onClick={props.onClose}>
        X
      </button>

      <div className={styles.divImg}>
        <img className={styles.img} src={props.image} alt="" />
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
      </div>
      <div className={styles.divProps}>
        <h2 className={styles.cardProps}>Species: {props.species}</h2>
        <h2 className={styles.cardProps}>|</h2>
        <h2 className={styles.cardProps}>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispach) => {
//   return {
//     addCharacter: (character) => {
//       dispach(addCharacter(character));
//     },
//     deleteCharacter: (id) => {
//       dispach(deleteCharacter(id));
//     },
//   };
// };
// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Card);
export default Card


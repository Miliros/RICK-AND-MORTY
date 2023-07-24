import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Card.module.css";
import { AddFav, deleteFav, getFav } from "../../redux/action";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav === true || props.checkFav === true) {
      setIsFav(false);
      dispatch(deleteFav(props.id));
      dispatch(getFav());
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(AddFav(props));
    }
  };
  const handleClick = () => {
    setIsOpen(false);
    props.onClose();
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.divCard}>
      <div className={styles.divButtons}>
        <div>
          {isFav || props.checkFav ? (
            <button className={styles.buttonFavorite} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.buttonFavorite} onClick={handleFavorite}>
              🤍
            </button>
          )}
        </div>
        <div>
          <button className={styles.buttonOnClose} onClick={handleClick}>
            X
          </button>
        </div>
      </div>

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

export default Card;

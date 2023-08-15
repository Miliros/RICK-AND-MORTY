import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Card.module.css";
import { AddFav, deleteFav, getFav } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { IconHeart, IconX } from "@tabler/icons-react";

export function Card(props) {
  const dispatch = useDispatch();
  const MyFavorites = useSelector((state) => state.myFavorites);
  const isFavorite = MyFavorites.filter((fav) => fav.id === props.id);

  const handleFavorite = async () => {
    if (props.checkFav === true || isFavorite[0]?.id === props.id) {
      await dispatch(deleteFav(props.id));
      await dispatch(getFav());
    } else {
      await dispatch(AddFav(props));
      await dispatch(getFav());
    }
  };

  return (
    <div className={styles.divCard}>
      <div className={styles.divButtons}>
        <div>
          {isFavorite[0]?.id === props.id || props.checkFav === true ? (
            <div className={styles.buttonFavorite} onClick={handleFavorite}>
              <IconHeart color="red" />
            </div>
          ) : (
            <div className={styles.buttonFavorite} onClick={handleFavorite}>
              <IconHeart />
            </div>
          )}
        </div>
      </div>

      <img className={styles.img} src={props.image} alt="" />
      <div className={styles.divImg}>
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

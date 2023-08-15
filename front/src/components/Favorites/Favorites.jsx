import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, getFav } from "../../redux/action";
import styles from "./Favorites.module.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import lo from "../../../src/lo.gif";

export function Favorites() {
  const dispatch = useDispatch();
  const MyFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);

  return (
    <div className={styles.divCards}>
      {MyFavorites && MyFavorites.length > 0 ? (
        MyFavorites.map((e, i) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={false}
            checkFav={e.checkFav}
            key={i++}
          />
        ))
      ) : (
        <div className={styles.addFav}>
          <p>Add your favorite!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;

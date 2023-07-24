import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../redux/action";
import styles from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const stateDetail = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.divDetail}>
        {Object.entries(stateDetail).length !== 0 ? (
          <div>
            <div className={styles.divImg}>
              <img src={stateDetail.image} alt="imagen" />
              <h2 className={styles.name}>Name: {stateDetail.name}</h2>
            </div>
            <div className={styles.divProps}>
              <h2 className={styles.cardProps}>Status: {stateDetail.status}</h2>
              <h2 className={styles.cardProps}>
                {" "}
                Gender: {stateDetail.gender}.
              </h2>
              <h2 className={styles.cardProps}>
                Specie: {stateDetail.species}
              </h2>
              <h2 className={styles.cardProps}>
                Origin: {stateDetail.origin.name}
              </h2>
            </div>
          </div>
        ) : (
          "LOADINGGGGG"
        )}
      </div>
    </>
  );
}

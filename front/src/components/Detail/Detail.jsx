import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../redux/action";
import styles from "./Detail.module.css";
import lo from "../../../src/lo.gif";

export default function Detail() {
  const dispatch = useDispatch();
  const stateDetail = useSelector((state) => state.detail);
  console.log(stateDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.cntnDetail}>
        <div className={styles.divDetail}>
          {Object.entries(stateDetail).length !== 0 ? (
            <div className={styles.cntnDataDetail}>
              <p className={styles.name}>{stateDetail.name}</p>

              <div className={styles.ctnImgProps}>
                <img
                  className={styles.img}
                  src={stateDetail.image}
                  alt="imagen"
                />

                <div className={styles.divProps}>
                  <p className={styles.cardProps}>
                    Status: {stateDetail.status}
                  </p>
                  <p className={styles.cardProps}>
                    {" "}
                    Gender: {stateDetail.gender}.
                  </p>
                  <p className={styles.cardProps}>
                    Specie: {stateDetail.species}
                  </p>
                  <p className={styles.cardProps}>
                    Origin: {stateDetail.origin.name}
                  </p>
                  <p className={styles.cardProps}>
                    Location: {stateDetail.location.name}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <img src={lo} alt="" className={styles.loading} />
          )}
        </div>
      </div>
    </>
  );
}

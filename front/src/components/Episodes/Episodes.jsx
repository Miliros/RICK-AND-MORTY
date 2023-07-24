import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Episodes.module.css";

import { getAllEpisodes } from "../../redux/action";

export default function Episodes({ url }) {
  const dispatch = useDispatch();

  const stateEpisodes = useSelector((state) => state.episodesPage);
  console.log(stateEpisodes);

  const checkPagination = useSelector((state) => state.checkPagination);

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(getAllEpisodes(count));
  }, [dispatch, count]);

  const prevPage = () => {
    setCount(count - 1);
  };

  const nextPage = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className={styles.cntnEpisodes}>
        <div className={styles.cntnCards}>
          {" "}
          {stateEpisodes &&
          stateEpisodes.results &&
          stateEpisodes.results.length > 0
            ? stateEpisodes.results.map((el, index) => (
                <div key={index} className={styles.cardEpisodes}>
                  <h1 className={styles.name}>{el.name}</h1>
                  <h2>{el.air_date}</h2>
                  <a href={el.url} target="_blank" rel="noopener noreferrer">
                    {el.url}
                  </a>
                </div>
              ))
            : "loading"}
        </div>
        {checkPagination === true && (
          <div className={styles.divPagination}>
            <button
              onClick={prevPage}
              disabled={count === 1}
              className={styles.divButtonPage}
            >
              prev
            </button>
            <button
              disabled={count === stateEpisodes.info.pages}
              onClick={nextPage}
              className={styles.divButtonPage}
            >
              next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

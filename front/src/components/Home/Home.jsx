import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { getAllChars } from "../../redux/action";
import styles from "./Home.module.css";
import Filters from "../Filters/Filters";
import logo from "../../../src/lo.gif";

export default function Home(props) {
  const allCharacters = useSelector((state) => state.allCharacters);
  const characters = useSelector((state) => state.characters);

  const checkPagination = useSelector((state) => state.checkPagination);
  const [checkState, setCheckState] = useState(false);
  const [count, setCount] = useState(1);
  const [gender, setGender] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (gender !== undefined && gender !== "all") {
      dispatch(getAllChars(count, gender));
    } else {
      dispatch(getAllChars(count));
    }
  }, [dispatch, count, gender]);

  useEffect(() => {
    if (checkState === true) {
      setCheckState(false);
    }
  }, [checkState]);

  const prevPage = () => {
    setCount(count - 1);
  };

  const nextPage = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.cntnCards}>
      {characters && characters.results && characters.results.length > 0 ? (
        <div>
          {" "}
          <Filters
            setCount={setCount}
            setGender={setGender}
            setCheckState={setCheckState}
          />
          <div className={styles.cntnCards}>
            {characters &&
              characters.results &&
              characters.results.length > 0 &&
              characters.results.map((el, index) => (
                <div key={index}>
                  <Card
                    species={el.species}
                    name={el.name}
                    image={el.image}
                    gender={el.gender}
                    id={el.id}
                  />
                </div>
              ))}
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
                disabled={count === allCharacters.info.pages}
                onClick={nextPage}
                className={styles.divButtonPage}
              >
                next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <img className={styles.loading} src={logo} alt="" />
        </div>
      )}
    </div>
  );
}

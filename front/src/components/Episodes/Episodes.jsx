import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Episodes.module.css";
import Card from "../Card/Card";
import { IconCalendar, IconMovie } from "@tabler/icons-react";
import logo from "../../../src/lo.gif";
import { getAllEpisodes, getDetail } from "../../redux/action";

export default function Episodes() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);
  const [arrayCharacters, setArrayCharacters] = useState([]);

  useEffect(() => {
    if (episodes != undefined && episodes.characters != undefined) {
      const fetchCharacters = episodes.characters.map((url) => {
        const urlParts = url.split("/");
        const ultimoValor = urlParts[urlParts.length - 1];
        return dispatch(getDetail(ultimoValor));
      });

      Promise.all(fetchCharacters)
        .then((charactersDetails) => {
          setArrayCharacters(charactersDetails);
        })
        .catch((error) => {
          console.error("Error fetching character details:", error);
        });
    }
  }, [episodes]);

  useEffect(() => {
    dispatch(getAllEpisodes(1));
  }, [dispatch]);

  const handleEpisode = (e) => {
    dispatch(getAllEpisodes(e.target.value));
  };

  const numbers = [];
  for (let i = 1; i <= 51; i++) {
    numbers.push(i);
  }

  return (
    <>
      <div className={styles.cntnEpisodes}>
        <div className={styles.ctnData}>
          <div className={styles.ctnName}>
            <label htmlFor="numbers" className={styles.label}>
              <strong>Select episode:</strong>
            </label>
            <select
              className={styles.select}
              id="numbers"
              onChange={(e) => handleEpisode(e)}
            >
              {numbers.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.ctnName}>
            <IconMovie size="35px" />
            <h1 className={styles.name}> {episodes?.name}.</h1>
          </div>

          <div className={styles.ctnName}>
            <IconCalendar size="35px" />
            <h1 className={styles.name}>{episodes?.air_date}.</h1>
          </div>
        </div>
        <p className={styles.characters}>
          <strong>Characters</strong>
        </p>
        <div className={styles.cntnCards}>
          {arrayCharacters && arrayCharacters && arrayCharacters.length > 0 ? (
            arrayCharacters.map((el, index) => (
              <div key={index}>
                <Card
                  species={el.payload.species}
                  name={el.payload.name}
                  image={el.payload.image}
                  gender={el.payload.gender}
                  id={el.payload.id}
                />
              </div>
            ))
          ) : (
            <div>
              <img className={styles.loading} src={logo} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={styles.divCards}>
      {characters.map(({ name, species, gender, image, index, id }) => (
        <div key={image}>
          <Card
            key={index}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        </div>
      ))}
    </div>
  );
}

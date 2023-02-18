import  useState, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



export default function Detail(){
    const { id } = useParams();
    const [character,setCharacter] = useState({});
    const navigate = useNavigate()

    console.log(character)
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

      const backToHome = () => {
        navigate("/")
      }
    
    return (
        <div>
            <h1>NOMBRE:{character.name}</h1>
            <h4>STATUS:{character.status}</h4>
            <h4>ESPECIE:{character.species}</h4>
            <h4>GENERO:{character.gender}</h4>
            <h4>ORIGIN:{character.origin ? character.origin.name:"" }</h4>
            <img src={character.image}></img>
            <button onClick={()=>backToHome()}>BACK</button>

            
                       
        </div>
    )
    
}
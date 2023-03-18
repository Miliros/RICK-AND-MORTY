
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";




export default function Detail(){
    const { detailId } = useParams();
    const [character,setCharacter] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
          if (char.name) {
              setCharacter(char);
          } else {
          window.alert("No hay personajes con ese ID");
          }
      })
      return setCharacter({});
  }, [detailId]);

      const backToHome = () => {
        navigate("/home")
      }
    
    return (
      <>
      <div>
      <button onClick={()=>backToHome()}>Back to home</button>
      </div>
      { character ? (
        <div>
            <h1>{character.name}</h1>
            <h4>STATUS: {character.status}</h4>
            <h4>ESPECIE: {character.species}</h4>
            <h4>GENERO: {character.gender}</h4>
            <h4>ORIGIN: {character.origin?.name}</h4>   
            <div >
                        <img src={character.image} alt={character.name} />
                    </div>      
        </div>
        
        )
        : ( "" )
        }
        </>
    )
    
}
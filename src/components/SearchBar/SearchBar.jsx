import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [character,setCharacter]=useState("");
   
   const handleChange = (e)=>{
      setCharacter(e.target.value)
   }
   return (
      <div className= {styles.divSerchBar}>
          <input placeholder="personaje..." className= {styles.inputSearch}type='search' 
          onChange={handleChange}/>
      <button className= {styles.addButton} onClick={()=>onSearch(character)}>Agregar</button> 
      </div>
      
      
   );
}

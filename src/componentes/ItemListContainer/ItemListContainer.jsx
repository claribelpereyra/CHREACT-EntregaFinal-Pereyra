import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getLibros, getLibrosPorCat } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  
  const {idCat} = useParams();
  
  useEffect( ()=> {

    const funcionLibros = idCat ? getLibrosPorCat : getLibros;
    
    funcionLibros(idCat)
      .then(res => setLibros(res))
      .catch(error => console.log(error))
      
    }, [idCat])

  return (
    <div>
      <h2> Productos 2024 </h2>
      <ItemList libros={libros}/>
    </div>
  )
}

export default ItemListContainer
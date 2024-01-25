import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getLibros, getLibrosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  
  const {idCategoria} = useParams();
  
  useEffect( ()=> {

    const funcionLibros = idCategoria ? getLibrosPorCategoria : getLibros;
    
    funcionLibros(idCategoria)
      .then(res => setLibros(res))
      .catch(error => console.log(error))
      
    }, [idCategoria])

  return (
    <div>
      <h2> Productos 2024 </h2>
      <ItemList libros={libros}/>
    </div>
  )
}

export default ItemListContainer
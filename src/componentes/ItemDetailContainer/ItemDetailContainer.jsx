import { useState, useEffect } from "react";
import { getUnLibro } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const[libro, setLibro] = useState(null);

  const {idItem} = useParams();

  useEffect( () => {
    getUnLibro(idItem)
        .then(res => setLibro(res))
  }, [idItem])
  
    return (
    <div>
        <ItemDetail {...libro} />
    </div>
  )
}

export default ItemDetailContainer
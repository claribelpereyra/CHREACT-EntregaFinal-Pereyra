import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({libros}) => {
  return (
    <div className="contenedorLibros">
        {libros.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList
import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h2> {nombre} </h2>
        <h3> {autor} </h3>
        <h3>Precio: {precio} </h3>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item
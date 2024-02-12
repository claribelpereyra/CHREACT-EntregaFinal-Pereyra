import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, autor, precio, img }) => {
  return (
    <div className='cardProducto'>
      <Link to={`/item/${id}`}> <img src={img} alt={nombre} /> </Link>
        <h2>{nombre}</h2>
        <h3>{autor}</h3>
        <h3>Precio: ${precio}</h3>
    </div>
  );
}

export default Item;
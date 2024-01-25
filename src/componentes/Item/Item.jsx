import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'; 

const Item = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='cardLibros'>
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <h4> {autor} </h4>
        <p> ${precio} </p>
        <Link to={`/item/${id}`}> Ver detalles </Link>
    </div>
  )
}

export default Item
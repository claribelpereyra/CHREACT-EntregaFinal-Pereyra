import React from 'react';
import './ItemDetail.css';

const ItemDetail = (id, nombre, autor, precio, img) => {
  return (
    <div className='contenedorItemDetail'>
        <h2> {nombre} </h2>
        <h2> {autor} </h2> 
        <h3> ${precio} </h3>
        <p> ID: {id} </p>
        <p>Reseña</p>
        <img src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail
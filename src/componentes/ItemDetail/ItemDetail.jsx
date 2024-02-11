import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2> {nombre} </h2>
        <h3> {precio} </h3>
        <h3> {autor}</h3>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
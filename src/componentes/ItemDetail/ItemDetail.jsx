import React from 'react';
import './ItemDetail.css';
import { useState , useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({id, nombre, autor, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState (0);

  const {agregarAlCarrito} = useContext(CarritoContext);
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad (cantidad);

    const item = {nombre, precio};
    agregarAlCarrito(item, cantidad);xw
  }

  return (
    <div className='contenedorItem'>
        <h2> {nombre} </h2>
        <h3> {precio} </h3>
        <h3> {autor}</h3>
        <img src={img} alt={nombre} />
        
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (< ItemCount
        inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail
// En tu archivo ItemDetail.js
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, autor, stock, precio, img, sinopsis }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className='contenedorItem'>
      <div className="detalles">
        <img src={img} alt={nombre} className="imagen" />
      </div>

      <div className="info">
        <h2 className="titulo"> {nombre} </h2>
        <p className="descripcion">{autor}</p>
        <p className="precio">${precio}</p>

        {agregarCantidad > 0 ? (
          <div className="acciones">
            <Link to="/cart" className="boton-terminar">Terminar compra</Link>
            <Link to="/seguir-comprando" className="boton-seguir">Seguir comprando</Link>
          </div>
        ) : (
          <div className="acciones">
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          </div>
        )}
      </div>

      <div className="sinopsis">
        <h4>Sinopsis</h4>
        <p>{sinopsis}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

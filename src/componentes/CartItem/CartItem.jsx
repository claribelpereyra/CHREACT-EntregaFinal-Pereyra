import React from 'react';
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <h3>{cantidad}</h3>
      <p>Precio: ${item.precio}</p>
    </div>
  );
};

export default CartItem;
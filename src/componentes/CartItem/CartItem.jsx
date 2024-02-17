import React from 'react'

const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h3> {item.nombre} </h3>
        <h3> {cantidad} </h3>
        <p> Precio: ${item.precio} </p>
    </div>
  )
}

export default CartItem
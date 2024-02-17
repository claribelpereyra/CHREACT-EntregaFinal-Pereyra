import './Cart.css';
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-container">
        <h2> Tu carrito está vacío.</h2>
        <Link to="/"> ¡Encontrá tu próxima lectura! </Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      {carrito.map(prod => <CartItem key={prod.id} {...prod} />)}

      <div className="cart-summary">
        <h3> Cantidad de lecturas: {cantidadTotal} </h3>
        <h3> Total: $ {total} </h3>
      </div>

      <div className="cart-buttons">
        <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar compra </Link>
      </div>
    </div>
  )
}

export default Cart;

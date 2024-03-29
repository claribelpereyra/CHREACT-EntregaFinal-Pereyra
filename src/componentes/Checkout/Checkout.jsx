import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("¡Por favor completa todos los campos o moriremos!");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden, rata de dos patas!");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden compra", error);
                setError("No se pudo crear la orden");
            })
    }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title"> Checkout - Ya casi es tuyo🙌 </h2>

            <form className="checkout-form" onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div>
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="telefono"> Telefono </label>
                    <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="emailcon"> Email Confirmación </label>
                    <input type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p className="checkout-message"> {error} </p>
                }

                <button> Finalizar Orden </button>

                {
                    ordenId && <strong className="checkout-message">¡Gracias por su compra! Tu número de orden es: {ordenId} </strong>
                }

            </form>
        </div>
    )
}

export default Checkout
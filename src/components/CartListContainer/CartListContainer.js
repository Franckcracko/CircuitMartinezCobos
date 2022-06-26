import { useContext } from "react"
import CartContext from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { Link } from "react-router-dom"
const CartListContainer = () =>{
    const { cart, removeItem, totalPrice, clearProducts } = useContext(CartContext)
    const handleOnRemove = (cart) =>{
        removeItem(cart)
    }
    if (cart.length == 0 ) {
        return (
            <>
                <h1>No hay Nada en el Carrito</h1>
                <Link to='/'> Regresar a La Tienda </Link>
            </>
            )

    }
    console.log(cart)
    return(
        <>
            {cart.map(prod => <Cart key={prod.id} {...prod} onRemove={handleOnRemove} />)} 
            <h1>TOTAL A PAGAR: {Math.round((totalPrice + Number.EPSILON) * 100) / 100}$</h1>
            <button onClick={clearProducts}>LIMPIAR EL CARRITO</button>
        </>
    )
}
export default CartListContainer
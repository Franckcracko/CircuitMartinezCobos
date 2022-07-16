import { useContext } from "react"
import CartContext from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { Link } from "react-router-dom"
import './stylesCartListContainer.css'
const CartListContainer = () =>{
    
    const { cart, removeItem, totalPrice, clearProducts } = useContext(CartContext)

    const handleOnRemove = (cart) =>{
        removeItem(cart)
    }

    if (cart.length == 0 ) {
        return (
            <div className='cartListEmpty'>
                <h1>No hay Nada en el Carrito</h1>
                <Link to='/' className='linkStore'> Regresar a La Tienda </Link>
            </div>
            )

    }

    return(
        <div className='cartList'>
            {cart.map(prod => <Cart key={prod.id} {...prod} onRemove={handleOnRemove} />)} 

            <h1 className='titleCart'>Total a Pagar: ${ totalPrice }</h1>
            
            <button className='ghostButton' onClick={clearProducts}>Limpiar el Carrito</button>
            <button className='ghostButton'><Link to='/checkout'>Finalizar Compra</Link></button>
        </div>
    )
}
export default CartListContainer
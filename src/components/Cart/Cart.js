import './stylesCart.css'
const Cart = ({id,title,quantity,price, onRemove}) =>{
    return(
        <div className='itemContainer' key={id}>
            <h1>Nombre: <span>{title}</span></h1> 
            <h1>Cantidad: <span>{quantity}</span></h1>
            <h1>Precio por Unidad: <span>${ price / quantity }</span></h1> 
            <h1>Subtotal: <span>${ price }</span></h1> 
            <button className='ghostButton' onClick={() => onRemove(id) } > ELIMINAR </button>
        </div>
    )
}
export default Cart
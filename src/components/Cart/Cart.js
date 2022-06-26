const Cart = ({id,title,quantity,price, onRemove}) =>{
    return(
        <div key={id}>
            <header> <h1>Nombre:</h1> {title}</header>
            <section> 
                <h1>Cantidad:</h1> {quantity}
                <h1>Precio por Unidad:</h1> { price / quantity }
                <h1>Subtotal:</h1> { price }
            </section>
            <footer> 
                <button onClick={() => {               
                    onRemove(id) 
                }}>ELIMINAR</button>
            </footer>
        </div>
    )
}
export default Cart
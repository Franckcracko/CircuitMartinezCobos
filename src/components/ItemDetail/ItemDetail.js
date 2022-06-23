import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, title, pictureUrl,  description, price, stock, }) => {
    
    const { addItem, clearItems } = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{
        console.log(`Se Agregaron ${quantity} ${title}`);
        addItem({id, title, price, quantity})
    }
    return (
        <>
            <h2>Card de detalle</h2>
            <h3 className={'titleDetail'}>{title }</h3>
            <img className={'imgDetail'} src={pictureUrl} ></img>
            <p className={'textDetail'}>{description}</p>
            <span>{price}</span>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
            <button onClick={clearItems}>Borrar</button>
        </>
        )
}

export default ItemDetail
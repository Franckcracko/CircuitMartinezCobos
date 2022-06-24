import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState ,useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, title, pictureUrl,  description, price, stock, }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{

        addItem({id, title, price, quantity})
        setQuantityAdded(quantity)
    }
    return (
        <>
            <h2>Card de detalle</h2>
            <h3 className={'titleDetail'}>{title }</h3>
            <img className={'imgDetail'} src={pictureUrl} />
            <p className={'textDetail'}>{description}</p>
            <span>{price}</span>
            {quantityAdded === 0            
                ?<ItemCount stock={stock} onAdd={handleOnAdd}/>
                : <Link to='/cart'>Terminar Compra</Link>
            }
        </>
        )
}

export default ItemDetail
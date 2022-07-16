import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState ,useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, title, pictureUrl,  description, price, stock }) => {
    const [confirmPurchase, setConfirmPurchase] = useState(false)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{
        addItem({id, title, price, quantity})
        setConfirmPurchase(!confirmPurchase)
    }

    return (
        <div className='itemDetail'>
            <h3 className={'titleDetail'}>{title }</h3>
            <div className='containerProduct'>
                <img className={'imgDetail'} src={pictureUrl} />
                <div className='containerDivRight'>
                    <h4 className={'subtitleDetail'}> Descripcion: </h4>
                    <p className={'textDetail'}>{description}</p>
                    <span> Precio: $ {price}</span>
                    
                    { 
                    stock === 0 
                        ?
                            <h1>No hay Stock</h1>
                        :
                            confirmPurchase == false      
                                    ?
                                        <ItemCount className='controlAdd' stock={stock} onAdd={handleOnAdd}  />
                                    : 
                                    <div className='checkoutDetail'>
                                        <h1>Desea Finalizar su Compra?</h1>
                                        <Link to='/cart'> <button className='ghostButton' >Si </button></Link>
                                        <button className='ghostButton' onClick={()=> setConfirmPurchase(false)}> No</button>
                                    </div>  
                                    
                    }

                    
                </div>
            </div>
        </div>
        )
}

export default ItemDetail
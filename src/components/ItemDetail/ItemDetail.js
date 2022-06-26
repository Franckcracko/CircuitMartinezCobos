import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState ,useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, title, pictureUrl,  description, price, stock, }) => {
    const [confirmPurchase, setConfirmPurchase] = useState(false)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{
        addItem({id, title, price, quantity})
        setConfirmPurchase(!confirmPurchase)
    }
    const styleButton = {
        background: '#4ad295',
        textDecoration: 'none',
        display: 'inline-block',
        padding: '5px',
        marginTop: '10px',
        marginBottom: '10px',
        color: '#fff',
        border: '1px solid #4ad295',
        borderRadius: '4px'
    }
    return (
        <>
            <h3 className={'titleDetail'}>{title }</h3>
            <img className={'imgDetail'} src={pictureUrl} />
            <p className={'textDetail'}>{description}</p>
            <span style={{color:'grey',fontSize:'2rem'}}> PRECIO: {price}</span>
            {confirmPurchase == false            
                ?
                    <ItemCount stock={stock} onAdd={handleOnAdd}  />
                : <div>
                    <h1>Desea Finalizar su Compra?</h1>
                    <Link to='/cart'> <button style={styleButton} >Si </button></Link>
                    <button style={styleButton} onClick={()=> setConfirmPurchase(false)}> No</button>
                </div>  
            }
        </>
        )
}

export default ItemDetail
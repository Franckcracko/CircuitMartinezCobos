import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({ id, title, pictureUrl,  description, price, setCart, stock, cart}) => {
    const handleOnAdd = (quantity) =>{
        console.log(`Se Agregaron ${quantity} ${title}`);
        setCart([...cart, {id, title, price, quantity}])
    }
    return (
        <>
            <h2>Card de detalle</h2>
            <h3 className={'titleDetail'}>{title }</h3>
            <img className={'imgDetail'} src={pictureUrl} ></img>
            <p className={'textDetail'}>{description}</p>
            <span>{price}</span>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </>
        )
}

export default ItemDetail
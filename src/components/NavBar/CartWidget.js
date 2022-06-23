import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const { totalQuantity, setTotalQuantity } = useContext(CartContext)

    return(
        <div className="cartWidget">
            <FontAwesomeIcon style={{width:'16px', color:'white'}} icon={faCartShopping} />
            <span style={{fontSize:'.8rem',marginLeft:'.5rem', color:'white'}}>{totalQuantity}</span>
        </div>
        )
}
export default CartWidget;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const { totalQuantity, setTotalQuantity } = useContext(CartContext)
    if(totalQuantity > 0 ) { 
    return(
        <div className="cartWidget">
            <FontAwesomeIcon style={{width:'20px', color:'white'}} icon={faCartShopping} />
            <span style={{fontSize:'1.2rem',marginLeft:'.5rem', color:'white'}}>{totalQuantity}</span>
        </div>
        )}
}
export default CartWidget;
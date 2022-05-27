import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const CartWidget = () =>{
    return(
        <div class="cartWidget">
            <FontAwesomeIcon style={{width:'16px', color:'white'}} icon={faCartShopping} />
            <span style={{fontSize:'.8rem',marginLeft:'.5rem', color:'white'}}>0</span>
        </div>
        )
}
export default CartWidget;
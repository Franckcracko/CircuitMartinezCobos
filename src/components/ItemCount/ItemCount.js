import './ItemCount.css'
import React, { useState } from 'react';
const ItemCount = ({stock = 0, initial = 1, onAdd}) =>{

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
        }
    }

    const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
        }     
    }
    return(
    <div className={'addItems'}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <button className="ghostButton" onClick={decrement}>  -</button>
                    <h4 className= 'itemValue'>{quantity}</h4>
            <button className="ghostButton" onClick={increment}> + </button>
        </div>
        <button className={'ghostButton'}  onClick={() => onAdd(quantity)} >Agregar</button>
    </div>
    )
}
export default ItemCount
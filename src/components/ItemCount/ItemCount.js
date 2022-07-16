import React, { useState } from 'react';
import './stylesItemCount.css'
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

    const styleValue = {
        width: '3rem',
        marginRight: '3rem'
    }
    return(
    <div className='addItems'>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <button className="ghostButton btnChangeValue" onClick={decrement}> - </button>
                <h3 className= { styleValue }> {quantity} </h3>
            <button className="ghostButton btnChangeValue" onClick={increment}> + </button>
            <button className={'ghostButton btnAdd'}  onClick={() => onAdd(quantity)} >Agregar</button>
        </div>
    </div>
    )
}
export default ItemCount
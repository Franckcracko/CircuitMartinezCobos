import ItemCount from "../ItemCount/ItemCount"
import React, { useState } from 'react';
const Item = (props) =>{
    const [count, setCount] = useState(1)
    return (
        <div className={'card'} key={props.id} category={props.category} >
            <figure>
                <img src={props.pictureUrl} />
            </figure>                    
            <div class='contenido'>
                <h4 className='titleItem'>{props.title}</h4>
                <p className='descriptionItem'>{props.description}</p>
                <span className='priceItem'>$ {props.price}</span>
                <ItemCount value={count} onAdd={() => setCount(count +1)}/>
            </div>
        </div>
    )
}
export default Item
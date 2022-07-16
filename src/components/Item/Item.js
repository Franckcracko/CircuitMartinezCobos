import { Link } from "react-router-dom";
import './styleItem.css'
const Item = ({title, id , category, price,pictureUrl, stock}) =>{

    return (
        <div className={'card'} key={id} category={category} >
            <figure>
                <img src = {pictureUrl} />
            </figure>                    
            <div className='contenido'>
                <h4 className='titleItem'>{title}</h4>
                <span className='Item'>Precio: $ {price}</span>
                <span className='Item'>Disponibles: {stock}</span>
                <Link className='descriptionItem' to={`/detail/${id}`} > leer mas.. </Link>
            </div>
        </div>
    )
}
export default Item
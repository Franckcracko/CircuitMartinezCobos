import { Link } from "react-router-dom";

const Item = ({title, id , category, description, price,pictureUrl, stock}) =>{

    return (
        <div className={'card'} key={id} category={category} >
            <figure>
                <img src = {pictureUrl} />
            </figure>                    
            <div className='contenido'>
                <h4 className='titleItem'>{title}</h4>
                <p className='descriptionItem'><Link to={`/detail/${id}`}><span style={{display:'block',color:'#4ad295'}}> leer mas..</span></Link></p>
                <span className='priceItem'>Precio: ${price}</span>
                <span className='priceItem'>Disponibles: {stock}</span>
            </div>
        </div>
    )
}
export default Item
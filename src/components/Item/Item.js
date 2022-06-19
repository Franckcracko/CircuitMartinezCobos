import { Link } from "react-router-dom";


const Item = ({title, id , category, description, price,pictureUrl}) =>{

    return (
        <div className={'card'} key={id} category={category} >
            <figure>
                <img src={pictureUrl} />
            </figure>                    
            <div class='contenido'>
                <h4 className='titleItem'>{title}</h4>
                <p className='descriptionItem'>{description}<Link to={`/detail/${id}`}><span style={{display:'block',color:'#4ad295'}}> leer mas..</span></Link></p>
                <span className='priceItem'>$ {price}</span>
            </div>
        </div>
    )
}
export default Item
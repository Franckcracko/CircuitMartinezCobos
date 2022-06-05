import Item from "../Item/Item";
import { useState, useEffect } from 'react';
import { getProducts } from "../../asyncmock";
import './Item.css';

const ItemList = () =>{
    const [products, setProducts] = useState([])
    
    useEffect(() =>{
        getProducts().then((response) =>{
            setProducts(response)
        })
    }, [])

    return(
        <div className="container_navs">
            {products.map( prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList
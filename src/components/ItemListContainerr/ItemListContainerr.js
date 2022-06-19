import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';

const ItemListContainerr = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)
         if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    return(
        <>
            {products.length > 0 ? <ItemList products={products}/>: <h1>No hay productos</h1>}
        </>
    )
}
export default ItemListContainerr

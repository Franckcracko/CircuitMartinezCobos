import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer
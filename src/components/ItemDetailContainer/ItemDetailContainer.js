import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { db } from '../../services/firebase'
//getDoc : Obtengo el documento 
//doc : Obtengo el producto

import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(prod =>{
            console.log(prod)
            const productFromatted = { id: prod.id, ...prod.data() }
            setProduct(productFromatted)
        }).catch(error =>{
            console.log(error)
        })
            
        // getProductById(productId).then(response => {
        //     setProduct(response)
        // })
    }, [productId])

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer
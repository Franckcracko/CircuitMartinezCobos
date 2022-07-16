import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { db } from '../../services/firebase'
//getDoc : Obtengo el documento 
//doc : Obtengo el producto

import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(prod =>{
            const productFromatted = { id: prod.id, ...prod.data() }
            setProduct(productFromatted)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])
    if(loading){
        return(
            <div id="contenedor">
                <div className="loader" id="loader">Loading...</div>
            </div>
        )
    }

    return (
        <>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer
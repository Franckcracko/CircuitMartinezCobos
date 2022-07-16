import { useState, useEffect } from 'react';

import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
// getDocs : Traer documentos de la base de datos.
//collection : trae la coleccion para traer sus documentos
// query : Filtra la consulta
// where : Significa donde, ahi se aplica la condicion y solamente acpeta  que sea igual

import { getDocs, collection, query, where } from 'firebase/firestore'; 
import { db } from '../../services/firebase'; //Llama base de datos

const ItemListContainerr = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)
            
        //collection pide de donde sacar la base de datos y su referencia
        const collectionRef = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )
    
        getDocs(collectionRef).then(response =>{
            //response contiene los productos 
            const productsFormatted = response.docs.map(doc =>{
                //obtengo el id y el data es donde se encuentran los otros campos del producto
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return(
            <div id="contenedor">
                <div className="loader" id="loader">Loading...</div>
            </div>
        )
    }
    return(
        <>
            {products.length > 0 ? <ItemList products={products}/>: <h1>No hay productos</h1>}
        </>
    )
}
export default ItemListContainerr

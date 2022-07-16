import { addDoc, collection, writeBatch, getDocs, query, where, documentId} from "firebase/firestore"
import { useState,useContext } from "react"
import { db } from "../../services/firebase/index"
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext"
import './styleCheckout.css'

const Checkout = () =>{
    const { cart, totalPrice,clearProducts } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [redirect, setRedirect ]= useState(false)
    const [nameUser, setNameUser] = useState('')
    const [emailuser, setEmailUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')


    const handleSubmit = (e) =>{
        setLoading(true)

        const hoy = new Date();
        const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        const fechaYHora = fecha + ' ' + hora;

        e.preventDefault()
        handleNewOrder(nameUser,emailuser,phoneUser,fechaYHora)
    }
     
    const handleNewOrder = (name, email, phone, data) =>{

        const newOrder = {
            buyer : {
                name: name ,
                email: email,
                phone: phone
            },
            products: cart,
            total: totalPrice,
            data:data
        }
        const batch = writeBatch(db)

        const productsIds = cart.map(prod => prod.id)

        const collectionRef = collection(db, 'products')

        const emptyStock = [] 

        getDocs(query(collectionRef, where(documentId(), 'in', productsIds)))
            .then(response => {
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()
                    const item = cart.find(prod => prod.id === doc.id)
                    const itemQuanity = item.quantity

                    if (dataDoc.stock >= itemQuanity){
                        batch.update(doc.ref, { stock: dataDoc.stock - itemQuanity })
                    }   else{
                        emptyStock.push({id: doc.id, ...dataDoc})
                    }

                })
            }).then(() =>{
                if(emptyStock.length === 0){
                    const collectionRef = collection(db, 'orders')

                   return addDoc(collectionRef, newOrder)
                }   else{
                    return Promise.reject( { type: 'empty_stock', products: emptyStock })
                }
            }).then(({ id }) =>{
                localStorage.setItem('idCheckout', id);
                batch.commit()
                clearProducts()
            }).catch(error =>{
                if(error.type === 'empty_stock'){
                    console.log('A algunos productros les falta stock')
                }   else{
                    console.log(error)
                }
            }).finally(()=>{
                setLoading(false)
                setRedirect(true)
            })
    }

    if(loading){
        return(
            <div id="contenedor">
                <div className="loader" id="loader">Loading...</div>
            </div>
        )
    }

    if(redirect){
        const idCheckout = localStorage.getItem('idCheckout')
        return (
        <div className='exit'>
            <h1>Se a realizado la Compra con Exito </h1>
            <h3 style={{color:'#4ad295'}}>ID de la Compra {idCheckout}</h3>
            
            <Link  className="link" to={'/'} >Regresar</Link>
        </div>
        )
    }

    else{
        return(
            <div className="divContainerCheckout">
                <ul>
                    {cart.map(prod => <li key={prod.id} >{prod.title}  x {prod.quantity}</li>)} 
                </ul>
                <h3>Total a Pagar: {totalPrice}</h3>
                <div  className="formCheckout">
                    <form onSubmit={handleSubmit}>
                        <div className='col_container'>
                            <div className='col_1'>
                                <label>Nombre: </label>
                                <label>Correo Electronico: </label>
                                <label>Telefono: </label>
                            </div>
                            <div className='col_2'>
                                <input 
                                    type='text' 
                                    placeholder='Ingrese su Nombre' 
                                    onChange={event =>setNameUser(event.target.value)} 
                                    required />
                                <input 
                                    type='email' 
                                    placeholder='Ingrese su Email'  
                                    onChange={event =>setEmailUser(event.target.value)}
                                    required />
                                <input 
                                    type='number' 
                                    placeholder='Ingrese su Telefono' 
                                    value={phoneUser}
                                    onChange={event => {event.target.value.length <= 10 && setPhoneUser(event.target.value)}}  
                                    required />
                            </div>
                                    
                        </div>

                        <button className="ghostButton" >Comprar</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Checkout
import { useState ,createContext, useEffect } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() =>{
        let totalQuantity = 0
        let totalPriceProducts = 0
    
        cart.forEach(prod =>{
            totalQuantity += prod.quantity 
            totalPriceProducts += prod.price
        })
        setTotalPrice(totalPriceProducts)
        setTotalQuantity(totalQuantity)
    }, [cart])
    
    
    const addItem = ({id,title,price,quantity}) =>{
        let totalPrice = 0
        totalPrice = quantity * price
        if(!isInCart( id )){
            setCart([...cart, {id,title,quantity,price: totalPrice }])
        }else{
            const prodFilter = cart.find(prod => prod.id === id)
            prodFilter.quantity += quantity
            prodFilter.price += totalPrice
            setCart([...cart])
         }
        console.log(cart)
         
    }
    
    const removeItem = (id) =>{
        const cartWithoutProduct = cart.filter (prod => prod.id !== id )
        setCart(cartWithoutProduct) 
        console.log(id)
        console.log(cartWithoutProduct)
    }
    
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const clearProducts = () =>{
        setCart([]);
    }
    return(
        <CartContext.Provider value={{ 
            cart,
            totalQuantity,
            totalPrice,
            addItem, 
            removeItem,
            isInCart, 
            clearProducts
            }}>
            { children }
        </CartContext.Provider>  
    )
}

export default CartContext
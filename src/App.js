import './App.css';
import ItemListContainerr from "./components/ItemListContainerr/ItemListContainerr";
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext'
import CartListContainer from './components/CartListContainer/CartListContainer';



function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainerr />} />
            <Route path='/category/:categoryId' element={<ItemListContainerr />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/category/quienes_somos' element={<h1>Historia de La Empresa</h1>} />
            <Route path='/cart' element={<CartListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}
export default App;

import './App.css';
import ItemListContainerr from "./components/ItemListContainerr/ItemListContainerr";
import Nav from './components/NavBar/NavBar.js';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([])
  console.log(cart)
  return (
    <div className="App">
     <BrowserRouter>
        <Nav initial={0} />
        <Routes>
          <Route path='/' element={<ItemListContainerr />} />
          <Route path='/category/:categoryId' element={<ItemListContainerr />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

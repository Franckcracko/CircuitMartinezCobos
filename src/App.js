import './App.css';
import ItemListContainerr from "./components/ItemListContainerr/ItemListContainerr";
import Nav from './components/NavBar/NavBar.js';
// import Counter from './components/counter.js';
// import Button from './components/Button/Button.js'
function App() {
  return (
    <div className="App">
     <Nav initial={0} />
      {/* <Counter initial={10} title={'Contador'} /> */}
     <ItemListContainerr/>
    </div>
  );
}

export default App;

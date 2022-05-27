import './App.css';
import Nav from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Counter from './components/counter.js';
// import Button from './components/Button/Button.js'
function App() {
  return (
    <div className="App">
     <Nav initial={0} />
     <ItemListContainer text={'Holaa'}/>
      {/* <Counter initial={10} title={'Contador'} /> */}

    </div>
  );
}

export default App;

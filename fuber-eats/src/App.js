// import logo from './src/logo';
import './App.css';
import { Route, router } from "react-router-dom";
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Basket from './components/Basket.jsx';
import data from './data'
import { useState } from 'react';

export default function App() {
  const { product } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map((x =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
      )
      )
    }
    return (
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <div className='row'>
          <Route path="/addProduct" element={<createProduct/>}/>
            
          {/* <Main onAdd={onAdd} products={products} /> */}

          <Route path="/removeProduct" element={<deleteProduct/>} />

          {/* <Basket onAdd={onRemove} onRemove={onRemove} cartItems={cartItems} /> */}
        </div>
      </div>
    );
  }
};
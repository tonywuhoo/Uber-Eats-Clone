import { FaShoppingCart } from 'react-icons/fa';
import Menu from "./Menu.jsx"
import Delivery from './Delivery.jsx';

import './App.css';

export default function Home() {
  return (
    <>
      <div className='App' style={{
        backgroundImage: "url(/fast-food.png)"
        }}>
        <header>
          <Menu/>
        <div className='title'>Füber Eats</div>    
 < FaShoppingCart className='cart'/>
        </header>
        
      <p>Get food now!</p>
        <Delivery />
      </div>
    </>
  );
}



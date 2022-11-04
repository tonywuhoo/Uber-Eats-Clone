import Menu from "./Menu.jsx"
import Delivery from './Delivery.jsx';
import Cart from "./Cart.jsx";
import './App.css';
import About from "./About";

export default function Home() {
  return (
    <>
      <div className='App' style={{
        backgroundImage: "url(/fast-food.png)"
        }}>
        <header>
          <Menu className="menu"/>
        <div className='title'>Füber Eats</div>    
 < Cart className='cart'/>
        </header>
        {/* comment this out */}
        <About />
      </div>
    </>
  );
}



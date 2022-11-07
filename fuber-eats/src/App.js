import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <div className="App">
       <Navbar />
       
      {/* <Home /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              
            />
          }
        />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}

export default App;

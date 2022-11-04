import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}

export default App;

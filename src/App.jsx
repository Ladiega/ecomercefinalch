import Navbar from "./components/navbar/NavBar";
import "./App.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"

import CartWidget from "./components/CartWidget/CartWidget";


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Grabados from "./pages/Grabados/Grabados";
import Pinturas from "./pages/Pinturas/Pinturas";
import Merch from "./pages/Merch/Merch";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import VerDetalles from "./pages/VerDetalles/VerDetalles";
import TerminarCompra from "./pages/TerminarCompra/TerminarCompra";
import Checkout from "./components/Checkout/Checkout";

import { CartProvider } from "./Context/CartContext";






function App() {
  return (
    

      
      <BrowserRouter>
        <CartProvider>
         <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Grabados" element={<Grabados />} />
            <Route path="/Merch" element={<Merch />} />
            <Route path="/Pinturas" element={<Pinturas />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/VerDetalles" element={<VerDetalles />} />
            <Route path="/TerminarCompra" element={<TerminarCompra />} />
            <Route path="/Item/:itemId" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/checkout" element={ <Checkout/>} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
      

  
  )
}

export default App

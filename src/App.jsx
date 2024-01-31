import Navbar from "./components/navbar/NavBar";
import "./App.css";

// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemCount/ItemCount"

import CartWidget from "./components/CartWidget/CartWidget";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Grabados from "./pages/Grabados/Grabados";
import Pinturas from "./pages/Pinturas/Pinturas";
import Merch from "./pages/Merch/Merch";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import VerDetalles from "./pages/VerDetalles/VerDetalles";
import TerminarCompra from "./pages/TerminarCompra/TerminarCompra";



function App() {
  return (
    <Router>

      <main className="App">
        <Navbar />

        {/* <ItemListContainer greeting={'welcome to items list prop'} />
        <ItemCount inital={1} stock={10} onAdd={(quantity) => console.log(`Items agregados al carrito ${quantity} `)} /> */}
      </main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Grabados" element={<Grabados />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Pinturas" element={<Pinturas />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/VerDetalles:itemId" element={<VerDetalles />} />
        <Route path="/TerminarCompra" element={<TerminarCompra/>}/>
      </Routes>

    </Router>
  )
}

export default App

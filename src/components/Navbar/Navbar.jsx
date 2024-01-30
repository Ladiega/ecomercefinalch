import './navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav_container" >
      <h3>Ecomerce</h3>
      <section>
        <button><Link to="/Merch">Merch</Link></button>
        <button><Link to="/Pinturas">Pinturas</Link></button>
        <button><Link to="/Grabados">Grabados</Link></button>  
      </section>
      <CartWidget />
    </nav>
  )
}
import CartWidget from "../CartWidget/CartWidget"
import './navbar.css';
export default function Navbar() {
  return (
    <nav className="nav_container" >
      <h3>Ecomerce</h3>
      <section>
        <button>Pinturas</button>
        <button>Grabados</button>
        <button>Merch</button>
        
      </section>
      <CartWidget />
    </nav>
  )
}
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
  
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay itmes en el carrito</h1>
        <Link to="/">Productos</Link>
      </div>
    )
  }
  return (
    <div>
      <div>
        {
          cart.map(p => <CartItem key={p.id} {...p}/>)
        }
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}>Limpar carrito</button>
        <Link to="/checkout">Checkout</Link>
</div>
    </div>
  )
}
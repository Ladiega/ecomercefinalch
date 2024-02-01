import ItemCount from "../../components/ItemCount/ItemCount";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


export default function VerDetalles({ quantity }) {

  const [quantityAdded, setQuantityAdded] = useState(0)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    console.log(`Has añadido ${quantity} productos a tu carrito de campras`)

    
  }
  return (
    <div>
      <article>
        <header>
          <h2>Titulo</h2>
        </header>
        <picture>
          <img src="" alt="img" />          
        </picture>
        <section>

        </section>

      </article>
      <footer>
        
              <ItemCount stock={9} inital={1} onAdd={(quantity) => console.log(`estas anadiendo ${quantity}`) } />

      </footer>
      <footer>
        {
          quantityAdded > 0 ? (
            <Link to="/TerminarCompra">Terminar Campra</Link>
          ):(<ItemCount inital={1} stock={8} onAdd={handleOnAdd}/>)
        }
      </footer>

    </div>
  )
}
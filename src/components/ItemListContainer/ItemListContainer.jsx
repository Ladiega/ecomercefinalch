/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { getProducts } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";


export default function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
      console.log(error)
    })
  })

  return (
    <div>
      {greeting}
      <ItemList products={products} />
    </div>
  )
  
}
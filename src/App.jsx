import Navbar from "./components/Navbar/Navbar"
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <main className="App">
      <Navbar/>
     <ItemListContainer greeting={'welcome to items list prop'}/>
      <ItemCount inital={1} stock={10} onAdd={(quantity) => console.log(`Items agregados al carrito ${quantity} `)}/>
    </main>
  )
}

export default App

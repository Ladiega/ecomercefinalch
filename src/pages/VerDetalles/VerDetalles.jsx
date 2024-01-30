import ItemCount from "../../components/ItemCount/ItemCount";

export default function VerDetalles({quantity}) {
  return (
    <div>
      <ItemCount stock={9} inital={1} onAdd={(quantity) => console.log(`estas anadiendo ${quantity}`) } />
    </div>
  )
}
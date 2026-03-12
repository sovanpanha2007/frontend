import { useState } from "react";
export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  function handleName(e) {
    setName(e.target.value);
  }
  function handlePrice(e){
    setPrice(e.target.value)
  }
  function handleAdd(e) {
    e.preventDefault()
    onAddStuff(name, price)
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={handleName} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={handlePrice}/>

      <button onClick={handleAdd}>Add Stuff</button>
    </form>
  );
}

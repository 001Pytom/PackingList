import { useState } from "react";

function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleInput(e) {
    const { value } = e.target;
    setDesc(value);
  }
  function handleItemNum(e) {
    const { value } = e.target;
    setQuantity(Number(value));
  }
  // create new function for setitems so that u can use it externally in App
  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip ?</h3>
      <select value={quantity} onChange={handleItemNum}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        name="items"
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={handleInput}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

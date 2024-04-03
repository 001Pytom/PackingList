import { useState } from "react";
import Item from "./item";
function ParkingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortby, setSoryBy] = useState("input");

  // lets check for diff conditions
  let sortedItems;

  if (sortby === "input") sortedItems = items;

  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {/* here instead of items, chnage to sortedItems */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions" onChange={(e) => setSoryBy(e.target.value)}>
        <select value={sortby}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by Packed status</option>
        </select>

        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default ParkingList;

//This example shows that when we submit an item , it gets stored into an array and gets rendered

import React,{useState}from 'react'

function Items() {
    const [items ,setItems] = useState([])
    const [itemName, setItemName] = useState("");
    
    const addItem = event => {
        event.preventDefault();
        setItems([
          ...items,
          {
            id: items.length,
            name: itemName
          }
        ]);
        setItemName("");
      };
    
  return (
    <div>
        <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
      </form>
        <ul>
            {
                items.map(item =>(
                <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Items
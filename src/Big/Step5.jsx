import React, { useState } from "react";


export default function Step5() {
  const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Mango", price: 3 },
  ];
  const [cart,setcart] = useState([]);

  const handleAdd = (item) => {
    setcart(prev => [...prev,item])
  };

  return (
    <div>
      <h2>Step 2: Add Button</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => handleAdd(p.name)}>Add</button>
        </div>
      ))}
      <h2>cart</h2>
      {
        cart.map((item,index)=>(
            <li key={index}>
                {item}
            </li>
        ))
      }
    </div>
  );
}

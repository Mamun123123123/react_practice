import React, { useState, useCallback, useMemo } from "react";

export default function CartExample() {

  const [cart, setCart] = useState([]);


  const [products] = useState([
    { name: "Apple", price: 2 },
    { name: "Banana", price: 1 },
    { name: "Mango", price: 3 },
  ]);

  const handleAdd = useCallback(
    (item) => {
      setCart((prev) => {
    
        const existing = prev.find((p) => p.name === item.name);
        if (existing) {
     
          return prev.map((p) =>
            p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
          );
        } else {
        return [...prev, { ...item, quantity: 1 }];
        }
      });
    },
    [] 
  );

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const clearCart = useCallback(() => setCart([]), []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {products.map((item, index) => (
        <div key={index}>
          {item.name} — ${item.price}
          <button onClick={() => handleAdd(item)}>Add</button>
        </div>
      ))}

      <h2>Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total: ${total}</h3>

      {cart.length > 0 && (
        <button onClick={clearCart} >
          Clear Cart
        </button>
      )}
    </div>
  );
}

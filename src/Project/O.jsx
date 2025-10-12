import React, { useState, useMemo, useCallback } from "react";


const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log("Rendering:", product.name);
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-32 w-32 object-cover mb-2" />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-green-700 font-semibold">${product.price}</p>
      <button
        className="bg-green-700 text-white px-3 py-1 mt-2 rounded hover:bg-green-600"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
});

export default function ProductListing() {
  const initialProducts = [
    { name: "Organic Apple", price: 2.5, image: "https://via.placeholder.com/150" },
    { name: "Banana", price: 1.2, image: "https://via.placeholder.com/150" },
    { name: "Carrot", price: 0.8, image: "https://via.placeholder.com/150" },
    { name: "Spinach", price: 1.5, image: "https://via.placeholder.com/150" },
    { name: "Tomato", price: 1.0, image: "https://via.placeholder.com/150" },
    { name: "Cucumber", price: 1.3, image: "https://via.placeholder.com/150" },
    { name: "Organic Mango", price: 3.0, image: "https://via.placeholder.com/150" },
    { name: "Strawberry", price: 2.0, image: "https://via.placeholder.com/150" },
    { name: "Orange", price: 1.8, image: "https://via.placeholder.com/150" },
    { name: "Broccoli", price: 2.2, image: "https://via.placeholder.com/150" },
  ];

  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);


  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);


  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Organic Food Store</h2>

      <input
        className="border px-3 py-2 rounded mb-6 w-full"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

     
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Cart ({cart.length} items)</h3>
        <ul className="list-disc ml-6">
          {cart.map((item, i) => (
            <li key={i}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

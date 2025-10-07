import React, { useState } from "react";

const fruitData = [
  { name: "Apple", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Apple" },
  { name: "Banana", image: "https://via.placeholder.com/150/FFFF00/000000?text=Banana" },
  { name: "Orange", image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Orange" },
  { name: "Grapes", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Grapes" },
  { name: "Mango", image: "https://via.placeholder.com/150/FFB347/FFFFFF?text=Mango" },
  { name: "Pineapple", image: "https://via.placeholder.com/150/FFE135/000000?text=Pineapple" },
  { name: "Strawberry", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Strawberry" },
  { name: "Watermelon", image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=Watermelon" },
  { name: "Cherry", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Cherry" },
  { name: "Papaya", image: "https://via.placeholder.com/150/FFDAB9/000000?text=Papaya" },
];

export default function FruitGallery() {
  const [search, setSearch] = useState("");

  const filteredFruits = search
    ? fruitData.filter((fruit) =>
        fruit.name.toLowerCase().includes(search.toLowerCase())
      )
    : fruitData;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h2>Fruit Gallery</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {filteredFruits.map((fruit, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
              background: "#f9f9f9",
            }}
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3 style={{ marginTop: "10px" }}>{fruit.name}</h3>
          </div>
        ))}

        {filteredFruits.length === 0 && <p>No fruits found!</p>}
      </div>
    </div>
  );
}

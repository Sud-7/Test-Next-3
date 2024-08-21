"use client";
import { useState } from "react";
import "@/app/style1.css";

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    let data = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, company, color, category }),
    });
    data = await data.json();
    console.log(data);
  };

  const clear = () => {
    setName("");
    setCategory("");
    setPrice("");
    setColor("");
    setCompany("");
  };

  return (
    <div>
      <h1>Add Product here!!</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Mobile Name"
        className="input"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Mobile price"
        className="input"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Mobile company"
        className="input"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Mobile color"
        className="input"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Mobile Category"
        className="input"
      />
      <button onClick={addProduct}>Add Product</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

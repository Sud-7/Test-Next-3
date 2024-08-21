"use client";
import { useEffect, useState } from "react";
import "@/app/style1.css";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    let productID = props.params.editproduct;
    let data = await fetch(`http://localhost:3000/api/products/${productID}`);
    data = await data.json();
    // console.log(data);
    let result = data.result;
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setColor(result.color);
    setCompany(result.company);
  };

  useEffect(() => {
    addProduct();
  }, []);

  const clear = () => {
    setName("");
    setCategory("");
    setPrice("");
    setColor("");
    setCompany("");
  };

  const updateProduct = async () => {
    let productID = props.params.editproduct;
    let data = await fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, color, company }),
    });
    data = await data.json();
    if (data) {
      alert("Data has been updated");
    }
  };

  return (
    <div>
      <h1>Edit Product here!!</h1>

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
      <button className="btn" onClick={updateProduct}>
        UpdateProduct
      </button>
      <button onClick={clear} className="btn">
        Clear
      </button>
      <Link href={`/`}>Get Back Home</Link>
      <br></br>
      <Link href={`/products`}>Get Back to product Page</Link>
    </div>
  );
}

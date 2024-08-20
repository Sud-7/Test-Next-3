"use client";
import { useState } from "react";
import "./../style.css";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, city }),
    });

    let data = await response.json();
    console.log(data);

    if (data.success) {
      return alert("User created successfully" + name + age + city);
    } else {
      alert("Invalid Inputs");
    }

    console.log(name, age, city);
    setName("");
    setAge("");
    setCity("");
  };
  return (
    <div className="add-user">
      <h1>Add New user</h1>

      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        className="input-field"
      />
      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}

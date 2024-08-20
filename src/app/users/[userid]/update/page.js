"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  // console.log(params.userid);
  let id = params.userid;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();

    // console.log(data);
    setName(data.result.name);
    setAge(data.result.age);
    setCity(data.result.city);
  };

  const updateUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, city }),
    });
    data = await data.json();
    console.log(data);
    if (data.success) {
      alert("new user");
    }
  };

  return (
    <div>
      <h1>Update users</h1>
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
      <button onClick={updateUserDetails} className="btn">
        Add User
      </button>
    </div>
  );
}

"use client";

export default function Delete(props) {
  const userDelete = async () => {
    let id = props.id;
    console.log(id);
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("User Deleted successfully");
    }
  };
  return (
    <div>
      <button onClick={userDelete}>Delete</button>
    </div>
  );
}

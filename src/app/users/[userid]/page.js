async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
}

export default async function Page({ params }) {
  const individualUser = await getUsers(params.userid);
  console.log(individualUser);
  //   console.log(params);
  return (
    <div>
      <h1>Why are you doing this to me</h1>
      <p>Name: {individualUser.result.name}</p>
      <p>age: {individualUser.result.age}</p>
      <p>Id: {individualUser.result.id}</p>
    </div>
  );
}

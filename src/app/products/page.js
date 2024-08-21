import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  //   let rez = data.result;
  //   console.log(rez);

  return data.data;
};

export default async function Page() {
  const products = await getProducts();
  console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Color</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>
                <Link href={"/products/" + item._id}>Edit</Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

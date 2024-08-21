const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();

  //   console.log(data);

  return data.result;
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
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

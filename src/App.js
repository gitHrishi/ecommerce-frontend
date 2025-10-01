import React from 'react';

function App() {
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', brand: 'Brand B', description: 'Description 2', price: 200 },
  ];

  return (
    <div>
      <h1>Ecommerce Platform</h1>
      <h2>Product List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Product</h2>
      <form>
        <input type="text" placeholder="Name" name="name" /> <br />
        <input type="text" placeholder="Brand" name="brand" /> <br />
        <input type="text" placeholder="Description" name="description" /> <br />
        <input type="number" placeholder="Price" name="price" /> <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;

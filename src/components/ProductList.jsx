function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;

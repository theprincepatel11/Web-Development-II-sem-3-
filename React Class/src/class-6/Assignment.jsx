import { useEffect, useState } from "react";

function Assignment() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  const sortAscending = () => {
    const sorted = [...products].sort((a,b)=>a.price-b.price);
    setProducts(sorted);
  };
  const sortDescending = () => {
    const sorted = [...products].sort((a,b)=>b.price-a.price);
    setProducts(sorted);
  };


  return (
    <>
      <h1>Productssss</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button> 
      <button onClick={sortAscending}>Ascending</button>
      <label>
        <select>
            <option onSelect={sortAscending}>Price Low to High</option>
            <option onSelect={sortDescending}>Price High to Low</option>
        </select>
        <select>
            <option>Electronics</option>
            <option>Groceries</option>
        </select>
      </label>


      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail}/>
          <h3>Name : {product.title}</h3>
          <p>Price : ${product.price}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Assignment;
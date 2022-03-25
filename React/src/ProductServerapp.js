import { useState, useEffect } from "react";
import axios from "axios";
const ProductServer = () => {
  const [product, setProducts] = useState([{}]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios
      .get("/productapp")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const productSubmit = (event) => {
    event.preventDefault();
    let productsOb = {
      name: event.target.productName.value,
      price: event.target.productPrice.value,
      description: event.target.productDescription.value,
      category: event.target.category.value,
      status: event.target.status.value,
    };
    axios
      .post("/productapp", productsOb)
      .then((res) => {
        getProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteProduct = (indexToDelete) => {
    axios
      .delete("/productapp/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getProducts();
  };
  const deleteAll = () => {
    axios
      .get("/productapp/deleteall")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getProducts();
  };
  return (
    <div>
      <form onSubmit={productSubmit} className="Product-Form">
        <h1 className="product-Heading">Fakestore App</h1>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="form-element"
        />
        <input
          type="number"
          name="productPrice"
          placeholder="Product Price"
          className="form-element"
        />
        <textarea
          name="productDescription"
          placeholder="Description"
          className="form-element description"
        ></textarea>
        <select name="category" className="form-element">
          <option>Category</option>
          <option value="Toys">Toys</option>
          <option value="Clothes">Clothes</option>
          <option value="FoodItems">Food Items</option>
        </select>
        <select name="status" className="form-element">
          <option>Status</option>
          <option value="Available">Available</option>
          <option value="Unavailable">UnAvailable</option>
        </select>
        <button className="Product-Button">Add Product</button>
      </form>
      <div className="Product-Container">
        {product.map((val, index) => {
          return (
            <div className="Product-Div">
              <h3>Product {index + 1}</h3>
              <p>
                <b>Product Name : </b>
                {val.name}
              </p>
              <p>
                <b>Product Price: </b>
                {val.price}
              </p>
              <p>
                <b>Product Description : </b>
                {val.description}
              </p>
              <p>
                <b>Product Category : </b>
                {val.category}
              </p>
              <p>
                <b>Product Status : </b>
                {val.status}
              </p>
              <button
                onClick={() => deleteProduct(index)}
                className="Product-Button"
              >
                Delete Product
              </button>
            </div>
          );
        })}
        <button onClick={deleteAll} className="Product-Button">
          Delete All Products
        </button>
      </div>
    </div>
  );
};
export default ProductServer;

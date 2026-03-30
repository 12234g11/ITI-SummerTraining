import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    discount: ''
  });

  const { addNewProduct } = useOutletContext();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields!");
      return;
    }

    addNewProduct({
      ...product,
      price: Number(product.price),
      discount: Number(product.discount) || 0
    });


    setProduct({
      name: '',
      price: '',
      category: '',
      discount: ''
    });
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add New Product</h2>
      <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
        
        <div className="mb-3">
          <label className="form-label">Product Name <span className="text-danger">*</span></label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price <span className="text-danger">*</span></label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Enter price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category <span className="text-danger">*</span></label>
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Enter category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            name="discount"
            className="form-control"
            placeholder="Enter discount"
            value={product.discount}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

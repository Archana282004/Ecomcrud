import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import "../assets/css/main.css";
import SimpleReactValidator from "simple-react-validator"

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: " ",
    category: "",
    status: "",
    description: "",
    price: "",
    comparePrice: "",
    costPerItem: "",
    taxRate: "",
    variant: "",
    stock: "",
    productImage: "",

  })
  const [, forceUpdate] = useState({})
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "This field is required",
      },
      element: (message) => <div style={{ color: "red" }} >{message}</div>,
    }),
  )

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      const newproduct = { ...formData };
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newproduct)
      })
        .then(response => response.json())
        .then(success => {
          console.log("Success:", success)
          navigate('/product')
        })
        .catch(error => {
          console.error("Error:", error);
        });


      setFormData({
        productName: " ",
        category: " ",
        status: "",
        description: "",
        price: "",
        comparePrice: "",
        costPerItem: "",
        taxRate: "",
        variant: "",
        stock: "",
        productImage: "",
      })

      validator.current.hideMessages();
      forceUpdate({})
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  }

  return (
    <React.Fragment>
      <div className="heading_wrapper d-flex flex-wrap">
        <h1 className="head_title">Add Product</h1>
        <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">E-Commerce</li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Product
            </li>
          </ul>
        </nav>
      </div>

      <div className="card products_blc">
        <div className="card-body">
          <form>
            <div className="card_content_wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="productName">
                      Product Name <span className="mandatory">*</span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Short sleeve t-shirt"
                      className="form-control input_modify"
                      id="productName"
                      value={formData.productName}
                      onChange={(e) => handleChange("productName", e.target.value)}
                    />
                    {validator.current.message("productName", formData.productName, "required")}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="category">
                      Category <span className="mandatory">*</span>
                    </label>
                    <select name="category" className="custom-select input_modify" id="category" value={formData.category} onChange={(e) => handleChange("category", e.target.value)}>
                      <option value="">Select Category</option>
                      <option value="accessories">Accessories</option>
                      <option value="cloths">Clothes</option>
                      <option value="instrument">Instrument</option>
                      <option value="shoes">Shoes</option>
                      <option value="electronics">Electronics</option>
                      <option value="Grocery">Groceries</option>
                      <option value="furniture">Furniture</option>
                      <option value="food product">Food Product</option>
                      <option value="stationary">Stationary</option>
                      <option value="chocalates">Chocolates</option>
                    </select>
                  </div>
                  {validator.current.message("category", formData.category, "required")}
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="status">
                      Status <span className="mandatory">*</span>
                    </label>
                    <select name="status" className="custom-select input_modify" id="status"value={formData.status} onChange={(e) => handleChange("status", e.target.value)}>
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                  {validator.current.message("status", formData.status, "required")}
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="description">
                      Description <span className="mandatory">*</span>
                    </label>
                    <textarea
                      name="description"
                      placeholder="Enter product description"
                      className="form-control input_modify"
                      id="description"
                      value={formData.description}
                      rows="4"
                      onChange={(e) => handleChange("description", e.target.value)}
                    />
                    {validator.current.message("description", formData.description, "required")}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="price">
                      Price <span className="mandatory">*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="0.00"
                      className="form-control input_modify"
                      id="price"
                      value={formData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                    />
                    {validator.current.message("price", formData.price, "required")}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="comparePrice">
                      Compare Price
                    </label>
                    <input
                      type="number"
                      name="comparePrice"
                      placeholder="0.00"
                      className="form-control input_modify"
                      id="comparePrice"
                      value={formData.comparePrice}
                      onChange={(e) => handleChange("comparePrice", e.target.value)}
                    />
                    {validator.current.message("comparePrice", formData.comparePrice, "required")}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="costPerItem">
                      Cost per item
                    </label>
                    <input
                      type="number"
                      name="costPerItem"
                      placeholder="0.00"
                      className="form-control input_modify"
                      id="costPerItem"
                      value={formData.costPerItem}
                      onChange={(e) => handleChange("costPerItem", e.target.value)}
                    />

                    {validator.current.message("costPerItem", formData.costPerItem, "required")}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="taxRate">
                      Tax Rate (%)
                    </label>
                    <input
                      type="number"
                      name="taxRate"
                      placeholder="0"
                      className="form-control input_modify"
                      id="taxRate"
                      value={formData.taxRate}
                      onChange={(e) => handleChange("taxRate", e.target.value)}
                    />
                    {validator.current.message("taxRate", formData.taxRate, "required")}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="variant">
                      Variant
                    </label>
                    <input
                      type="text"
                      name="variant"
                      placeholder="Size, Color, etc."
                      className="form-control input_modify"
                      id="variant"
                      value={formData.variant}
                      onChange={(e) => handleChange("variant", e.target.value)}
                    />
                    {validator.current.message("variant", formData.variant, "required")}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="stock">
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      placeholder="0"
                      className="form-control input_modify"
                      id="stock"
                      value={formData.stock}
                      onChange={(e) => handleChange("stock", e.target.value)}
                    />
                    {validator.current.message("stock", formData.stock, "required")}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="productImage">
                      Product Image
                    </label>
                    <input
                      type="file"
                      name="productImage"
                      className="form-control input_modify"
                      id="productImage"
                      accept="image/*"
                      value={formData.productImage}
                      onChange={(e) => handleChange("productImage", e.target.value)}
                    /> {validator.current.message("productImage", formData.productImage, "required")}
                  </div>
                </div>
              </div>

              <div className="btn_wrapper d-flex">
                <button type="submit" onClick={handleSubmit} className="theme-btn-primary theme-btn me-3">
                  Save Product
                </button>
                <Link to="/" className="theme-btn-secondary theme-btn">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}


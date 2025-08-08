import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

export default function EditProduct() {
  return (
    <React.Fragment>
      <div className="heading_wrapper d-flex flex-wrap">
        <h1 className="head_title">Edit Product</h1>
        <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">E-Commerce</li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Product
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
                      defaultValue="Sample Product"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="category">
                      Category <span className="mandatory">*</span>
                    </label>
                    <select name="category" className="custom-select input_modify" id="category" defaultValue="electronics">
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
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="status">
                      Status <span className="mandatory">*</span>
                    </label>
                    <select name="status" className="custom-select input_modify" id="status" defaultValue="Active">
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
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
                      rows="4"
                      defaultValue="Sample product description"
                    />
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
                      defaultValue="99.99"
                    />
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
                      defaultValue="109.99"
                    />
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
                      defaultValue="50.00"
                    />
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
                      defaultValue="8.5"
                    />
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
                      defaultValue="Medium, Blue"
                    />
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
                      defaultValue="25"
                    />
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
                    />
                  </div>
                </div>
              </div>

              <div className="btn_wrapper d-flex">
                <button type="submit" className="theme-btn-primary theme-btn me-3">
                  Update Product
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

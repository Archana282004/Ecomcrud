import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/reducers/product";

export default function ProductList() {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const listRendering = (
    <React.Fragment>
      {products.map((product) => (
        <tr key={product.id}>
          <td>
            <label>{product.id}</label>
          </td>
          <td>
            <div className="media align-items-center">
              <div className="product_thumb">
                <img
                  src={product.productImage || "placeholder.jpg"}
                  alt={product.productName || "Product"}
                />
              </div>
              <div className="media-body product_des">
                <h6 className="product_name">{product.productName}</h6>
              </div>
            </div>
          </td>
          <td className="text_primary">{product.category || "N/A"}</td>
          <td>$ {product.price || "N/A"}</td>
          <td>{product.stock || "N/A"}</td>
          <td>{product.status || "N/A"}</td>
          <td className="actions">
            <div className="dropdown dropdown_wrapper">
              <button
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                  alt="Dots"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item">View Details</button>
                <button className="dropdown-item">Delete</button>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </React.Fragment>

  );

  return (
    <React.Fragment>
      <div className="heading_wrapper d-flex flex-wrap">
        <h1 className="head_title">Product List</h1>
        <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">E-Commerce</li>
            <li className="breadcrumb-item active" aria-current="page">
              Product List
            </li>
          </ul>
        </nav>
      </div>
      <div className="card products_blc">
        <div className="card-body">
          <div className="filter_wrapper">
            <div className="filet_left_content">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                      alt="search"
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control input_modify"
                    placeholder="Search"
                  />
                </div>
              </div>
              <select className="custom-select input_modify">
                <option value="">All</option>
                <option value="accessories">Accessories</option>
                <option value="cloths">Clothes</option>
                <option value="instrument">Instrument</option>
                <option value="shoes">Shoes</option>
                <option value="electronics">Electronics</option>
                <option value="Grocery">Groceries</option>
                <option value="furniture">Furniture</option>
                <option value="food product">FoodProd</option>
                <option value="stationary">Stationary</option>
                <option value="chocalates">Chocolates </option>
              </select>
            </div>
            <div className="filter_btn_wrapper">
              <Link className="btn theme-btn-primary theme-btn" to={"/product/add"}>
                Add Product
              </Link>
            </div>
          </div>
          <div className="app_table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <label className="checkbox_container text-uppercase">
                      ID
                    </label>
                  </th>
                  <th className="th_didivder" scope="col">
                    Products
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th className="th_didivder" scope="col">
                    Category
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th className="th_didivder" scope="col">
                    Price
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th className="th_didivder" scope="col">
                    Stock
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th className="th_didivder" scope="col">
                    Status
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th className="th_didivder" scope="col">
                    Action
                    <span className="filter-order-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                      >
                        <g
                          id="Group_22146"
                          data-name="Group 22146"
                          transform="translate(-501 -126.5)"
                        >
                          <path
                            id="Icon_ionic-md-arrow-dropdown"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,13.5,14.5,19,20,13.5Z"
                            transform="translate(492 120.5)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                          <path
                            id="Icon_ionic-md-arrow-dropdown-2"
                            data-name="Icon ionic-md-arrow-dropdown"
                            d="M9,19l5.5-5.5L20,19Z"
                            transform="translate(492 113)"
                            fill="rgba(69,85,96,0.2)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>{listRendering}</tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

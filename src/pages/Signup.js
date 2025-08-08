import React, { useState, useEffect, useRef } from 'react';
import lOgO from "../assets/images/thumbnails/Logo.svg";
import "../assets/css/main.css";
import { Link, Navigate } from "react-router-dom";
import simpleReactValidator from "simple-react-validator"
import { v4 as uuidv4, validate } from "uuid";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from 'formik';


export default function Signup() {

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
  })
   const navigate = useNavigate();

  
const simpleValidator = useRef(
  new simpleReactValidator({
    messages: {
      in: "Confirm password does not matches the password.",
      required: "This field is required.",
    },
  })
);
  console.log(simpleValidator)

  const [, forceUpdate] = useState(0);

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const newuser = { ...form, id: uuidv4() };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newuser)
      })
        .then(response => response.json())
        .then(success => {
          console.log("Success:", success)
          navigate('../login')
        })
        .catch(error => {
          console.error("Error:", error);
        });
     

      setForm({
        email: "",
        password: "",
        confirm_password: ""
      })

      simpleValidator.current.hideMessages();
      forceUpdate({})


    }
    else {
      simpleValidator.current.showMessages();
      forceUpdate({});
    }
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  // const handleBlur = (e) => {
  //   debugger
  //   simpleValidator.current.showMessageFor(e.target.name);

  //   forceUpdate({});
  // }

  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center"></div>
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <img src={lOgO} alt="logo" />
                        <h6>Create an account</h6>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="demo@gmail.com"
                              className="form-control input_modify"
                              id="email"
                              value={form.email}
                              //onBlur={() => simpleValidator.current.showMessageFor("email")} 

                              // onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <p className='hello'>
                              {simpleValidator.current.message("email", form.email, "required|email")}
                            </p>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              placeholder="*****"
                              name="password"
                              // onBlur={handleBlur}
                              //onBlur={() => simpleValidator.current.showMessageFor("password")}
                              className="form-control input_modify"
                              id="password"
                              value={form.password}
                              onChange={handleChange}
                              autoComplete="current-password"

                            />
                            <p className='hello'> {simpleValidator.current.message("password", form.password, "required|min:6|max:8")}</p>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span>Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confirm_password"
                              className="form-control input_modify"
                              id="confirm_password"
                              placeholder="*****"
                              value={form.confirm_password}
                              // onBlur={handleBlur}
                              onChange={handleChange}
                              autoComplete="new-password"
                            />
                            <p className='hello'>{simpleValidator.current.message(
                                "confirm_password",
                                form.confirm_password,
                                `required|in:${form.password}`
                                
                              )

                            }</p>
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              className="theme-btn-primary theme-btn"
                              onClick={handleSubmit}
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="already">
                            {" "}
                            <Link to="/login">Already have Account</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

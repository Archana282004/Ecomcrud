import React, { useState, useRef } from 'react';
import "../assets/css/main.css";
import lOgO from "../assets/images/thumbnails/Logo.svg";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";




export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      e.preventDefault();
      setError("");

      try {
        const response = await fetch("http://localhost:3000/users");
        
        const users = await response.json();
        const userExists = users.some(user =>
          user.email.trim() === form.email.trim() &&
          user.password.trim() === form.password.trim()
        );

        if (userExists) {
         const generatingToken = uuidv4();
         localStorage.setItem("token", generatingToken);
         console.log(generatingToken);
         navigate("/product");
        } else {
          setError("Invalid email or password");
          console.log("not authenticated")
        }
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        console.error(error);
      }

    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    forceUpdate({});
  };
  // const handleBlur = (e) => {
  //   simpleValidator.current.showMessageFor(e.target.name);
  //   forceUpdate({})
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
                    <div className="card_content_wrap text-center">
                      <div className="card_content_wrap text-center">
                        <div className="logo_wrap">
                          <img src={lOgO} alt="logo" />
                          <h6>
                            Don't have an account yet?
                            <Link className="signUpSpan" to="/signup">
                              Sign Up
                            </Link>
                          </h6>
                        </div>
                        <form>
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
                                value={form.email}
                                id="email"
                                //onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <p className='hello'>{simpleValidator.current.message("email", form.email, "required")}</p>
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="exampleFormControlInput2"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span> Password
                              </label>
                              <input
                                type="password"
                                placeholder="*****"
                                name="password"
                                className="form-control input_modify"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                                //onBlur={handleBlur}
                              />
                              <p className='hello'>{simpleValidator.current.message("password", form.password, "required")}</p>
                            </div>
                            <div className="mb-0 auth_btn">
                              <button
                                type="submit"
                                className="theme-btn-primary theme-btn"
                                onClick={handleSubmit}
                              >
                                Sign In
                              </button>
                              {error && <p style={{ color: 'red' }}>{error}</p>}
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
    </div>
  )
}

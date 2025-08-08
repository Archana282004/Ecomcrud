import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import TandC from "./components/site-footer/TandC";
import PP from "./components/site-footer/PP";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import NoPage from "./pages/NoPage";
function App() {
   const [token, setToken] = useState('')
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="product" element={<Home />}>
              <Route index element={<ProductList />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="edit" element={<EditProduct />} />
            </Route>
            <Route path="*" element={<Navigate to="/product" replace />} />
            </>
            ) :
            (
            <>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
        )}
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// async (value) => {
//   await fetch("http://localhost:3003/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       value,
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error)),
//   });
// }

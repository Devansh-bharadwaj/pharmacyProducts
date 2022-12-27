import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products";
import User from "./components/users/User";
import { useState, useEffect } from "react";
import Login from "./components/login/Login";
import axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios
    .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
    .then((response) => {
      // console.log(response.data);
      localStorage.setItem("data", JSON.stringify(response.data));
    })
    .catch((err) => {});
}, [])

useEffect(() => {
  axios
    .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
    .then((response) => {
      // console.log(response.data);
      localStorage.setItem("product-data", JSON.stringify(response.data));
    })
    .catch((err) => {});
}, []);

useEffect(() => {
  axios
    .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
    .then((response) => {
      // console.log(response.data);
      localStorage.setItem("user-data", JSON.stringify(response.data));
    })
    .catch((err) => {});
}, []);

  return (
    <div>
      <Header logout={() => {
          setIsLoggedIn(() => false);
          localStorage.removeItem("login");
        }}
        isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Orders /> : <Navigate to='/pharmacyProducts'></Navigate>}></Route>
        <Route path="/products" element={isLoggedIn ? <Products /> : <Navigate to='/pharmacyProducts'></Navigate>}></Route>
        <Route path="/users" element={isLoggedIn ? <User /> : <Navigate to='/pharmacyProducts'></Navigate>}></Route>
        <Route path="/pharmacyProducts" element={
            <Login
              onLogin={(loginStatus) => {
                setIsLoggedIn(() => loginStatus);
                localStorage.setItem("login", true);
              }}
            ></Login>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;

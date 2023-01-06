import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function usernameChangeHandler(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function passwordChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function loginHandler(event) {
    event.preventDefault();

    if (username === "qaifi" && password === "qaifi") {
      props.onLogin(true);
      alert("You have successfully logged in 😀");
      navigate("/");
    } else {
      alert("Please enter username and password as 'qaifi' 🙃");
    }
  }
  

  return (
    <>
      <div className="container" style={{ marginTop: "115px" }}>
        <div>
          <div className={styles.formMainDiv}>
            <form className={styles.formDiv} onSubmit={loginHandler}>
              <h1 className={styles.formHeading}>Sign In</h1>
              <input
                type="text"
                onChange={usernameChangeHandler}
                required
                placeholder="Enter Username"
                className={styles.userDiv}
              />
              <input
                type="password"
                onChange={passwordChangeHandler}
                required
                placeholder="Enter Password"
                className={styles.userDiv}
              />
              <button type="submit" className={styles.loginDiv}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.logoDiv}>
          <img
            src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
            alt="logo"
          />
          <p className={styles.logoText}>Kafene</p>
        </div>
        <div className={styles.keypointDiv}>
          <Link to="/" className={styles.orderPage}>
            Orders
          </Link>
          <Link to='/products' className={styles.productsPage}>
            Products
          </Link>
          <Link to='/users' className={styles.usersPage}>
            Users
          </Link>
        </div>
        <div style={{marginRight:"46px"}}>
          {props.isLoggedIn && <Link style={{color:"black", textDecoration:"none", fontWeight:"600"}} onClick={props.logout}>
            Logout
          </Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;

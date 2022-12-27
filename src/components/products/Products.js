import React, { useState } from "react";
// import axios from "axios";
import styles from "./Products.module.css";

function Products() {
  const products = JSON.parse(localStorage.getItem("product-data"));
  const [myProduct, setMyProduct] = useState(products);
  // console.log(products)
  const [isChecked, setIsChecked] = useState(true);

  let currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = currentDate.getFullYear();

  currentDate = yyyy + "-" + mm + "-" + dd;

  function dateFormate(date) {
    var d = new Date(date);

    var month1 = "" + (d.getMonth() + 1);
    var day1 = "" + d.getDate();
    var year1 = d.getFullYear();

    if (month1.length < 2) month1 = "0" + month1;
    if (day1.length < 2) day1 = "0" + day1;

    return [year1, month1, day1].join("-");
  }

  const filterItem = (e) => {
    if (e.target.checked) {
      if (e.target.value === "Low Stock") {
        const lowStockProducts = products.filter(
          (curElem) => curElem.stock < 100
        );
        setMyProduct(lowStockProducts);
      } else if (e.target.value === "Expired") {
        const expiredProducts = products.filter(
          (curElem) => {
            const dateConverted = dateFormate(curElem.expiryDate);
            return dateConverted < currentDate
          }
        );
        setMyProduct(expiredProducts);
      }else if(e.target.value === "Low Stock" && e.target.value === "Expired"){
        const bothProducts = products.filter(
          (curElem) => {
            const dateConverted = dateFormate(curElem.expiryDate);
            return (
              dateConverted < currentDate || curElem.stock < 100
            )
          }
        );
        setMyProduct(bothProducts);
      }
      console.log(e.target.checked, e.target.value);
    } else {
      if (e.target.value === "Low Stock") {
        const expiredProducts = products.filter(
          (curElem) => {
            const dateConverted = dateFormate(curElem.expiryDate);
            return dateConverted < currentDate
          }
        );
        setMyProduct(expiredProducts);
      } else if (e.target.value === "Expired") {
        const lowStockProducts = products.filter(
            (curElem) => curElem.stock < 100
          );
          setMyProduct(lowStockProducts);
      }else {
        setMyProduct(products);
      }

    }
  };

  return (
    <div className="container" style={{ marginTop: "115px" }}>
      <h1>Products</h1>
      <div className={styles.mainDiv}>
        <div className={styles.filterDiv}>
          <h3>Filters</h3>
          <div className={styles.filterOption}>
            <p>Count: {myProduct.length}</p>
            <label className={styles.filterCheckbox}>
              <input
                type="checkbox"
                name="orders-new"
                defaultChecked={isChecked}
                value="Expired"
                onChange={(e) => filterItem(e)}
              />
              Expired
            </label>
            <label className={styles.filterCheckbox}>
              <input
                type="checkbox"
                name="orders-packed"
                defaultChecked={isChecked}
                value="Low Stock"
                onChange={(e) => filterItem(e)}
              />
              Low Stock
            </label>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Brand</th>
                <th>Expiry Date</th>
                <th>Unit Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {myProduct.map((product) => {
                return (
                  <tr key={product.id}>
                    <td style={{ color: "gray", fontWeight: "600" }}>
                      {product.id}
                    </td>
                    <td style={{ fontWeight: "600" }}>
                      {product.medicineName}
                    </td>
                    <td style={{ color: "gray", fontWeight: "600" }}>
                      {product.medicineBrand}
                    </td>
                    <td style={{ fontWeight: "600" }}>{product.expiryDate}</td>
                    <td style={{ color: "gray", fontWeight: "600" }}>
                      {product.unitPrice}
                    </td>
                    <td style={{ color: "gray", fontWeight: "600" }}>
                      {product.stock}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from 'react';
// import axios from "axios";
import styles from './Orders.module.css'

function Orders() {
  const orders = JSON.parse(localStorage.getItem("data"));
  // console.log(orders)
  const [myOrders, setMyOrders] = useState(orders);
  const [isChecked, setIsChecked] = useState('checked');
  const [checkedList, setCheckedList] = useState(['New', 'Packed', 'InTransit', 'Delivered']);
  

  const filterItem = (e) => {

    if (e.target.checked) {
      const filteredCheckedList = [...checkedList, e.target.value]
      setCheckedList(filteredCheckedList)
      // console.log(filteredCheckedList)
      const updatedItem = orders.filter((curElem) => {
        return filteredCheckedList.includes(curElem.orderStatus);
      });
      setMyOrders(updatedItem);
    } else {
      const filteredCheckedList = checkedList.filter(listItem => listItem != e.target.value);
      setCheckedList(filteredCheckedList)
      const updatedItem = orders.filter((curElem) => {
        return filteredCheckedList.includes(curElem.orderStatus);
      });
      setMyOrders(updatedItem);
    }
  
  }

  return (
    <div className='container' style={{marginTop:"115px"}}>
      <h1>Orders</h1>
      <div className={styles.mainDiv}>
        <div className={styles.filterDiv}>
          <h3>Filters</h3>
          <div className={styles.filterOption}>
            <p>Count: {myOrders.length}</p>
            <label className={styles.filterCheckbox}>
              <input type="checkbox" name='orders-new' defaultChecked={isChecked} value='New' onChange={(e) => filterItem(e)} />
              New
            </label>
            <label className={styles.filterCheckbox}>
              <input type="checkbox" name='orders-packed'  value='Packed' defaultChecked={isChecked}  onChange={(e) => filterItem(e)} />
              Packed
            </label>
            <label className={styles.filterCheckbox}>
              <input type="checkbox" name='orders-intransit' value='InTransit' defaultChecked={isChecked}  onChange={(e) => filterItem(e)} />
              InTransit
            </label>
            <label className={styles.filterCheckbox}>
              <input type="checkbox" name='delivered' value='Delivered' defaultChecked={isChecked}  onChange={(e) => filterItem(e)} />
              Delivered
            </label>
          </div>
        </div>
        <div style={{width:"100%"}}>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => {
                return (
                <tr key={order.id}>
                  <td style={{color:"gray",fontWeight: "600"}}>{order.id}</td>
                  <td style={{fontWeight: "600"}}>{order.customerName}</td>
                  <td style={{fontWeight: "600"}}>{order.orderDate}<br></br> <span style={{color:"gray",fontWeight: "600"}}>{order.orderTime}</span></td>
                  <td style={{color:"gray",fontWeight: "600"}}>${order.amount}</td>
                  <td style={{fontWeight: "600"}}>{order.orderStatus}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders
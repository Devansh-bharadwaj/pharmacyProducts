import React, { useEffect, useState } from "react";
import styles from "./User.module.css";
import axios from "axios";

function User() {

  const users = JSON.parse(localStorage.getItem("user-data"));
  const [userData, setUserData] = useState(users)
  // console.log(users);

  const serachInputHandler = searchTerm => {
    // console.log(searchTerm)
    setUserData(users.filter(elem => elem.fullName.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  function resetHandler() {
    setUserData(users);
  }

  return (
    <div>
      <div className="container" style={{ marginTop: "115px" }}>
        <div className={styles.header}>
          <h1>Users</h1>
        </div>

        <div className={styles.tableBox}>
          <div className={styles.upperDiv}>
            <form>
              <input
                className={styles.searchBox}
                type="text"
                placeholder="Search by names.."
                onChange={e => serachInputHandler(e.target.value)}
              />
              <input type="reset" className={styles.resetBtn} onClick={resetHandler} />
            </form>
          </div>
          <div className={styles.tableWrapper3}>
            <div className={styles.tableData}>
              <table>
                <thead className={styles.tableBody}>
                  <tr>
                    <th className={styles.column2}>ID</th>
                    <th className={styles.column2}>User Avatar</th>
                    <th className={styles.column2}>Full Name</th>
                    <th className={styles.column2}>DoB</th>
                    <th className={styles.column2}>Gender</th>
                    <th className={styles.column2}>Current Location</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td style={{color:"gray",fontWeight: "600"}}>{user.id}</td>
                        <td><img src={user.profilePic} alt="pic" /></td>
                        <td style={{color:"gray",fontWeight: "600"}}>{user.fullName}</td>
                        <td style={{fontWeight: "600"}}>{user.dob}</td>
                        <td style={{color:"gray",fontWeight: "600"}}>{user.gender}</td>
                        <td style={{color:"gray",fontWeight: "600"}}>{user.currentCity}, {user.currentCountry}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

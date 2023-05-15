import React from "react";
import { DummyUserData } from "./ManageDataAssets/ManageUserData.json";
import styles from "./ManageDataStyles/ManageWholesellers.module.css";
import userPic from "../../assets/UserPic.jpeg";

// function for display user
function displayData(users) {
  let ListItems = (
    <li key={users.name}>
      <div className={styles.userData}>
        <img src={userPic} alt="" />
        <span>
          <p>{users.name}</p>
          <code>{users.code}</code>
        </span>
      </div>
      <div className={styles.userDataBtn}>
        <span className="d-flex justify-content-between">
          <button>remove</button>
          <button>block</button>
        </span>
        <button className={styles.assignBtn}>Assign to other group</button>
      </div>
    </li>
  );
  return ListItems;
}

function ManageUser() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className="w-2">Manage Wholesellers</p>
      </div>
      <form>
        <input type="text" placeholder="Search here..." />
        <button>+ WholeSellers</button>
      </form>
      <div className={styles.sliders}>
        <a href="#">UIUX Designers</a>
        <a href="#">WordPress Developers</a>
        <a href="#">Social Media Marketing</a>
      </div>
      <section className={styles.displayUserData}>
        <ul>{DummyUserData.map(displayData)}</ul>
      </section>
    </div>
  );
}

export default ManageUser;

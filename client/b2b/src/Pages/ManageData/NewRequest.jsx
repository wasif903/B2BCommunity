import React from "react";
import { DummyUserData } from "./ManageDataAssets/ManageUserData.json";
import styles from "./ManageDataStyles/NewRequest.module.css";
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
        <button>remove</button>
        <button>Add</button>
      </div>
    </li>
  );
  return ListItems;
}

function ManageUser() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p>New Request</p>
      </div>
      <input type="text" placeholder="Search here..." />
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

import React from "react";
import styles from "./AssignModal.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { groups } from "../../Pages/ManageData/ManageDataAssets/ManageUserData.json";

function AssignModal({ modalHandler }) {
  return (
    <>
      <div className={styles.ModalBackground}>
        <div className={styles.ModalWrapper}>
          <div
            className={`${styles.heading} d-flex justify-content-between align-items-center w-100`}
          >
            <h3>Assign To Another group</h3>
            <h4 onClick={modalHandler}>X</h4>
          </div>
          <div
            className={`${styles.Wrapper} d-flex flex-column justify-content-evenly align-items-center w-100 gap-4 height-100`}
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
              className={styles.AssignModalImg}
            />
            <div
              className={`${styles.DetailDiv} d-flex align-items-center justify-content-center gap-4 w-100 flex-column`}
            >
              <p>
                <strong>FullName:</strong>
                <span>John Doe</span>
              </p>
              <p>
                <strong>Email:</strong>
                <span>johndoe@example.com</span>
              </p>
            </div>
            <div className={`${styles.buttons} d-flex flex-column gap-4`}>
              <select name="group" id="groups">
                {groups.map((group) => (
                  <option value={group.name}>{group.name}</option>
                ))}
              </select>
              <button>Assign To This Group</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignModal;

import React from "react";
import { DummyUserData } from "./ManageDataAssets/ManageUserData.json";
import styles from "./ManageDataStyles/ManageUser.module.css";
import userPic from "../../assets/UserPic.jpeg";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ManageUser() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>All Members</p>
        </div>
        <form action="">
          <input type="text" placeholder="Search here..." />
          <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
        </form>
        <div className={styles.sliders}>
          <a href="#">UIUX Designers</a>
          <a href="#">WordPress Developers</a>
          <a href="#">Social Media Marketing</a>
        </div>
        <Container className={styles.displayUsers}>
          <Row>
            {DummyUserData.map((item) => (
              <Col lg="3" md="4" sm="6">
                <div className={`${styles.mapWrapper}`}>
                  <div>
                    <img className={styles.imgWrapper} src={userPic} />
                  </div>
                  <div
                    className={`${styles.NewRequestNamePanel} text-center py-3`}
                  >
                    <p>{item.name}</p>
                    <code>{item.code}</code>
                  </div>
                  <div>
                    <button className={`my-2 ${styles.buttons}`}>REMOVE</button>
                    <button className={`my-2 ${styles.buttons}`}>BLOCK</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ManageUser;

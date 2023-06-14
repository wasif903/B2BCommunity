import React from "react";
import styles from "./AssignModal.module.css";
import { Container, Col, Row } from "react-bootstrap";

function AssignModal({ modalHandler }) {
  return (
    <>
      <div className={styles.ModalBackground}>
        <div className={styles.ModalWrapper}>
          <div className={styles.modal}>
            <h4 className={styles.closeModal} onClick={modalHandler}>
              X
            </h4>
            <h3>Assign To Another group</h3>
            <Container>
              <Row>
                <Col>
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                  />
                </Col>
                <Row>Col</Row>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignModal;

import React from "react";
import style from "./compStyles/Detail.module.css";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

function Detail() {
  return (
    <>
      <Header />
      <Container className="mt-5 pt-5">
        <Row className={style.AssignAnotherGroupRow}>
          <Col className="d-flex justify-content-center align-items-center">
            <img
              className={style.AssignAnotherGroupImg}
              src={"https://randomuser.me/api/portraits/men/1.jpg"}
              alt=""
            />
          </Col>
          <Row className={`${style.DetailRow} pt-3 pb-3`}>
            <Col sm={6} className={style.AssignAnotherGroupCol}>
              <div className={`${style.DetailDiv} d-flex flex-column gap-4`}>
                <p>
                  <strong>FirstName:</strong>
                  <span>John</span>
                </p>
                <p>
                  <strong>LastName:</strong>
                  <span>Doe</span>
                </p>
                <p>
                  <strong>Address:</strong>
                  <span className={style.address}>
                    123 Main Street, Anytown, USA
                  </span>
                </p>
              </div>
            </Col>
            <Col sm={6} className={style.AssignAnotherGroupCol}>
              <div className={`${style.DetailDiv} d-flex flex-column gap-4`}>
                <p>
                  <strong>Gender:</strong>
                  <span>Male</span>
                </p>
                <p>
                  <strong>Age:</strong>
                  <span>35</span>
                </p>
                <p>
                  <strong>Email:</strong>
                  <span>johndoe@example.com</span>
                </p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Detail;

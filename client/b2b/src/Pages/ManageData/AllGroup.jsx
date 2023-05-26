import { React, useRef, useState } from "react";
import styles from "./ManageDataStyles/AllGroup.module.css";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { groups } from "./ManageDataAssets/ManageUserData.json";
import { useNavigate } from "react-router-dom";
import ManageGroup from "./ManageGroup";

function AllGroup() {
  const navigate = useNavigate();

  const Ref = useRef({});
  let obj = {};

  function HandleClick(index) {
    Ref.current[index].textContent;

    obj.Passion = groups[index].name;
    obj.City = groups[index].city;
    obj.Members = groups[index].members;
    obj.Img = groups[index].image;

    console.log(obj);
  }

  function a() {
    return console.log(obj);
  }

  <ManageGroup obj={obj} />;

  return (
    <>
      <Header />
      <div>
        <Row
          className={`${styles.Heading} d-flex justify-content-center align-items-center m-0`}
        >
          <p className="w-auto m-0 text-white">All Groups</p>
        </Row>

        <Container className="py-5">
          <Row>
            {groups.map((item, index) => {
              const ref = useRef(null);
              Ref.current[index] = ref;
              return (
                <Col lg="3" md="4" sm="6" key={index + 1}>
                  <div className={`${styles.mapWrapper}`} key={index + 1}>
                    <div>
                      <img
                        ref={ref}
                        className={styles.imgWrapper}
                        src={item.image}
                        key={index + 1}
                        alt={index + 1}
                      />
                    </div>
                    <div
                      className={`${styles.NewRequestNamePanel} text-center py-3`}
                    >
                      <h3 key={index} ref={ref}>
                        {item.name}
                      </h3>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <h5 id="city" className="m-0" ref={ref}>
                          {item.city}
                        </h5>
                        <span></span>
                        <h5
                          className="m-0"
                          ref={ref}
                        >{`${item.members} Members`}</h5>
                      </div>
                    </div>
                    <div className="w-75">
                      <button
                        onClick={() => (
                          HandleClick(index), a(), navigate("/Manage-Group")
                        )}
                        className={`my-2 w-100 ${styles.buttons}`}
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AllGroup;

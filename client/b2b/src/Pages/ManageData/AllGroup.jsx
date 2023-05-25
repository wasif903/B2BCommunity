import { Children, React, useRef } from "react";
import styles from "./ManageDataStyles/AllGroup.module.css";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { groups } from "./ManageDataAssets/ManageUserData.json";
import { Link } from "react-router-dom";

function AllGroup() {
  // implement useRef
  const textRefs = useRef([]);

  // store data in array
  const arr = [];

  // function to get and push data in array
  const handleClick = (index) => {
    textRefs.current[index].textContent;
    arr.push(
      groups[index].name,
      groups[index].city,
      groups[index].members.toString(),
      groups[index].image
    );
    if (arr.length >= 8) {
      arr.splice(0, 4);
    }
    console.log(arr);
  };
  return (
    <>
      <Header />
      <Col>
        <Row
          className={`${styles.Heading} d-flex justify-content-center align-items-center m-0`}
        >
          <p className="w-auto m-0 text-white">All Groups</p>
        </Row>
        <Container className="mt-5 pt-4">
          <Row className={`${styles.SubHeadingRow} position-relative`}>
            <div>
              <h3>All Groups</h3>
              <p>Groups you might be interested in.</p>
            </div>
            <a href="/" className="w-auto p-0 position-absolute">
              SEE ALL
            </a>
          </Row>
        </Container>
        <Container className="mt-5 pt-3">
          <Row>
            {groups.map((item, index) => {
              const ref = useRef(null);
              textRefs.current[index] = ref;
              return (
                <Col lg="3" md="4" sm="6" key={index + 1}>
                  <div className={`${styles.mapWrapper}`} key={index + 1}>
                    <div>
                      <img
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
                        <h5 id="city" className="m-0">
                          {item.city}
                        </h5>
                        <span></span>
                        <h5 className="m-0">{`${item.members} Members`}</h5>
                      </div>
                    </div>
                    <div className="w-75">
                      {/* <Link to="/Manage-Group" className="text-decoration-none"> */}
                      <button
                        onClick={() => handleClick(index)}
                        className={`my-2 w-100 ${styles.buttons}`}
                      >
                        Manage
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default AllGroup;

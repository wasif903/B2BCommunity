import styles from "./ManageDataStyles/AllGroup.module.css";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { groups } from "./ManageDataAssets/ManageUserData.json";
import { useNavigate } from "react-router-dom";

function AllGroup() {
  const navigate = useNavigate();

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
              return (
                <Col lg="3" md="6" sm="6" key={index + 1}>
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
                      <h3 key={index}>{item.name}</h3>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <h5 id="city" className="m-0">
                          {item.city}
                        </h5>
                        <span></span>
                        <h5 className="m-0">{`${item.members} Members`}</h5>
                      </div>
                    </div>
                    <div className="w-75">
                      <button
                        onClick={() => navigate("/Manage-Group")}
                        className={`my-2 w-100 ${styles.buttons}`}
                      >
                        JOIN
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

import Header from "../../Components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./adminPanel.module.css";
import image from "../../assets/my_acc.png";

function AdminPanel() {
  return (
    <>
      <Header />

      <div className={`${styles.coverPhoto} pb-lg-5`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.editCoverPhoto}>X</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <Col>
            <div
              className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.editProfilePhoto}>X</div>
              <img src={image} className={styles.profilePhoto} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-4">
            <div>
              <h1>James Bond</h1>
              <h4>
                “Pushing pixels and experiences in digital products for
                Sebostudio”
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col md="6">
            <h3>ABOUT</h3>
          </Col>
          <Col md="6">
            <div className="text-end">
              <button>New Group</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPanel;

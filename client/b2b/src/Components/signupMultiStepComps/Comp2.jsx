import styles from "./multiStepStyles/Comp1.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Comp2() {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Row>
          <div className="d-flex align-items-center flex-column mt-3">
            <h2>Tell us about yourself</h2>
            <p>A few cliks away from creating your outlet 34 B2B</p>
          </div>
        </Row>
        <Col className="mt-3 mb-5">
          <form action="input" className={styles.CompForm}>
            <Row>
              <input type="text" placeholder="Your address line" />
            </Row>
            <Row>
              <input type="text" placeholder="Zip code" />
            </Row>
            <Row>
              <input type="text" placeholder="Country" />
            </Row>
            <Row>
              <input type="text" placeholder="City" />
            </Row>
          </form>
          {/* <Row>
            <button className="mt-4">Next</button>
          </Row> */}
          <Row className="mt-3">
            <span className="d-flex justify-content-between">
              <p>Already have account?</p>
              <a href="/">Login</a>
            </span>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default Comp2;

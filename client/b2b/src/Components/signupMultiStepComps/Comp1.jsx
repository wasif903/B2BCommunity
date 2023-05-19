import styles from "./multiStepStyles/MultiStepComp.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Comp1() {
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
              <input type="text" placeholder="First Name" />
            </Row>
            <Row>
              <input type="text" placeholder="Last Name" />
            </Row>
            <Row>
              <input type="text" placeholder="Company Name" />
            </Row>
            <Row>
              <input type="text" placeholder="VAT-ID" />
            </Row>
          </form>
          <Row>
            <button className="mt-4">Next</button>
          </Row>
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

export default Comp1;

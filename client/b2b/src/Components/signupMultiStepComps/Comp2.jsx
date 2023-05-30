import styles from "./multiStepStyles/MultiStepComp.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Comp2({ onChange, userFields, setSteps }) {
  // eslint-disable-next-line react/prop-types
  const { addressLine, zipCode, city, country } = userFields;

  useEffect(() => {
    setSteps(1);
  }, []);

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Row>
          <div className="d-flex align-items-center flex-column mt-3">
            <h2>Tell us about yourself</h2>
            <p className={styles.headingPara}>
              A few cliks away from creating your outlet 34 B2B
            </p>
          </div>
        </Row>
        <Col className="mt-3 mb-5">
          <form action="input" className={styles.CompForm}>
            <Row>
              <input
                type="text"
                name="addressLine"
                value={addressLine}
                onChange={onChange}
                placeholder="Your address line"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={onChange}
                placeholder="Zip code"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="country"
                value={country}
                onChange={onChange}
                placeholder="Country"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="city"
                value={city}
                onChange={onChange}
                placeholder="City"
              />
            </Row>
          </form>
          <Row className="mt-3">
            <span className="d-flex justify-content-between">
              <p>Already have account?</p>
              <Link to="/login">
                <a>Login</a>
              </Link>
            </span>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default Comp2;

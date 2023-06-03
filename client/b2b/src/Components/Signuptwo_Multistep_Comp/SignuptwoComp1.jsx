import styles from "./multiStepStyles/MultiStepComp.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Comp1({ onChange, userFields, setSteps }) {
  // eslint-disable-next-line react/prop-types
  const { firstName, lastName, VAT_ID, companyName } = userFields;

  useEffect(() => {
    setSteps(0);
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
                value={firstName}
                onChange={onChange}
                name="firstName"
                placeholder="First Name"
              />
            </Row>
            <Row>
              <input
                type="text"
                value={lastName}
                onChange={onChange}
                name="lastName"
                placeholder="Last Name"
              />
            </Row>
            <Row>
              <input
                type="text"
                value={companyName}
                onChange={onChange}
                name="companyName"
                placeholder="Company Name"
              />
            </Row>
            <Row>
              <input
                type="text"
                value={VAT_ID}
                onChange={onChange}
                name="VAT_ID"
                placeholder="VAT-ID"
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

export default Comp1;

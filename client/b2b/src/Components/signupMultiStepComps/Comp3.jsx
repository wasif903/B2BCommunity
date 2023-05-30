import styles from "./multiStepStyles/MultiStepComp.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// Importing SIGNUP FROM REDUX

// eslint-disable-next-line react/prop-types
function Comp3({ onChange, userFields, setSteps, handleSubmit }) {
  // eslint-disable-next-line react/prop-types
  const { email, password, PhoneNumber } = userFields;

  const [confirmPass, setConfirmPass] = useState("");

  const confirmPassHandler = (e) => {
    setConfirmPass(e.target.value);
  };

  if (confirmPass === password) {
    console.log("Password Matched");
  } else {
    console.log("Password Dont Match");
  }

  useEffect(() => {
    setSteps(2);
  }, []);

  // const navigate = useNavigate();

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
                name="PhoneNumber"
                onChange={onChange}
                value={PhoneNumber}
                placeholder="Phone number"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="email"
                onChange={onChange}
                value={email}
                placeholder="Email address"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="password"
                onChange={onChange}
                value={password}
                placeholder="Password"
              />
            </Row>
            <Row>
              <input
                type="text"
                name="confirmPass"
                onChange={confirmPassHandler}
                value={confirmPass}
                placeholder="Confirm Password"
              />
            </Row>
          </form>

          <Row>
            <span
              className={`${styles.compThreeSelectFiles} d-flex flex-column align-items-center mt-4`}
            >
              <p className="text-dark w-100">Add business license.</p>
              <p className="text-dark mb-3 w-50">Format .pdf .jpg .png</p>
              <button className="mt-3 mb-3">Select file.</button>
              <p className="mt-2 text-dark ">No file selected.</p>
            </span>
          </Row>
          <Row
            className={`${styles.RegistrationInput} d-flex flex-column justify-content-center align-items-center mt-3 mb-5`}
          >
            <span className="d-flex">
              <input className=" mt-1" type="checkbox" />
              <p className="mt-1 ms-3 text-start text-dark">
                Newsletter registration | I want to receive the newsletter.
              </p>
            </span>
            <p className={`${styles.RegistrationInputPara} text-start`}>
              We would like to know how you came to know about us?
            </p>
          </Row>
          <Row className={`${styles.privacyCheckBox} d-flex`}>
            <input className="mt-2" type="checkbox" />
            <div className="w-auto ms-1">
              <p className="text-start">Privacy Consent Statement</p>
              <p className="text-start mt-0">
                By checking the box, you confirm your consent that your inputs
                from this form will be electronically stored. The data collected
                will be used solely for the purpose of responding to your
                inquiry and addressing your concern. You can revoke this consent
                at any time. Your data will be promptly deleted upon revocation.
                For more information, please refer to our Privacy Policy.
              </p>
            </div>
          </Row>

          <button type="submit" className="my-4" onClick={handleSubmit}>
            Submit
          </button>

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

export default Comp3;

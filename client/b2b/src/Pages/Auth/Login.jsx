import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import styles from "./login.module.css";
import Logo from "../../assets/login_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <>
      <div className={styles.loginWrapper}>
        <Container className={styles.loginPageWrapper}>
          <Row>
            <Col>
              <div className="text-center py-3">
                <img src={Logo} className={styles.logo} alt="site logo" />
              </div>
              <div className="text-center">
                <h1 className={`${styles.headings} pb-3`}>Login</h1>
                <h4 className={`${styles.headings}`}>
                  Login With Your Account <br /> To Continue
                </h4>
              </div>
            </Col>
          </Row>

          <Row className={styles.loginFrom}>
            <Col>
              <Form>
                <input
                  className={`${styles.loginInputs} form-control-lg my-3`}
                  type="email"
                  placeholder="Email"
                />

                <input
                  className={`form-control-lg my-3 ${styles.loginInputs}`}
                  type="password"
                  placeholder="Password"
                />

                <div className="d-flex justify-content-between">
                  <div>
                      <input type="checkbox" id="checkbox" label="" />
                        <label className="ms-1" htmlFor="checkbox">Remember Me</label>
                 
                  </div>
                  <div>
                    <Link to="/forget-password" className={styles.headings}>Forgot Password?</Link>
                  </div>
                </div>

                <div className="text-center d-grid my-3 ">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </Col>
          </Row>

          <Row className={`d-none d-md-flex ${styles.loginOptionRow}`}>
            <Col md="4">
              <div>
                <hr className={styles.lines} />
              </div>
            </Col>
            <Col md="4">
              <h4 className={`text-center  ${styles.headings}`}>OR</h4>
            </Col>
            <Col md="4">
              <hr className={styles.lines} />
            </Col>
          </Row>

          <Row className={`${styles.loginOptionRow} `}>
            <Col
              md="3"
              className={`${styles.loginOptionIcon} d-flex justify-content-center align-items-center`}
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fa-2x"
                  style={{ color: "#db3685" }}
                />
              </div>
            </Col>
            <Col md="9" className={` ${styles.loginOptionTxt}`}>
              <div className="text-center pt-2">
                <h5 className={`${styles.loginOptionHeadings}`}>
                  Login With Google
                </h5>
              </div>
            </Col>
          </Row>

          <Row className={`${styles.loginOptionRow}`}>
            <Col sm="12" md="9" className="text-md-start text-center">
              <h6 className={styles.headings}>Alreay Have An Accound ?</h6>
            </Col>
            <Col sm="12" md="3" className="text-center text-md-end pb-2">
              <Link to="/signup" className={styles.anchor}>
                SIGNUP
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
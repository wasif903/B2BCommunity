import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import styles from "./login.module.css";
import Logo from "../../assets/login_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.loginWrapper}`}>
        <Container className={styles.loginPageWrapper}>
          <Row>
            <Col>
              <div
                onClick={() => navigate("/home")}
                className="text-center py-3"
              >
                <img src={Logo} className={styles.logo} alt="site logo" />
              </div>
              <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <h1
                  className={`${styles.headings}`}
                  style={{ fontWeight: "bolder" }}
                >
                  Login
                </h1>
                <h4 className={`${styles.headings}`}>
                  Login With Your Account <br /> To Continue
                </h4>
              </div>
            </Col>
          </Row>

          <Row className={styles.loginFrom}>
            <Col>
              <Form className="d-flex flex-column justify-content-center align-items-center">
                <input
                  className={`${styles.loginInputs} form-control-lg my-3 w-100`}
                  type="email"
                  placeholder="Email"
                />

                <input
                  className={`form-control-lg my-3 w-100 ${styles.loginInputs}`}
                  type="password"
                  placeholder="Password"
                />

                <div
                  className={`${styles.loginRememberForm} d-flex justify-content-between w-100`}
                >
                  <div className=" w-50">
                    <label htmlFor="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        label=""
                        className={`${styles.Checkbox} me-2 mt-2 w-auto`}
                      />
                      Remember Me
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link to="/forget-password" className={styles.forget}>
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div className="text-center d-grid mt-4 w-100">
                  <button
                    onClick={() => navigate("/Otp-auth")}
                    className={styles.SumbitBtn}
                    type="submit"
                  >
                    Submit
                  </button>
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

          <Row className={`${styles.loginWithGoogleRow} mt-5`}>
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
                <p className={`${styles.loginOptionHeadings} mb-0`}>
                  Login With Google
                </p>
              </div>
            </Col>
          </Row>

          <Row className={`${styles.loginOptionRow}`}>
            <Col sm="12" md="9" className="text-md-start text-center w-auto">
              <p className={styles.headings}>Alreay Have An Account ?</p>
            </Col>
            <Col sm="12" md="3" className="text-center text-md-end pb-2 mb-1">
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

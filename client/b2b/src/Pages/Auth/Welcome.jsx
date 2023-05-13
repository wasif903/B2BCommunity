import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import styles from "./auth.module.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className={styles.welComeWrapper}>
        <Container className={styles.pageWrapper}>
          <Row>
            <Col>
              <div className="text-center pb-4">
                <img src={Logo} alt="site logo" />
              </div>
              <div className="text-center">
                <h2 className={styles.headings}>Welcome</h2>
                <h1 className={`${styles.headings} display-6`}>OUTLET 34</h1>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.loginOptionRow}`}>
            <Col
              md="3"
              className={`${styles.loginOptionIcon} d-flex justify-content-center align-items-center`}
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-2x"
                  style={{ color: "#ffffff" }}
                />
              </div>
            </Col>
            <Col md="9" className={styles.loginOptionTxt}>
              <div className="text-center pt-2">
                <h5 className={styles.loginOptionHeadings}>
                  Continue With Gmail
                </h5>
              </div>
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
                  style={{ color: "#ffffff" }}
                />
              </div>
            </Col>
            <Col md="9" className={styles.loginOptionTxt}>
              <div className="text-center pt-2">
                <h5 className={`${styles.loginOptionHeadings}`}>
                  Sign UP With Google
                </h5>
              </div>
            </Col>
          </Row>

          <Row className={`${styles.loginOptionRow}`}>
            <Col sm="12" md="9" className="text-md-start text-center">
              <h6 className={styles.headings}>Alreay Have An Accound ?</h6>
            </Col>
            <Col sm="12" md="3" className="text-center text-md-end pb-2">
              <Link to="/login" className={styles.anchor}>
                LOGIN
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Welcome;

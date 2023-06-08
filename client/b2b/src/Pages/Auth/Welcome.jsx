import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import styles from "./auth.module.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../utils/BaseUrlConfig";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import app from "../../firebase";
import { useEffect, useState } from "react";

function Welcome() {
  //state for loader
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // console.log(result.user);
        // console.log(result.user.displayName);
        
        if (result.user) {
          const userf = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          };
          if (result.user.emailVerified === true) {
            setloading(true)
            //send this object to backend
            axios
              .post(`${API_BASE_URL}/api/auth/firebaseauth`, userf)
              .then((res) => {
                console.log(res.data);
                setloading(false)
                navigate("/signup");
              });
            // console.log(userf)
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className={styles.welComeWrapper}>
        <Container className={styles.pageWrapper}>
          <Row>
            <Col>
              <div className="text-center pb-4">
                <img className={styles.siteLogo} src={Logo} alt="site logo" />
              </div>
              <div className="text-center">
                <h2 className={styles.headings}>Welcome</h2>
                <h1 className={`${styles.headings} display-6`}>OUTLET 34</h1>
              </div>
            </Col>
          </Row>
          <Row
            className={`${styles.loginOptionRow}`}
            onClick={() => navigate("/signup")}
          >
            <Col
              md="3"
              className={`${styles.loginOptionIcon} d-flex justify-content-center align-items-center h-100`}
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
              <div className="text-center">
                <p className={`${styles.loginOptionHeadings} m-0`}>
                  Continue With Gmail
                </p>
              </div>
            </Col>
          </Row>

          <Row className={`d-none d-md-flex ${styles.loginOptionMiddleRow}`}>
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
          {/* backdrop */}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}

          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Row
            className={`${styles.loginOptionRow} `}
            onClick={signInWithGoogle}
          >
            <Col
              md="3"
              className={`${styles.loginOptionIcon} d-flex justify-content-center align-items-center h-100`}
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
              <div className="text-center">
                <p className={`${styles.loginOptionHeadings} m-0`}>
                  Sign UP With Google
                </p>
              </div>
            </Col>
          </Row>

          <Row className={`${styles.loginOptionRow}`}>
            <Col sm="12" md="9" className="text-md-start text-center">
              <p className={styles.headings}>Alreay Have An Account ?</p>
            </Col>
            <Col sm="12" md="3" className="text-center text-md-end">
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

import { useState, useRef } from "react";
import style from "./OptAuth.module.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function OtpAuth() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const inputRefs = useRef([]);

  const handleOtpChange = (event, index) => {
    const { value } = event.target;
    const otpArray = [...otp];
    otpArray[index] = value;
    const newOtp = otpArray.join("");
    setOtp(newOtp);

    if (value !== "") {
      const nextIndex = index + 1;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  return (
    <Container className={`${style.main} text-center`}>
      <Row>
        <Col>
          <div className={style.heading}>
            <h2>OTP Verification</h2>
            <p>
              We’ve just sent you 4 digits code to your email example@gmail.com
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="py-3 d-flex flex-column justify-content-center align-items-center">
          <form className={style.inputFields}>
            {[...Array(5)].map((_, index) => (
              <input
                className={style.otpAuhtFields}
                ref={(ref) => (inputRefs.current[index] = ref)}
                key={index + 1}
                type="number"
                value={otp[index] || ""}
                onChange={(event) => handleOtpChange(event, index)}
                maxLength={1}
              />
            ))}
          </form>

          <div className="pt-5 w-100">
            <button className={style.mainBtn} onClick={() => navigate("/home")}>
              Submit
            </button>
          </div>

          <div
            className={`${style.footer} d-inline-flex py-5 w-100 justify-content-between`}
          >
            <p className="text-start">Don’t received the code?</p>
            <p>
              <NavLink to="/">Resend Code</NavLink>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OtpAuth;

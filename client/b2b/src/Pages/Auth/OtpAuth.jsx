import { useState } from "react";
import style from "./OptAuth.module.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useRef } from 'react';

function OtpAuth() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState('');


  const inputRefs = useRef([]);

  const handleOtpChange = (event, index) => {
    const { value } = event.target;
    const otpArray = [...otp];
    otpArray[index] = value;
    const newOtp = otpArray.join('');
    setOtp(newOtp);
    
    
    if (value !== '') {
      const nextIndex = index + 1;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  
  }

  


  return (
    <Container className={`${style.main} text-center`}>
      <Row>
        <Col>
          <div className={style.heading}>
            <h2>OTP Verification</h2>
            <p>We’ve just sent you 4 digits code to your email example@gmail.com</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="py-5">
          <form>
            {[...Array(5)].map((_, index) => (
              <input
                className={style.otpAuhtFields}
                ref={(ref) => (inputRefs.current[index] = ref)}
                key={index}
                type="number"
                value={otp[index] || ''}
                onChange={(event) => handleOtpChange(event, index)}
                maxLength={1}
              />
            ))}
          </form>

          <div className="pt-5">
            <button className={style.mainBtn} onClick={() => navigate("/home")}>
              Submit
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex justify-space-around">
            <p>Don’t received the code?</p>
            <a href="/">Resend Code</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default OtpAuth;

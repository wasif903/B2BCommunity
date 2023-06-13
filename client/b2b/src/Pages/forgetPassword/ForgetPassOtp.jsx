import { useState, useRef, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./forgetPasswordCss/forgetPassOtp.module.css";
import { useNavigate } from "react-router-dom";
import {
  useResendOtpMutation,
  useVerfiyUserOtpMutation,
} from "../../REDUX/Reducers/auth/UserSlice";
import { userContext } from "../../contexts/UserContext";
import { useCookies } from "react-cookie";

function ForgetPassOtp() {
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["cookie"]);

  const [otp, setOtp] = useState("");

  const inputRefs = useRef([]);

  const { user } = useContext(userContext);

  // eslint-disable-next-line no-unused-vars
  const [verfiyUserOtp, { isLoading, isError }] = useVerfiyUserOtpMutation();

  const [resendOtp] = useResendOtpMutation();

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
  console.log(cookies);

  const otpVerify = async () => {
    try {
      const res = await verfiyUserOtp({
        email: user.user.email,
        otpCode: Number(otp),
      });
      console.log(res);

      navigate("/home");
      setCookie("cookie", res.data.cookie);
      setCookie("userRole", res.data.user.role[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onResendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await resendOtp({ email: user.user.email });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className={`${style.main} text-center`}>
        <Row>
          <Col>
            <div className={style.heading}>
              <h2>OTP Verification</h2>
              <p>
                We’ve just sent you 4 digits code to your email
                example@gmail.com
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="py-3 d-flex flex-column justify-content-center align-items-center">
            <form className={style.inputFields}>
              {[...Array(6)].map((_, index) => (
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
              <button className={style.mainBtn} onClick={otpVerify}>
                Submit
              </button>
            </div>

            <div
              className={`${style.footer} d-inline-flex py-5 w-100 justify-content-between`}
            >
              <p className="text-start">Don’t received the code?</p>
              <p>
                <button onClick={navigate("/Enter-New-pass")}>
                  Resend Code
                </button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ForgetPassOtp;

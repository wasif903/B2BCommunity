import React, { useState } from "react";
import style from "./forgetPasswordCss/forgetPass.module.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { useForgotPassMutation } from "../../REDUX/Reducers/auth/UserSlice";

function ForgetPass() {
  const navigate = useNavigate();

  const [forgotPass] = useForgotPassMutation();

  const [forgetPassEmail, setforgetPassEmail] = useState("");

  const handleChange = (e) => {
    setforgetPassEmail(e.target.value);
  };

  const forgotPassHandler = async () => {
    try {
      const res = await forgotPass({ email: forgetPassEmail });
      console.log(res, "forgot pass handler api status");
      if (res.data.status === 200) {
        navigate("/Enter-New-pass", { state: { email: forgetPassEmail } });
      } else {
        alert("Invalid Email Try Again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.body}>
        <h1 className="text-light w-100 text-center">Reset Password Form</h1>
        <Container className={style.con}>
          <div
            className={`${style.headings} d-flex justify-content-center align-items-center flex-column`}
          >
            <h1 className="d-flex justify-content-center align-items-center m-3 text-center">
              Forget Password
            </h1>
            <p>
              Please enter your email address and we'll send you instructions on
              how to reset your Password
            </p>
          </div>
          <div className={style.inputs}>
            <input
              className={style.inputField}
              type="email"
              placeholder="Enter Your Email"
              name="forgetPassEmail"
              value={forgetPassEmail}
              onChange={handleChange}
            />
            <button onClick={forgotPassHandler}>Reset my Password</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ForgetPass;

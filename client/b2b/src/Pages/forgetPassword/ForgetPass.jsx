import React, { useState } from "react";
import style from "./forgetPasswordCss/forgetPass.module.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function ForgetPass() {
  const navigate = useNavigate();

  const [forgetPassEmail, setforgetPassEmail] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setforgetPassEmail({
      ...forgetPassEmail,
      [e.target.name]: e.target.value,
    });
  };

  function Sumbit() {
    if (forgetPassEmail.email !== "") navigate("/ForgetPass-Otp");
    console.log(forgetPassEmail.email);
  }

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
              name="email"
              onChange={handleChange}
            />
            <button onClick={Sumbit}>Reset my Password</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ForgetPass;

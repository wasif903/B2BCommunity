import React, { useState } from "react";
import style from "./forgetPass.module.css";
import Container from "react-bootstrap/Container";

function ForgetPass() {
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
    console.log(forgetPassEmail);
  }
  return (
    <>
      <body className={style.body}>
        <h1 className="text-light w-100 text-center">Reset Password Form</h1>
        <Container className={style.con}>
          <div
            className={`${style.headings} d-flex justify-content-center align-items-center flex-column`}
          >
            <h1 className="d-flex justify-content-center align-items-center m-3">
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
      </body>
    </>
  );
}

export default ForgetPass;

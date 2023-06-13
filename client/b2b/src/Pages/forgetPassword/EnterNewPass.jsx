import React, { useState } from "react";
import style from "./forgetPasswordCss/forgetPass.module.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function EnterNewPass() {
  const navigate = useNavigate();

  const [resetPass, setresetPass] = useState({
    password: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setresetPass({
      ...resetPass,
      [e.target.name]: e.target.value,
    });
  };

  function Sumbit() {
    if (
      resetPass.password === resetPass.newPassword &&
      resetPass.password !== "" &&
      resetPass.newPassword !== ""
    ) {
      navigate("/login");
      console.log(resetPass);
    } else {
      alert("Password and new password must be same");
    }
  }

  return (
    <>
      <div className={style.body}>
        <Container className={style.con}>
          <div
            className={`${style.headings} d-flex justify-content-center align-items-center flex-column`}
          >
            <h1 className="d-flex justify-content-center align-items-center m-3 text-center">
              Enter New Password
            </h1>
            <p className="d-flex flex-column gap-2">
              Enter Your New Password Below{" "}
              <span>
                <strong>Hint:</strong>
                Password should be at least Uppercase and lowercase letter and
                symbols like ! " ? $ % ^ &
              </span>
            </p>
          </div>
          <div className={style.inputs}>
            <input
              className={style.inputField}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              className={style.inputField}
              type="Password"
              placeholder="Confirm Password"
              name="newPassword"
              onChange={handleChange}
            />
            <button onClick={Sumbit}>Reset Password</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EnterNewPass;

import MultiStep from "react-multistep";
import Comp1 from "../../Components/signupMultiStepComps/Comp1";
import Comp2 from "../../Components/signupMultiStepComps/Comp2";
import Comp3 from "../../Components/signupMultiStepComps/Comp3";
import Logo from "../../assets/logo.png";
import styles from "../../Components/signupMultiStepComps/multiStepStyles/MultiStepComp.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Signup() {
  const [userFields, setUserFields] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    VAT_ID: "",
    addressLine: "",
    zipCode: "",
    city: "",
    country: "",
    PhoneNumber: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUserFields({ ...userFields, [e.target.name]: e.target.value });
  };

  console.log(userFields, "user checking data");

  const [steps, setSteps] = useState(0);

  console.log(steps, "CHECK STEPS");

  return (
    <>
      <Container className={styles.wrapper}>
        <div className="text-center">
          <img src={Logo} className={styles.logo} />
        </div>

        <Col className={`text-center ${styles.MultiStep}`}>
          <MultiStep
            activeStep={steps}
            showNavigation={steps === 2 ? false : true}
          >
            <Comp1
              title="Step 1"
              userFields={userFields}
              setSteps={setSteps}
              onChange={onChange}
            />
            <Comp2
              title="Step 2"
              userFields={userFields}
              setSteps={setSteps}
              onChange={onChange}
            />
            <Comp3
              title="Step 3"
              userFields={userFields}
              setSteps={setSteps}
              onChange={onChange}
            />
          </MultiStep>
        </Col>
      </Container>
    </>
  );
}

export default Signup;

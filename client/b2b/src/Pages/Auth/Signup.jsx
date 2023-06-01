import MultiStep from "react-multistep";
import Comp1 from "../../Components/signupMultiStepComps/Comp1";
import Comp2 from "../../Components/signupMultiStepComps/Comp2";
import Comp3 from "../../Components/signupMultiStepComps/Comp3";
import Logo from "../../assets/logo.png";
import styles from "../../Components/signupMultiStepComps/multiStepStyles/MultiStepComp.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import { useCreateUserMutation } from "../../REDUX/Reducers/auth/UserSlice";
import { useNavigate } from "react-router-dom";
import { emailContext } from "../../contexts/SignupContext";



function Signup() {

  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const { setEmail } = useContext(emailContext);

  const navigate = useNavigate()

  const [steps, setSteps] = useState(0);

  const [userFields, setUserFields] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    VAT_ID: "",
    addressLine: "",
    zipCode: Number,
    city: "",
    country: "",
    PhoneNumber: "",
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isLoading) {
        alert("Loading");
      } else {

        const res = await createUser(userFields);

        if (res.data.status === 200) {
          console.log(res);
          setEmail(res.data.data.email)
          navigate('/otp-auth');

        } else {
          console.log(isError)
        }
      }


    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setUserFields({ ...userFields, [e.target.name]: e.target.value });
  };



  return (
    <>
      <Container className={`${styles.wrapper} py-5`}>
        <Row>


          <Col className={`text-center ${styles.MultiStep}`}>
            <div className="text-center">
              <img src={Logo} className={styles.logo} />
            </div>
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
                handleSubmit={handleSubmit}
              />
            </MultiStep>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;

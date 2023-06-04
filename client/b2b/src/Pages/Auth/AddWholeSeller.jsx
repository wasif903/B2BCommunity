import MultiStep from "react-multistep";
import Logo from "../../assets/logo.png";
import styles from "../../Components/signupMultiStepComps/multiStepStyles/MultiStepComp.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import { useCreateSellerMutation } from "../../REDUX/Reducers/auth/UserSlice";
import WholeSellerComp1 from "../../Components/Signuptwo_Multistep_Comp/WholeSellerComp1";
import WholeSellerComp2 from "../../Components/Signuptwo_Multistep_Comp/WholeSellerComp2.jsx";
import WholeSellerComp3 from "../../Components/Signuptwo_Multistep_Comp/WholeSellerComp3.jsx";
import { useNavigate } from "react-router-dom";

function AddWholeSeller() {
  // eslint-disable-next-line no-unused-vars
  const [createSeller, { isLoading, isError }] = useCreateSellerMutation();

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
    roles: "Seller",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userFields, "UserDataa");
    try {
      const res = await createSeller(userFields);
      console.log(res);
      if (res.data.status === 200) {
        navigate('/admin-panel');
      } else {
        console.log(isError);
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
              <WholeSellerComp1
                title="Step 1"
                userFields={userFields}
                setSteps={setSteps}
                onChange={onChange}
              />
              <WholeSellerComp2
                title="Step 2"
                userFields={userFields}
                setSteps={setSteps}
                onChange={onChange}
              />
              <WholeSellerComp3
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

export default AddWholeSeller;

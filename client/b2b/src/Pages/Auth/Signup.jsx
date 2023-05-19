import MultiStep from "react-multistep";
import Comp1 from "../../Components/signupMultiStepComps/Comp1";
import Comp2 from "../../Components/signupMultiStepComps/Comp2";
import Comp3 from "../../Components/signupMultiStepComps/Comp3";
import Logo from "../../assets/logo.png";
import styles from "../../Components/signupMultiStepComps/multiStepStyles/Comp1.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
function Signup() {
  const prevStyle = () => {
    return {
      background: "blue",
      color: "white",
      fontSize: "16px",
      // additional styles...
    };
  };

  // Example nextStyle function
  const nextStyle = () => {
    return {
      background: "green",
      color: "white",
      fontSize: "16px",
      // additional styles...
    };
  };

  return (
    <>
      <Container className={styles.wrapper}>
        <div className="text-center">
          <img src={Logo} className={styles.logo} />
        </div>

        <Col className={styles.MultiStep}>
          <MultiStep activeStep={0}>
            <Comp1 title="Step 1" />
            <Comp2 title="Step 2" />
            <Comp3 title="Step 2" />
          </MultiStep>
        </Col>
      </Container>
    </>
  );
}

export default Signup;

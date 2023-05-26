import styles from "./ManageDataStyles/ManageGroup.module.css";
import Header from "../../Components/Header";
import LadyPic from "../../assets/my_acc.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Setting = [
  { name: "Member requests", icon: "faHouse" },
  { name: "Automatic member approvals", icon: "faHouse" },
  { name: "Pending posts", icon: "faHouse" },
  { name: "Post topics", icon: "faHouse" },
  { name: "Scheduled posts", icon: "faHouse" },
  { name: "Activity Log", icon: "faHouse" },
  { name: "Group rules", icon: "faHouse" },
  { name: "Member-Reported Content Posts", icon: "faHouse" },
  { name: "Group Settings", icon: "faHouse" },
  { name: "Manage Membership", icon: "faHouse" },
  { name: "Check Group Photos", icon: "faHouse" },
  { name: "Check Group Videos", icon: "faHouse" },
];
function ManageGroup() {
  return (
    <>
      <Header />
      <Row
        className={`${styles.Heading} d-flex justify-content-center align-items-center m-0`}
      >
        <p className="w-auto m-0 text-white">Manage Groups</p>
      </Row>
      <Container className={`${styles.CardContainer} mt-5 pt-2`}>
        <div className={`${styles.mapWrapper}`}>
          <div>
            <img className={styles.imgWrapper} src={LadyPic} />
          </div>
          <div className={`${styles.NewRequestNamePanel} text-center py-3`}>
            <h3>Social Media Marketing</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <h5 className="m-0">London</h5>
              <span></span>
              <h5 className="m-0">{`2054 Members`}</h5>
            </div>
          </div>
          <p className="w-auto">Private Group</p>
        </div>
      </Container>
      <div className={styles.line}></div>
      <Container className={` ${styles.LowerPartContainer} mt-5 pt-2 `}>
        <Link to="/home" className="text-decoration-none">
          <Row className={styles.LowerPartRow}>
            <div
              className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
            >
              <span className={styles.Options}>
                <FontAwesomeIcon
                  className={styles.Optionsicon}
                  icon={faHouse}
                />
              </span>
              <p className={`${styles.OptionName} w-auto m-0`}>Home</p>
            </div>
          </Row>
        </Link>
        <h1 className={styles.LowerPartHeading}>Admin tools</h1>
        {Setting.map((item, index) => (
          <Row key={index + 1} className={`${styles.LowerPartRow} my-4`}>
            <div
              className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
            >
              <span className={styles.Options}>
                <FontAwesomeIcon
                  className={styles.Optionsicon}
                  icon={faHouse}
                />
              </span>
              <p className={`${styles.OptionName} w-auto m-0`}>{item.name}</p>
            </div>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default ManageGroup;

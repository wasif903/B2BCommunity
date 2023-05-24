import styles from "./ManageDataStyles/ManageGroup.module.css";
import Header from "../../Components/Header";
import LadyPic from "../../assets/my_acc.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Setting = [
  { name: "Member requests", icon: "Stopwatch" },
  { name: "Automatic member approvals", icon: "check" },
  { name: "Pending posts", icon: "heart" },
  { name: "Post topics", icon: "star" },
  { name: "Scheduled posts", icon: "user" },
  { name: "Activity Log", icon: "check" },
  { name: "Group rules", icon: "heart" },
  { name: "Member-Reported Content Posts", icon: "star" },
  { name: "Group Settings", icon: "user" },
  { name: "Manage Membership", icon: "check" },
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
        <Row className={styles.LowerPartRow}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faHouse} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Home</p>
          </div>
        </Row>
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

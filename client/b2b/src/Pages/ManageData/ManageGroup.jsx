import styles from "./ManageDataStyles/ManageGroup.module.css";
import Header from "../../Components/Header";
import LadyPic from "../../assets/my_acc.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faCheckDouble,
  faEnvelope,
  faClipboardCheck,
  faCalendarDays,
  faStopwatch,
  faBook,
  faCircleExclamation,
  faGear,
  faBell,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Setting = [
  { name: "Member requests", icon: faUserGroup },
  { name: "Automatic member approvals", icon: faCheckDouble },
  { name: "Pending posts", icon: faEnvelope },
  { name: "Post topics", icon: faClipboardCheck },
  { name: "Scheduled posts", icon: faCalendarDays },
  { name: "Activity Log", icon: faStopwatch },
  { name: "Group rules", icon: faBook },
  {
    name: "Member-Reported Content Posts",
    icon: faCircleExclamation,
  },
  { name: "Group Settings", icon: faGear },
  { name: "Manage Membership", icon: faBell },
  { name: "Check Group Photos", icon: faImage },
  { name: "Check Group Videos", icon: faVideo },
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
                  icon={item.icon}
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

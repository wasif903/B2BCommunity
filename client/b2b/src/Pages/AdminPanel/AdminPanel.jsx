import Header from "../../Components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./adminPanel.module.css";
import image from "../../assets/my_acc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function AdminPanel() {
  const aboutMe = [
    {
      text: "Yogyakarta, ID",
      icon: faLocationDot,
      link: "",
    },
    {
      text: "dribbble.com/fawait",
      icon: faGlobe,
      link: "",
    },
    {
      text: "Joined June 2012",
      icon: faCalendarAlt,
      link: "",
    },
    {
      text: "Working at Sebo Studio",
      icon: faBriefcase,
      link: "",
    },
    {
      text: "In relationship with Gal Gadot",
      icon: faHeart,
      link: "",
    },
  ];

  return (
    <>
      <Header />

      <div className={`${styles.coverPhoto} pb-lg-5`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.editCoverPhoto}>X</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <Col>
            <div
              className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.editProfilePhoto}>X</div>
              <img src={image} className={styles.profilePhoto} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-4">
            <div>
              <h1>James Bond</h1>
              <h4>
                “Pushing pixels and experiences in digital products for
                Sebostudio”
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col md="6">
            <h3>ABOUT</h3>
          </Col>
          <Col md="6">
            <div className="text-end">
              <button>New Group</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <Col>
            <div
              className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.editProfilePhoto}>X</div>
              <img src={image} className={styles.profilePhoto} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-4">
            <div>
              <h1>James Bond</h1>
              <h4>
                “Pushing pixels and experiences in digital products for
                Sebostudio”
              </h4>
            </div>
          </Col>
        </Row>
        <Row
          className="pt-5 pb-4"
          style={{ borderBottom: "2px solid #F1F1F5" }}
        >
          <Col md="6">
            <h3>About Me</h3>
          </Col>
          <Col md="6">
            <div className="text-end">
              <button>
                New Group <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </Col>
        </Row>
        <Row className="py-4">
          <ul>
            {aboutMe.map((item) => (
              <>
                <li className="py-2">
                  <Link
                    className={`${styles.aboutLinks} d-flex align-items-center`}
                    to={item.link}
                  >
                    <FontAwesomeIcon className="pe-3 py-2" icon={item.icon} />
                    {item.text}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </Row>

        <Row className="py-lg-5">
          <Col md="6">
            <div className={styles.manageUsers}>
              <h4 className="pt-2">
                <FontAwesomeIcon
                  className={`${styles.user} pe-3`}
                  icon={faGlobe}
                />
                Manage Users
              </h4>
            </div>
          </Col>
          <Col md="6" className=" d-flex justify-content-end ">
            <div className={`${styles.manageWholeSeller}`}>
              <h4 className="pt-2">
                <FontAwesomeIcon
                  className={`${styles.manager} pe-3`}
                  icon={faCirclePlay}
                />
                Manage Whole Seller
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPanel;

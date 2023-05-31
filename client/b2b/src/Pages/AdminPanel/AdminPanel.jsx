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
import PieChartAdminPanel from "../../Components/Charts/PieChartAdminPanel";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditCoverPhoto from "../../Components/AdminPanelModals/EditCoverPhoto";
import EditProfilePhoto from "../../Components/AdminPanelModals/EditProfilePhoto";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  // Assets Start
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

  const chartData = {
    labels: [
      "UIUX Designers",
      "Social Media",
      "WordPress Developers",
      "Graphic Designers",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [12, 19, 9, 8],
        backgroundColor: ["#1AD598", "#DB3685", "#FFB536", "#895BF1"],
      },
    ],
  };

  const chartOptions = {
    // Add any chart options here
  };
  // Assets End

  const [showEditCoverModal, setShowEditCoverModal] = useState(false);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const toggleEditCoverModal = () => {
    setShowEditCoverModal(!showEditCoverModal);
    console.log(showEditCoverModal);
  };

  const toggleEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };

  return (
    <>
      <Header />

      <div className={`${styles.coverPhoto} pb-lg-5`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.editCoverPhoto}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={toggleEditCoverModal}
                  className={`${styles.editIcon} fa-lg`}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <div
            className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
          >
            <img src={image} className={styles.profilePhoto} alt="" />
          </div>
        </Row>
        <Row>
          <Col className="text-center pt-4">
            <div className={styles.heading}>
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
          <Col
            size="6"
            className="d-flex justify-content-start align-items-center"
          >
            <h3 className={styles.about}>About Me</h3>
          </Col>
          <Col size="6">
            <div className="text-end">
              <button>
                New Group <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </Col>
        </Row>
        <Row className="py-4">
          <Col sm="6" xs='6'>
            <ul>
              {aboutMe.map((item) => (
                <li key={item.text} className="py-2">
                  <Link
                    className={`${styles.aboutLinks} d-flex align-items-center`}
                    to={item.link}
                  >
                    <FontAwesomeIcon className="pe-3 py-2" icon={item.icon} />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm="6" xs='6' className="d-flex justify-content-end align-items-center">
            <div className={styles.chart}>
              <PieChartAdminPanel data={chartData} options={chartOptions} />
            </div>
          </Col>
        </Row>

        <Row className="py-lg-5">
          <Col
            md="6"
            className="py-3 d-md-block d-flex  justify-content-center align-items-center"
          >
            <div
              className={styles.manageUsers}
              onClick={() => navigate("/Manage-User")}
            >
              <h4 className={`${styles.btnName} pt-2`}>
                <FontAwesomeIcon
                  className={`${styles.user} pe-3`}
                  icon={faGlobe}
                />
                Manage Users
              </h4>
            </div>
          </Col>
          <Col
            md="6"
            className="py-3 d-md-flex justify-content-md-end align-items-md-end  d-flex  justify-content-center align-items-center"
          >
            <div
              className={`${styles.manageWholeSeller}`}
              onClick={() => navigate("/Manage-WholeSeller")}
            >
              <h4 className={`${styles.btnName} pt-2`}>
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

      {showEditCoverModal ? (
        <EditCoverPhoto toggleEditCoverModal={toggleEditCoverModal} />
      ) : (
        ""
      )}
      {showEditProfileModal ? (
        <EditProfilePhoto toggleEditProfileModal={toggleEditProfileModal} />
      ) : (
        ""
      )}
    </>
  );
}

export default AdminPanel;

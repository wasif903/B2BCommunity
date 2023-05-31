// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import styles from "./compStyles/sidebar.module.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import userProfile from "../assets/my_acc.png";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setIsOpen }) => {
  const menuItem = [
    {
      path: "/AdminDashboard",
      name: "Dashboard",
      icon: faCommentDots,
    },
    {
      path: "/add-category",
      name: "About",
      icon: faCommentDots,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: faCommentDots,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: faCommentDots,
    },
    {
      path: "/product",
      name: "Product",
      icon: faCommentDots,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: faCommentDots,
    },
  ];

  return (
    <>
      <Container fluid className={setIsOpen ? styles.sidebarWrapper : styles.sidebarWrapperNot }>
        <Row>
          <Col lg="9" className="text-start mt-3 order-md-1 order-2">
            <div
              className="d-inline-flex position-relative"
              style={{ width: "18rem" }}
            >
              <img
                src={userProfile}
                width="70px"
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              />
              <div
                style={{
                  lineHeight: "10px",
                }}
                className="d-flex pt-3 ps-3 justify-content-center flex-column"
              >
                <p className={`${styles.name} text-white`}>David Smith</p>
                <p className={`${styles.Email} text-white`}>
                  davidsmith@gmail.com
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg="3"
            className="order-md-2 order-1 d-flex justify-content-center align-items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className={`${styles.SidebarBtn} mt-4`}
            >
              X
            </button>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row>
          <Col>
            <div className={`${styles.sidebarUl} mt-lg-5`}>
              {menuItem.map((item) => (
                <>
                  <Link
                    className={`text-reset text-decoration-none`}
                    to={item.path}
                  >
                    <div
                      className={`${styles.links} d-flex align-items-center py-3`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`${styles.links} text-reset px-3 fa-lg`}
                      />

                      <div className="h6 text-uppercase pt-1">{item.name}</div>
                    </div>
                  </Link>
                </>
              ))}
            </div>

            <button className="btn-style-2 mt-4 px-4">
              Logout{" "}
              <FontAwesomeIcon className="ps-2" icon={faRightFromBracket} />
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;

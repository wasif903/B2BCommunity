/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./compStyles/sidebar.module.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import userProfile from "../assets/my_acc.png";

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
      <Container fluid className={styles.sidebarWrapper}>
        <Row>
          <Col sm="9" className="text-start mt-3 order-md-1 order-2">
            <div className="d-inline-flex ">
              <img src={userProfile} width="70px" alt="" />
              <div className="d-flex pt-3 justify-content-center flex-column" style={{lineHeight:'10px'}}>
                <p>David Smith</p>
                <p>davidsmith@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col
            sm="3"
            className="order-md-2 order-1 d-flex justify-content-center align-items-center"
          >
            <button onClick={() => setIsOpen(false)} className="mt-2">
              X
            </button>
          </Col>
        </Row>
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

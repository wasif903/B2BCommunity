// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import styles from "./compStyles/sidebar.module.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import userProfile from "../assets/my_acc.png";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setIsOpen }) => {
  const menuItem = [
    {
      path: "/admin-panel",
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

  const navigate = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['cookie']);

  const logout = () => {
    try {
      setCookie('cookie', '', { expires: new Date(0), path: '/' });
      setCookie('userRole', '', { expires: new Date(0), path: '/' });
      setIsOpen(false);
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    
    
  }, [])
  

  const userDetails =JSON.parse(localStorage.getItem('userDetails'));
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user, "-------")

  return (
    <>
      <Container
        fluid
        className={setIsOpen ? styles.sidebarWrapper : styles.sidebarWrapperNot}
      >
        <Row>
          <Col className="order-lg-2 order-1 d-flex justify-content-center align-items-center">
            <button
              onClick={() => setIsOpen(false)}
              className={`${styles.SidebarBtn} mt-4`}
            >
              X
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="text-start mt-3 order-lg-1 order-2">
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
                <p className={`${styles.name} text-white`}>{userDetails.firstName + " " +userDetails .lastName}</p>

                <p className={`${styles.Email} text-white`}>
                  {user.email}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className={styles.line}></div>
        <Row>
          <Col>
            <div className={`${styles.sidebarUl} mt-lg-5`}>
              {menuItem.map((item, i) => (
                <>
                  <Link key={i + 1}
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

            <button onClick={logout} className="btn-style-2 mt-4 px-4">
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

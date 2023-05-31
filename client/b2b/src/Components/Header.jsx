import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./compStyles/header.module.css";
import myAcc from "../assets/my_acc.png";
import Logo from "../assets/logo.png";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navBar}>
        <Container fluid className='"container-lg'>
          <Row>
            <Col sm="6">
              <div
                role="button"
                onClick={() => navigate("/")}
                className="text-sm-start text-center"
              >
                <img src={Logo} width="50px" alt="" />
              </div>
            </Col>

            <Col
              sm="6"
              className="d-flex justify-content-end align-items-center"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="my-3">
                  <div className={`${styles.search_bar}`}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="Search..."
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={styles.search_icon}
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    onClick={() => navigate("/WholeSeller-panel")}
                    role="button"
                    className="pe-lg-4 px-4 d-none d-lg-flex "
                  >
                    <img
                      src={myAcc}
                      width="50px"
                      alt=""
                      style={{ backgroundColor: "white", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="pe-lg-4 px-4">
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="text-white fa-lg"
                    />
                  </div>
                  <div
                    onClick={handleModal}
                    className={`
                  ${styles.bars}
                  ${isOpen ? "d-none" : "d-flex"} 
                   px-3`}
                  >
                    <FontAwesomeIcon icon={faBars} className="text-white fa-lg" />
                  </div>

                  <div className="d-flex d-lg-none pe-lg-4 px-4 ps-sm-0">
                    <img src={myAcc} width="50px" alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sidebar */}
      {isOpen ? <Sidebar setIsOpen={setIsOpen} /> : ""}
    </>
  );
}

export default Header;

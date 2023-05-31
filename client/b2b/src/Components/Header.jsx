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
            <Col md="6">
              <div
                role="button"
                onClick={() => navigate("/")}
                className="text-md-start text-center"
              >
                <img src={Logo} width="50px" alt="" />
              </div>
            </Col>

            <Col
              md="6"
              className="d-flex justify-content-end align-items-center"
            >
              <div className="d-flex justify-md-content-end justify-content-start align-items-center">
                <div className="mx-5">
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

                <div
                  onClick={() => navigate("/WholeSeller-panel")}
                  role="button"
                  className="pe-lg-4 pe-2 d-none d-lg-flex "
                >
                  <img
                    src={myAcc}
                    width="50px"
                    alt=""
                    style={{ backgroundColor: "white", borderRadius: "50%" }}
                  />
                </div>
                <div className="pe-lg-4 pe-2">
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
                  pe-lg-4 ps-2`}
                >
                  <FontAwesomeIcon icon={faBars} className="text-white fa-lg" />
                </div>

                <div className="d-flex d-lg-none pe-lg-4 ps-2 ps-sm-0">
                  <img src={myAcc} width="50px" alt="" />
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

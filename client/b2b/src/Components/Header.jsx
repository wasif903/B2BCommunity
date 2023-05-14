import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./compStyles/header.module.css";
import myAcc from "../assets/my_acc.png";
import Logo from "../assets/logo.png";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect className={styles.navBar} expand="lg">
        <Container fluid className='"container-lg'>
          <Navbar.Brand href="#home">
            <img src={Logo} width="50px" alt="" />
          </Navbar.Brand>
         
            <Nav className="mx-auto text-center">
              <div className={styles.search_bar}>
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
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link className="pe-4 d-none d-lg-flex">
                <img src={myAcc} width="50px" alt="" />
              </Nav.Link>
              <Nav.Link className="pe-4">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-white fa-lg"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} className="pe-4" href="#memes">
                <FontAwesomeIcon icon={faBars} className="text-white fa-lg" />
              </Nav.Link>
            </Nav>
        
          <Nav.Link className="d-flex d-lg-none pe-4">
            <img src={myAcc} width="50px" alt="" />
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

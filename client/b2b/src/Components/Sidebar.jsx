/* eslint-disable react/prop-types */
import styles from "./compStyles/sidebar.module.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Sidebar = ({ setIsOpen }) => {
  return (
    <>
      <Container className={styles.sidebarWrapper}>
        <Row>
          <Col>
            <button onClick={() => setIsOpen(false)} className="mt-2">
              X
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sidebar;

import React from "react";
import { DummyUserData } from "./ManageDataAssets/ManageUserData.json";
import styles from "./ManageDataStyles/ManageWholesellers.module.css";
import userPic from "../../assets/UserPic.jpeg";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../../utils/SwiperBreakPoints";

const Name = [
  "UIUX Designers",
  "WordPress Developers",
  "Social Media Marketing",
  "Web Developer",
  "Software Developer",
  "Graphic Designer",
  "Youtuber",
];

function ManageUser() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className="w-2">Manage Wholesellers</p>
        </div>
        <form className={styles.wrapperForm}>
          <div>
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
            <input type="text" placeholder="Search here..." />
          </div>
          <button>+ WholeSellers</button>
        </form>
        <div className={styles.sliders}>
          <Swiper spaceBetween={15} slidesPerView={2} breakpoints={breakpoints}>
            {Name.map((item, index) => (
              <SwiperSlide className="d-inline-flex justify-content-center align-items-center py-2">
                <a key={index} href="#">
                  {item}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Container className={styles.displayUsers}>
          <Row className={styles.displayUsersRow}>
            {DummyUserData.map((item) => (
              <Col lg="3" md="6" sm="6">
                <div className={`${styles.mapWrapper}`}>
                  <div>
                    <img className={styles.imgWrapper} src={userPic} alt="" />
                  </div>
                  <span
                    className={`${styles.NewRequestNamePanel} text-center py-3`}
                  >
                    <p>{item.name}</p>
                    <code>{item.code}</code>
                  </span>
                  <div className={styles.userDataBtnWrapper}>
                    <div>
                      <button className={`my-2 ${styles.buttons}`}>
                        REMOVE
                      </button>
                      <button className={`my-2 ${styles.buttons}`}>
                        BLOCK
                      </button>
                    </div>
                    <button className={styles.assignBtn}>
                      Assign to other group
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ManageUser;

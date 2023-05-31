import { DummyUserData } from "./ManageDataAssets/ManageUserData.json";
import styles from "./ManageDataStyles/ManageUser.module.css";
import userPic from "../../assets/UserPic.jpeg";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>Manage Users</p>
        </div>
        <form action="">
          <input type="text" placeholder="Search here..." />
          <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
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
          <Row>
            {DummyUserData.map((item) => (
              <Col lg="3" md="4" sm="6">
                <div
                  className={`${styles.mapWrapper}`}
                  onClick={() => navigate("/All-Group")}
                >
                  <div>
                    <img className={styles.imgWrapper} src={userPic} />
                  </div>
                  <div
                    className={`${styles.NewRequestNamePanel} text-center py-3`}
                  >
                    <p>{item.name}</p>
                    <code>{item.code}</code>
                  </div>
                  <div>
                    <button
                      className={`my-2 ${styles.buttons}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      REMOVE
                    </button>
                    <button
                      className={`my-2 ${styles.buttons}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      BLOCK
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

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import CardImage from "../assets/home/suggested_group.jpg";
import { Link, useNavigate } from "react-router-dom";
import styles from "./compStyles/suggestedGroup.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../utils/SwiperBreakPoints";

function SuggestedGroups() {
  const cardData = [
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
    {
      title: "Web Development",
      exercept:
        " Some quick example text to build on the card title and make up the bulk of the content.",
      link: "/Group-Content",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Container fluid className="py-5 px-lg-5">
        <Row className="py-3">
          <Col>
            <div className={styles.heading}>
              <h2 className="display-6">SUGGESTED GROUPS</h2>
              <p>Groups you might be interested in.</p>
            </div>
          </Col>
          <Col className="text-end d-flex justify-content-end  align-items-center">
            <button onClick={() => navigate("/All-Group")}>SEE ALL</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              breakpoints={breakpoints}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {cardData.map((card) => (
                <>
                  <SwiperSlide className="d-inline-flex justify-content-center align-items-center">
                    <Card
                      className={`${styles.suggested_group_cards}`}
                      style={{ width: "25rem", cursor: "pointer" }}
                    >
                      <Card.Img
                        className={styles.cardImg}
                        variant="top"
                        src={CardImage}
                      />
                      <Card.Body className="text-center">
                        <Card.Title className={styles.cardTitle}>
                          {card.title}
                        </Card.Title>
                        <Card.Text className={styles.cardTxt}>
                          {card.exercept}
                        </Card.Text>
                        <Link to={card.link}>
                          <button>Go somewhere</button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SuggestedGroups;

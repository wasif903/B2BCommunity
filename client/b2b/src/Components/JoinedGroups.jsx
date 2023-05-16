import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Card from 'react-bootstrap/Card';
import CardImage from '../assets/home/suggested_group.jpg'
import { Link } from "react-router-dom";
import styles from './compStyles/suggestedGroup.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import breakpoints from "../utils/SwiperBreakPoints";

function JoinedGroups() {

    

    const cardData = [
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
        {
            title: 'Web Development',
            exercept: " Some quick example text to build on the card title and make up the bulk of the content.",
            link: "web-development"
        },
    ]


    return (
        <>
            <Container fluid className="py-5 px-lg-5">

                <Row className="py-3">
                    <Col>
                        <div>
                            <h2 className="display-6">
                                JOINED GROUPS
                            </h2>
                        </div>
                    </Col>
                    <Col className="text-end d-flex justify-content-end  align-items-center">
                        <button>
                            SEE ALL
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col >

                        <Swiper
                            spaceBetween={10}
                            breakpoints={breakpoints}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >


                            {
                                cardData.map((card) => (
                                    <>
                                        <SwiperSlide className="d-inline-flex justify-content-center align-items-center">
                                            <Card className={`${styles.suggested_group_cards}`} style={{ width: '25rem' }}>
                                                <Card.Img className={styles.cardImg} variant="top" src={CardImage} />
                                                <Card.Body className="text-center">
                                                    <Card.Title>{card.title}</Card.Title>
                                                    <Card.Text>
                                                        {card.exercept}
                                                    </Card.Text>
                                                    <Link to={card.link}>
                                                        <button>
                                                            Go somewhere
                                                        </button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </>
                                ))
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default JoinedGroups
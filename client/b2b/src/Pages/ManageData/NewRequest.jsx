import styles from "./ManageDataStyles/NewRequest.module.css";
import userPic from "../../assets/UserPic.jpeg";
import Header from "../../Components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../../utils/SwiperBreakPoints";
import { useAcceptReqMutation, useGetPendingReqQuery, useRejectReqMutation } from "../../REDUX/Reducers/groups/GroupSlice";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function NewRequest() {


  const categoryOptions = [
    {
      category: "UI/UX Designer",
      value: "uiux",
    },
    {
      category: "WordPress Designer",
      value: "wordpress",
    },
    {
      category: "Social Media Marketing",
      value: "marketing",
    },
    {
      category: "Pay Per Click",
      value: "ppc",
    },
    {
      category: "Netflix Series ",
      value: "entertainment",
    },
    {
      category: "Song Suggestions",
      value: "songs",
    },
    {
      category: "Graphic Desgining",
      value: "designing",
    },
  ];

  const { id } = useParams();

  const getPendingReq = useGetPendingReqQuery(id);

  const [rejectReq, { isLoading, isError }] = useRejectReqMutation();
  const [acceptReq] = useAcceptReqMutation();

  // Request Rejection Handler
  const reqRejectHandler = async (userid) => {
    try {
      const res = await rejectReq({ groupdID:id, userid });
      console.log(res, userid);
    } catch (error) {
      console.log(error);
    }
  }

  const acceptReqHandler = async (userid) => {
    try {
      const res = await acceptReq({ groupdID:id, userid });
      console.log(res, userid);
    } catch (error) {
      console.log(error);
    }
  }


  const [cookie, setCookie] = useCookies(['userRole']);

  console.log(cookie.userRole);

  return (
    <>
      <Header />
      <div className={styles.heading}>
        <p className="w-2">New Request</p>
      </div>
      <Container>
        <Row className="pt-5">
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            breakpoints={breakpoints}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div>
              {categoryOptions.map((item, index) => (
                <SwiperSlide key={index} className="d-inline-flex justify-content-center align-items-center py-2">
                  <button className={styles.catListBtn} key={index + 1}>
                    {item.category}
                  </button>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center py-5">
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
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {getPendingReq.data ? getPendingReq?.data?.map((item, index) => (
            <Col key={index} lg="3" md="6" sm="6">
              <div className={`${styles.mapWrapper}`} key={index + 1}>
                <div>
                  <img
                    className={styles.imgWrapper}
                    src={userPic}
                    key={index + 1}
                    alt={index + 1}
                  />
                </div>
                <div
                  className={`${styles.NewRequestNamePanel} text-center py-3`}
                >
                  <h2>{item.firstName}</h2>
                  <p className="fw-bold py-0 my-0">City: {item.city}</p>
                  <p className="fw-bold py-0 my-0">Country: {item.country}</p>
                  <p className="fw-bold py-0 my-0">Status: {item.invitation}</p>
                </div>

                <div style={{ width: "8rem" }}>
                  <button onClick={() => acceptReqHandler(item.userid)}  className={`my-2 ${styles.buttons}`}>ACCEPT</button>
                  <button onClick={() => reqRejectHandler(item.userid)} className={`my-2 ${styles.buttons}`}>REJECT</button>
                </div>

              </div>
            </Col>
          ))
            :
            <div className="text-center">
              <h1>No Requests Yet</h1>
            </div>
          }
        </Row>
      </Container>
    </>
  );
}

export default NewRequest;

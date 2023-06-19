import { useState } from "react";
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
import {
  useAssignedSellersQuery,
  useRemoveUserMutation,
  useUnAssignedSellersQuery,
} from "../../REDUX/Reducers/groups/GroupSlice";
import AssignModal from "../../Components/WholeSellerModal/AssignModal";
import UnassignModal from "../../Components/WholeSellerModal/UnassignModal";

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
  const [isAssignOpen, setisAssignOpen] = useState(false);
  const [isUnassignOpen, setisUnassignOpen] = useState(false);

  // const AssignmodalHandler = function () {
  //   setisAssignOpen(!isAssignOpen);
  // };

  const [sellerData, setSellerData] = useState({});

  const UnassignmodalHandler = function (item) {
    setisUnassignOpen(!isUnassignOpen);
    setSellerData(item);
    console.log(sellerData, "seller data here");
  };

  const modalHandler = function (item) {
    setisAssignOpen(!isAssignOpen);
    setSellerData(item);
    console.log(sellerData, "seller data here");
  };

  const unAssignedSellers = useUnAssignedSellersQuery();

  const assignedSellers = useAssignedSellersQuery();

  console.log(unAssignedSellers.data);

  const [removeSeller] = useRemoveUserMutation();

  const removeSellerHandler = async (id) => {
    try {
      const res = await removeSeller(id);
      console.log(id, res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
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
            <Swiper
              spaceBetween={15}
              slidesPerView={2}
              breakpoints={breakpoints}
            >
              {Name.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="d-inline-flex justify-content-center align-items-center py-2"
                >
                  <a key={index} href="#">
                    {item}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Container className={styles.displayUsers}>
            <h1 className={`pb-5 ${styles.assignHeading}`}>Unassign WholeSellers</h1>
            <Row className={styles.displayUsersRow}>
              {unAssignedSellers?.data?.map((item) => (
                <Col key={item._id} lg="3" md="6" sm="6">
                  <div className={`${styles.mapWrapper}`}>
                    <div>
                      <img className={styles.imgWrapper} src={userPic} alt="" />
                    </div>
                    <span
                      className={`${styles.NewRequestNamePanel} text-center py-3`}
                    >
                      <h3>{item.firstName}</h3>
                      {/* <p>Country : {item.sellerDetails.country}</p>
                      <p>City : {item.sellerDetails.city}</p> */}
                    </span>
                    <div className={styles.userDataBtnWrapper}>
                      <div>
                        <button
                          onClick={() => removeSellerHandler(item._id)}
                          className={`my-2 ${styles.buttons}`}
                        >
                          REMOVE
                        </button>
                        <button className={`my-2 ${styles.buttons}`}>
                          DETAILS
                        </button>
                      </div>
                      <button
                        onClick={() => modalHandler(item)}
                        className={styles.assignBtn}
                      >
                        Assign to Seller
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Container className={`${styles.displayUsers} mt-5 pt-5`}>
            <h1 className={`pb-5 ${styles.unassignHeading}`}>Already Assigned WholeSellers</h1>
            <Row className={styles.displayUsersRow}>
              {assignedSellers?.data?.map((item) => (
                <Col key={item._id} lg="3" md="6" sm="6">
                  <div className={`${styles.mapWrapper}`}>
                    <div>
                      <img className={styles.imgWrapper} src={userPic} alt="" />
                    </div>
                    <span
                      className={`${styles.NewRequestNamePanel} text-center py-3`}
                    >
                      <h3>{item.firstName}</h3>
                      {/* <p>Country : {item.country}</p> */}
                      {/* <p>City : {item.sellerDetails.city}</p> */}
                    </span>
                    <div className={styles.userDataBtnWrapper}>
                      <div>
                        <button
                          onClick={() => removeSellerHandler(item._id)}
                          className={`my-2 ${styles.buttons}`}
                        >
                          REMOVE
                        </button>
                        <button className={`my-2 ${styles.buttons}`}>
                          DETAILS
                        </button>
                      </div>
                      <button
                        className={styles.assignBtn}
                        onClick={() => UnassignmodalHandler(item)}
                      >
                        unassign to Group
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      {isUnassignOpen ? (
        <UnassignModal
          UnassignmodalHandler={UnassignmodalHandler}
          sellerData={sellerData}
        />
      ) : (
        ""
      )}

      {isAssignOpen ? (
        <AssignModal modalHandler={modalHandler} sellerData={sellerData} />
      ) : (
        ""
      )}
    </>
  );
}

export default ManageUser;

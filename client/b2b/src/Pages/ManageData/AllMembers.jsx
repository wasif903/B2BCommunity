import styles from "./ManageDataStyles/ManageUser.module.css";
import userPic from "../../assets/UserPic.jpeg";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../../utils/SwiperBreakPoints";
import { useGetAllMembersQuery, useRemoveMemberMutation } from "../../REDUX/Reducers/groups/GroupSlice";
import { useParams } from "react-router-dom";

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

  const { id } = useParams();

  const getAllMembers = useGetAllMembersQuery(id);

  const [removeMember] = useRemoveMemberMutation();

  console.log(getAllMembers);
  

  const removeMemberHandler = async (userid) => {
    try {
      const res = await removeMember({ groupID:id , userid });
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>All Members</p>
        </div>
        <form action="">
          <input type="text" placeholder="Search here..." />
          <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
        </form>
        <div className={styles.sliders}>
          <Swiper spaceBetween={15} slidesPerView={2} breakpoints={breakpoints}>
            {Name.map((item, index) => (
              <SwiperSlide key={index} className="d-inline-flex justify-content-center align-items-center py-2">
                <a key={index} href="#">
                  {item}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Container className={styles.displayUsers}>
          <Row>
            {getAllMembers?.data?.map((item, index) => (
              <Col key={index} lg="3" md="6" sm="6">
                <div className={`${styles.mapWrapper}`}>
                  <div>
                    <img className={styles.imgWrapper} src={userPic} />
                  </div>
                  <div
                    className={`${styles.NewRequestNamePanel} text-center py-3`}
                  >
                    <h2>{item.firstName}</h2>
                    <p className="h6 py-2 my-0">City: {item.city}</p>
                    <p className="h6 py-2 my-0">Country: {item.country}</p>
                  </div>
                  <div>
                    <button className={`my-2 ${styles.buttons}`}>DETAILS</button>
                    <button onClick={() => removeMemberHandler(item.userid)} className={`my-2 ${styles.buttons}`}>REMOVE</button>
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

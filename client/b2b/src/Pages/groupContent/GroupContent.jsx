import React from "react";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./GroupContent.module.css";
import image from "../../assets/my_acc.png";
import { useState } from "react";
import WholeSellerimg from "../../assets/wholeSellerAssets/WholesellerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import EditCoverPhoto from "../../Components/AdminPanelModals/EditCoverPhoto";
import { peopleData } from "../ManageData/ManageDataAssets/ManageUserData.json";
import { FeaturedData } from "../ManageData/ManageDataAssets/ManageUserData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageGallery from "react-image-gallery";
// import breakpoints from "../../utils/SwiperBreakPoints";
import { useGetSingleGroupQuery } from "../../REDUX/Reducers/groups/GroupSlice";
import { useParams } from "react-router-dom";
import Comments from "../../Components/Comment/Comments";
import coverPhoto from "../../assets/home/suggested_group2.jpg";
import {
  useCreatePostMutation,
  useGetPostQuery,
} from "../../REDUX/Reducers/posts/posts";
import { useCommentMutation } from "../../REDUX/Reducers/comments/Comments";

function GroupContent() {
  // useState for Edite Cover Photo
  const [showEditCoverModal, setShowEditCoverModal] = useState(false);
  const [ShowCommentsModal, setShowCommentsModal] = useState(false);

  function CommentModal() {
    setShowCommentsModal(!ShowCommentsModal);
  }
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  const singleGroup = useGetSingleGroupQuery(id);
  const data = singleGroup.data;
  console.log(singleGroup, " Single Group Data Here");

  const gi = JSON.parse(localStorage.getItem("gi"));
  const getPost = useGetPostQuery(gi);
  console.log(getPost, "posts");

  const [comment] = useCommentMutation();

  const [commentContent, setCommentContent] = useState("");

  const commentOnChange = (e) => {
    setCommentContent(e.target.value);
  };

  const commentPoster = async (postID) => {
    console.log(postID);
    console.log(id, "gorup id");
    if (commentContent.content !== "") {
      try {
        const res = await comment({
          post: postID,
          content: commentContent,
          author: user._id,
          groupID: id,
        });

        setCommentContent("");
        console.log(res.data, "Comment Posted");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Write Some Comment");
    }
  };

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  // Funtion for Edite Cover Photo
  const toggleEditCoverModal = () => {
    setShowEditCoverModal(!showEditCoverModal);
  };

  return (
    <>
      <Header />

      {/************ CoverPhoto And Heading ************/}

      <div className={`${styles.coverPhoto} pb-lg-5`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.editCoverPhoto}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={toggleEditCoverModal}
                  className={`${styles.editIcon} fa-lg`}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={data?.groupcover ? data?.groupcover : coverPhoto}
          alt=""
          className={styles.coverPhoto}
        />
      </div>
      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <Col>
            <div
              className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
            >
              <img
                src={data?.groupdp ? data?.groupdp : image}
                className={styles.profilePhoto}
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.WholeSellerText} text-center pt-4 `}>
            <div>
              <h1>{data?.groupName ? data?.groupName : "State Manager"}</h1>
              <h4>
                {data?.groupDesc
                  ? data?.groupDesc
                  : `“Pushing pixels and experiences in digital”`}
              </h4>
            </div>
          </Col>
        </Row>

        {/**************** Featured Panel *************/}

        <div className={`${styles.featuredPanel} mt-5`}>
          <Col>
            <div className="d-flex justify-content-start align-items-center gap-2">
              <h5 className="m-0">FEATURED</h5>
              <FontAwesomeIcon
                icon={faInfo}
                onClick={toggleEditCoverModal}
                className={`${styles.infoIcon} fa-lg`}
              />
            </div>
            <div
              className={`${styles.featuredPhotoRow} d-flex justify-content-center align-items-center gap-4 mt-2 mb-3`}
            >
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {FeaturedData.map((item, index) => (
                  <React.Fragment key={index}>
                    <SwiperSlide
                      key={index}
                      className={styles.featuredMapWrapper}
                    >
                      <div className={styles.featuredMapDiv}>
                        <img
                          className={styles.postingAreaimg}
                          src={item.imageURL}
                          alt="userImg"
                        />
                        <span>
                          <h2 className={styles.FeaturedHeadingText}>
                            {item.passion}
                          </h2>
                          <div className={`${styles.featuredNameDiv} d-flex`}>
                            <p>{item.name}</p>
                            <p className="px-2">Admin</p>
                          </div>
                        </span>
                      </div>
                      <div className={`${styles.featuredTextArea} mt-3`}>
                        <p>{item.description}</p>
                      </div>
                      <img
                        className={styles.featuredPhoto}
                        src={item.imageURL}
                        alt="userImg"
                      />
                    </SwiperSlide>
                  </React.Fragment>
                ))}
              </Swiper>
            </div>
          </Col>
        </div>

        {/* WholeSeller Panel posting and comment Area */}

        {getPost?.data?.data?.map((item, index) => (
          <React.Fragment key={index}>
            <Col className="mt-5">
              <div
                className={`${styles.PostCommentWrapper} d-flex flex-column`}
              >
                <Row>
                  <div
                    className={`${styles.postingAreaHeading} d-flex position-relative align-items-center mb-3`}
                  >
                    <img
                      className={styles.postingAreaimg}
                      src={item?.imageURL ? item?.imageURL : `${image}`}
                      alt="userImg"
                    />

                    <section
                      className={`${styles.postingHeadingTextArea} mx-2`}
                    >
                      <h2 className={styles.postingHeadingText}>
                        {item?.passion}
                      </h2>
                      <div className="d-flex">
                        <p>{item?.name}</p>
                        <p className="px-2">Admin</p>
                      </div>
                    </section>
                    <div className={styles.postingAreaThreeDots}>
                      <FontAwesomeIcon
                        className={styles.faEllipsis}
                        icon={faEllipsis}
                      />
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className={`${styles.AddpostArea} mt-1`}>
                    <p className="px-5">
                      {item?.description ? item?.description : ""}
                    </p>
                  </div>

                  {/* <div className={`${styles.AddpostArea} mt-1`}>
                        <p className="px-5">{langTranslator}</p>
                      </div>
                   */}
                </Row>

                {/******* Comment input field *****/}

                <section
                  className={`${styles.CommentField} d-flex flex-column mt-2 mb-3 position-relative`}
                >
                  <button
                    className={`${styles.ViewComment} bg-white`}
                    onClick={CommentModal}
                  >
                    View all comments
                  </button>
                  <div
                    className={`${styles.CommentBox} d-flex align-center w-100`}
                  >
                    <img
                      className={styles.postingAreaimg}
                      src={item?.imageURL ? item?.imageURL : `${image}`}
                      alt="userImg"
                    />

                    <div
                      className={`${styles.ViewcommentInputField} d-flex align-items-center mt-1`}
                    >
                      <input
                        type="text"
                        placeholder="Write your comment…"
                        name="content"
                        value={commentContent}
                        onChange={commentOnChange}
                      />
                      <button
                        onClick={() => commentPoster(item._id)}
                        className={styles.ViewcommentInputFieldBTN}
                      >
                        POST
                      </button>
                      <span className="d-flex justify-content-evenly align-items-center w-25">
                        <FontAwesomeIcon
                          className={`${styles.FaceSmile}`}
                          icon={faFaceSmile}
                        />
                        <FontAwesomeIcon
                          className={`${styles.Paperclip}`}
                          icon={faPaperclip}
                        />
                      </span>
                    </div>
                  </div>
                </section>
                {/* Comments */}
                {ShowCommentsModal ? <Comments comments={item.comments} /> : ""}
              </div>
            </Col>
          </React.Fragment>
        ))}

        <Col className="my-5">
          <div className={`${styles.PostCommentWrapper} d-flex flex-column`}>
            <Row>
              <div
                className={`${styles.postingAreaHeading} d-flex position-relative align-items-center mb-3`}
              >
                <img
                  className={styles.postingAreaimg}
                  src={peopleData[0].imageURL}
                  alt="userImg"
                />

                <section className={`${styles.postingHeadingTextArea} mx-2 `}>
                  <h2 className={styles.postingHeadingText}>
                    {peopleData[0].passion}
                  </h2>
                  <div className="d-flex">
                    <p>{peopleData[0].name}</p>
                    <p className="px-2">Admin</p>
                  </div>
                </section>
                <div className={styles.postingAreaThreeDots}>
                  <FontAwesomeIcon
                    className={styles.faEllipsis}
                    icon={faEllipsis}
                  />
                </div>
              </div>
            </Row>
            <Row>
              <div className={`${styles.AddpostArea} mt-1`}>
                <p className="px-5">{data?.posts ? data?.posts : ""}</p>
              </div>
            </Row>

            {/******* Posting Photos *****/}
            <section
              className={`d-flex justify-content-center align-items-center  ${styles.PostingPhotos}`}
            >
              <ImageGallery items={images} sizes={1} />
            </section>

            {/******* Comment input field *****/}

            <section
              className={`${styles.CommentField} d-flex flex-column mt-2 mb-3 position-relative`}
            >
              <button className={`${styles.ViewComment} bg-white`}>
                View all comments
              </button>
              <div className={`${styles.CommentBox} d-flex align-center w-100`}>
                <img
                  className={styles.postingAreaimg}
                  src={WholeSellerimg}
                  alt="userImg"
                />

                <div
                  className={`${styles.ViewcommentInputField} d-flex align-items-center mt-1`}
                >
                  <input type="text" placeholder="Write your comment…" />
                  <span className="d-flex justify-content-evenly align-items-center w-25">
                    <FontAwesomeIcon
                      className={`${styles.FaceSmile}`}
                      icon={faFaceSmile}
                    />
                    <FontAwesomeIcon
                      className={`${styles.Paperclip}`}
                      icon={faPaperclip}
                    />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </Col>
      </Container>

      {/* Display Edite Cover Photo */}

      {showEditCoverModal ? (
        <EditCoverPhoto toggleEditCoverModal={toggleEditCoverModal} />
      ) : (
        ""
      )}
    </>
  );
}

export default GroupContent;

import React from "react";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./WholeSellerPanel.module.css";
import image from "../../assets/my_acc.png";
import { useState } from "react";
import Livepng from "../../assets/wholeSellerAssets/live.png";
import Photopng from "../../assets/wholeSellerAssets/Photo.png";
import videoMaker from "../../assets/wholeSellerAssets/videoMaker.png";
import WholeSellerimg from "../../assets/wholeSellerAssets/WholesellerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faSignal5 } from "@fortawesome/free-solid-svg-icons";
import EditCoverPhoto from "../../Components/AdminPanelModals/EditCoverPhoto";
import { peopleData } from "../ManageData/ManageDataAssets/ManageUserData.json";

// Data of sliders items
const Data = [
  {
    name: "Post",
    value: "10,3K",
  },
  {
    name: "Followers",
    value: "2,315",
  },
  {
    name: "Following",
    value: "3,012",
  },
  {
    name: "Likes",
    value: "12,531",
  },
];

function WholeSellerPanel() {
  // useState for Edite Cover Photo
  const [showEditCoverModal, setShowEditCoverModal] = useState(false);

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
      </div>
      <Container className={`${styles.profilePhotoWithDetails} px-lg-5`}>
        <Row>
          <Col>
            <div
              className={`${styles.profileWrapper} d-flex justify-content-center align-items-center`}
            >
              <img src={image} className={styles.profilePhoto} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.WholeSellerText} text-center pt-4 `}>
            <div>
              <h1>UIUX Designers</h1>
              <h4>“Pushing pixels and experiences in digital”</h4>
            </div>
          </Col>
        </Row>

        {/**************** Sliders of WholeSeller Panel *************/}

        <Row className="mt-5 pt-5 gap-10 overflow-hidden">
          {Data.map((item) => (
            <Col key={item.name} className="d-flex justify-content-center">
              <div className={styles.posts}>
                <p className={styles.postName}>{item.name}</p>
                <span className={styles.postValue}>{item.value}</span>
                <div className={styles.underLine}></div>
              </div>
            </Col>
          ))}
        </Row>

        {/************ WholeSellerInputArea ************/}

        <div className={styles.WholeSellerInputArea}>
          <section className="d-flex align-items-center h-50">
            <img
              className={styles.WholeSellerInputimg}
              src={WholeSellerimg}
              alt="userImg"
            />
            <input
              className={styles.wholeSellerInputField}
              type="text"
              placeholder="Write something..."
            />
          </section>
          <section
            className={`${styles.WholeSellerLineWrapper} h-1 w-100 d-flex justify-content-center align-items-center position-relative`}
          >
            <span className={styles.WholeSellerLine}></span>
          </section>
          <section className={styles.WholeSellerLowerSection}>
            <div>
              <img className={styles.WholeSellerimg} src={Photopng} alt="" />
              <p>Photo</p>
            </div>
            <div>
              <img className={styles.WholeSellerimg} src={videoMaker} alt="" />
              <p>Video</p>
            </div>
            <div>
              <img className={styles.WholeSellerimg} src={Livepng} alt="" />
              <p>Live</p>
            </div>
          </section>
        </div>

        {/************ TotalMembers ************/}

        <div className={styles.TotalMembers}>
          <div></div>
          <p>Total Members</p>
          <code>23.4K</code>
          <section className={styles.TotalMembersCircleSection}>
            <FontAwesomeIcon className={styles.faEllipsis} icon={faEllipsis} />
          </section>
        </div>

        {/************ Manage Buttons ************/}

        <Row className="pt-lg-5 pb-lg-3">
          <Col
            md="6"
            className="py-3 d-md-block d-flex  justify-content-center align-items-center"
          >
            <div className={styles.manageUsers}>
              <h4 className="pt-2">
                <FontAwesomeIcon
                  className={`${styles.user} pe-3`}
                  icon={faGlobe}
                />
                Manage Users
              </h4>
            </div>
          </Col>
          <Col
            md="6"
            className="py-3 d-md-flex justify-content-md-end align-items-md-end  d-flex  justify-content-center align-items-center"
          >
            <div className={`${styles.manageWholeSeller}`}>
              <h4 className="pt-2">
                <FontAwesomeIcon
                  className={`${styles.manager} pe-3`}
                  icon={faCirclePlay}
                />
                Manage Whole Seller
              </h4>
            </div>
          </Col>
        </Row>

        {/* WholeSeller Panel posting and comment Area */}
        {peopleData.map((item) => (
          <Col className="mt-5">
            <div className={`${styles.PostCommentWrapper} d-flex flex-column`}>
              <Row>
                <div
                  className={`${styles.postingAreaHeading} d-flex position-relative align-items-center mb-3`}
                >
                  <span
                    className={`${styles.postingAreaHeadingCircle} position-relative`}
                  >
                    <img
                      className={styles.postingAreaimg}
                      src={WholeSellerimg}
                      alt="userImg"
                    />
                  </span>
                  <section className={`${styles.postingHeadingTextArea} mx-2`}>
                    <h2 className={styles.postingHeadingText}>
                      {item.passion}
                    </h2>
                    <div className="d-flex">
                      <p>{item.name}</p>
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
                  <p className="px-5">{item.description}</p>
                </div>
              </Row>

              {/******* Comment input field *****/}

              <section
                className={`${styles.CommentField} d-flex flex-column mt-2 mb-3 position-relative`}
              >
                <button className={`${styles.ViewComment} bg-white`}>
                  View all comments
                </button>
                <div className={`${styles.CommentBox} d-flex align-center`}>
                  <span
                    className={`${styles.postingAreaHeadingCircle} position-relative mt-1`}
                  >
                    <img
                      className={styles.postingAreaimg}
                      src={WholeSellerimg}
                      alt="userImg"
                    />
                  </span>
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
        ))}

        <Col className="mt-5">
          <div className={`${styles.PostCommentWrapper} d-flex flex-column`}>
            <Row>
              <div
                className={`${styles.postingAreaHeading} d-flex position-relative align-items-center mb-3`}
              >
                <span
                  className={`${styles.postingAreaHeadingCircle} position-relative`}
                >
                  <img
                    className={styles.postingAreaimg}
                    src={WholeSellerimg}
                    alt="userImg"
                  />
                </span>
                <section className={`${styles.postingHeadingTextArea} mx-2 `}>
                  <h2 className={styles.postingHeadingText}>UIUX Designers</h2>
                  <div className="d-flex">
                    <p>Tom Hawkins</p>
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
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                </p>
              </div>
            </Row>

            {/******* Posting Photos *****/}
            <section className={`${styles.PostingPhotos}`}>
              <img
                className={styles.PhotoThree}
                src={WholeSellerimg}
                alt="userImg"
              />
              <span className="">
                <img
                  className={styles.PhotoOne}
                  src={WholeSellerimg}
                  alt="userImg"
                />

                <img
                  className={styles.PhotoTwo}
                  src={WholeSellerimg}
                  alt="userImg"
                />
              </span>
            </section>

            {/******* Comment input field *****/}

            <section
              className={`${styles.CommentField} d-flex flex-column mt-2 mb-3 position-relative`}
            >
              <button className={`${styles.ViewComment} bg-white`}>
                View all comments
              </button>
              <div className={`${styles.CommentBox} d-flex align-center`}>
                <span
                  className={`${styles.postingAreaHeadingCircle} position-relative mt-1`}
                >
                  <img
                    className={styles.postingAreaimg}
                    src={WholeSellerimg}
                    alt="userImg"
                  />
                </span>
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

export default WholeSellerPanel;

import React from "react";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./GroupContent.module.css";
import image from "../../assets/my_acc.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import EditCoverPhoto from "../../Components/AdminPanelModals/EditCoverPhoto";

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

        {/* <Row className="mt-5 pt-5 gap-10 overflow-hidden">
          {Data.map(displayItems)}
        </Row> */}

        {/************ WholeSellerInputArea ************/}

        {/* <div className={styles.WholeSellerInputArea}>
          <Col className="h-100 position-relative">
            <Row className="position-relative">
              <Col className="position-absolute mt-2">
                <img
                  className={styles.WholeSellerInputimg}
                  src={WholeSellerimg}
                  alt="userImg"
                />
              </Col>
              <Col className="position-relative mt-2">
                <input
                  className={styles.wholeSellerInputField}
                  type="text"
                  placeholder="Write something..."
                />
              </Col>
            </Row>
            <Row>
              <div className={styles.WholeSellerLine}></div>
            </Row>
            <div className={styles.WholeSellerLowerSection}>
              <div>
                <img className={styles.WholeSellerimg} src={Photopng} alt="" />
                <p>Photo</p>
              </div>
              <div>
                <img
                  className={styles.WholeSellerimg}
                  src={videoMaker}
                  alt=""
                />
                <p>Video</p>
              </div>
              <div>
                <img className={styles.WholeSellerimg} src={Livepng} alt="" />
                <p>Live</p>
              </div>
            </div>
          </Col>
        </div> */}

        {/************ TotalMembers ************/}

        {/* <div className={styles.TotalMembers}>
          <div></div>
          <p>Total Members</p>
          <code>23.4K</code>
          <section className={styles.TotalMembersCircleSection}>
            <span></span>
            <span className="ms-4"></span>
            <span className="ms-5"></span>
          </section>
        </div> */}

        {/************ Manage Buttons ************/}

        {/* <Row className="py-lg-5">
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
        </Row> */}

        {/* WholeSeller Panel posting and comment Area */}

        <Col>
          <div className=" d-flex flex-column mt-4">
            <Row>
              <div
                className={`${styles.postingAreaHeading} d-flex position-relative`}
              >
                <span
                  className={`${styles.postingAreaHeadingCircle}  mt-2`}
                ></span>
                <section className={`${styles.postingHeadingTextArea} mx-2`}>
                  <h2 className={styles.postingHeadingText}>UIUX Designers</h2>
                  <div className="d-flex">
                    <p className="mb-0 mx-1">Tom Hawkins</p>
                    <p className="px-1 mt-1">Admin</p>
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
                <p className="px-4">
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                </p>
              </div>
            </Row>

            {/******* Comment input field *****/}

            <section className="d-flex flex-column mt-5 mb-5">
              <button className={`${styles.ViewComment} bg-white`}>
                View all comments
              </button>
              <div className="d-flex align-center">
                <div
                  className={`${styles.postingAreaHeadingCircle} mt-1`}
                ></div>
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

        <Col>
          <div className=" d-flex flex-column mt-4">
            <Row>
              <div
                className={`${styles.postingAreaHeading} d-flex position-relative`}
              >
                <span
                  className={`${styles.postingAreaHeadingCircle}  mt-2`}
                ></span>
                <section className={`${styles.postingHeadingTextArea} mx-2`}>
                  <h2 className={styles.postingHeadingText}>UIUX Designers</h2>
                  <div className="d-flex">
                    <p className="mb-0 mx-1">Tom Hawkins</p>
                    <p className="px-1 mt-1">Admin</p>
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
                <p className="px-4">
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                  A Great Way To Generate All The Motivation You Need To Get Fit
                </p>
              </div>
            </Row>

            {/******* Posting Photos *****/}
            <section className={`${styles.PostingPhotos}`}>
              <div className={styles.PhotoThree}></div>
              <span>
                <div className={styles.PhotoOne}></div>
                <div className={styles.PhotoTwo}></div>
              </span>
            </section>

            {/******* Comment input field *****/}

            <section className="d-flex flex-column mt-5 mb-5">
              <button className={`${styles.ViewComment} bg-white`}>
                View all comments
              </button>
              <div className="d-flex align-center">
                <div
                  className={`${styles.postingAreaHeadingCircle} mt-1`}
                ></div>
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

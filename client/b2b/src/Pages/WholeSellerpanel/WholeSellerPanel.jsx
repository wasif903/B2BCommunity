/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./WholeSellerPanel.module.css";
import image from "../../assets/my_acc.png";
import { useState } from "react";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";
import WholeSellerimg from "../../assets/wholeSellerAssets/WholesellerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import EditCoverPhoto from "../../Components/AdminPanelModals/EditCoverPhoto";
import { useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useGetSingleGroupQuery } from "../../REDUX/Reducers/groups/GroupSlice";
import coverPhoto from "../../assets/home/suggested_group2.jpg";
import Comments from "../../Components/Comment/Comments";
import {
  useCreatePostMutation,
  useGetPostQuery,
} from "../../REDUX/Reducers/posts/Posts";
import { useCommentMutation } from "../../REDUX/Reducers/comments/Comments";

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

//Images
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

function WholeSellerPanel() {
  // Add the faSignalStream icon to the library

  const navigate = useNavigate();

  // useState for Edite Cover Photo
  const [showEditCoverModal, setShowEditCoverModal] = useState(false);
  const [ShowCommentsModal, setShowCommentsModal] = useState(false);

  function CommentModal() {
    setShowCommentsModal(!ShowCommentsModal);
  }

  // Funtion for Edite Cover Photo
  const toggleEditCoverModal = () => {
    setShowEditCoverModal(!showEditCoverModal);
  };

  const { id } = useParams();

  const singleGroup = useGetSingleGroupQuery(id);
  const data = singleGroup.data;

  // console.log(data);

  const gi = JSON.parse(localStorage.getItem("gi"));
  const cookieValue = Cookies.get("userRole");

  const user = JSON.parse(localStorage.getItem("user"));

  const getPost = useGetPostQuery(gi);
  console.log(getPost, "posts");

  const [createPost, { isLoading, isError }] = useCreatePostMutation();

  const [postContent, setPostContent] = useState({
    description: "",
  });

  const [postMedia, setPostMedia] = useState({
    name: "",
    type: "",
  });

  const contentHandler = (e) => {
    setPostContent({ ...postContent, [e.target.name]: e.target.value });
    console.log(postContent, "description here");
  };

  const postMediaHandler = (e) => {
    const selectedFile = e.target.files[0];
    setPostMedia({ ...postMedia, ["name"]: selectedFile.name });
    setPostMedia({ ...postMedia, ["type"]: selectedFile.type });
  };

  const postCreator = async () => {
    try {
      const media = {
        type: postMedia.type,
        name: postMedia.name,
      };
      const res = await createPost({
        author: user._id,
        description: postContent.description,
        group: gi,
        media: [media],
      });
      console.log(res.data, "post handler");
    } catch (error) {
      console.log(error);
    }
  };

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
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Write Some Comment");
    }
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

        {/**************** Sliders of WholeSeller Panel *************/}

        <Row className="pt-5 gap-10 overflow-hidden">
          {Data.map((item, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <div className={styles.posts}>
                <p className={styles.postName}>{item.name}</p>
                <span className={styles.postValue}>{item.value}</span>
                <div className={styles.underLine}></div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="pt-lg-5 pb-lg-3 d-flex justify-content-evenly">
          <Col lg="6" className="py-3">
            <div className={styles.TotalMembers}>
              <div></div>
              <p>Total Members</p>
              <code>23.4K</code>
              <section className={styles.TotalMembersCircleSection}>
                <FontAwesomeIcon
                  className={styles.faEllipsis}
                  icon={faEllipsis}
                />
              </section>
            </div>
          </Col>
          {cookieValue === "Seller" ? (
            <Col
              lg="3"
              sm="6"
              xs="6"
              className="py-3 d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className={`${styles.manageWholeSeller}`}
                onClick={() => navigate(`/All-Members/${gi}`)}
              >
                <h4 className={`${styles.WholeSellerManageBtn} pt-2`}>
                  <FontAwesomeIcon
                    className={`${styles.manager} pe-3`}
                    icon={faCirclePlay}
                  />
                  All Member
                </h4>
              </div>
            </Col>
          ) : (
            <Col
              lg="3"
              sm="6"
              xs="6"
              className="py-3 d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className={`${styles.manageWholeSeller}`}
                onClick={() => navigate(`/All-Members/${gi}`)}
              >
                <h4 className={`${styles.WholeSellerManageBtn} pt-2`}>
                  <FontAwesomeIcon
                    className={`${styles.manager} pe-3`}
                    icon={faCirclePlay}
                  />
                  All Member
                </h4>
              </div>
            </Col>
          )}

          {cookieValue === "Seller" ? (
            <Col
              lg="3"
              sm="6"
              xs="6"
              className="py-3 d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className={styles.manageUsers}
                onClick={() => navigate(`/New-Request/${gi}`)}
              >
                <h4 className={`${styles.WholeSellerManageBtn} pt-2`}>
                  <FontAwesomeIcon
                    className={`${styles.user} pe-3`}
                    icon={faGlobe}
                  />
                  New Request
                </h4>
              </div>
            </Col>
          ) : (
            <Col
              lg="3"
              sm="6"
              xs="6"
              className="py-3 d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className={styles.manageUsers}
                onClick={() => navigate(`/New-Request/${gi}`)}
              >
                <h4 className={`${styles.WholeSellerManageBtn} pt-2`}>
                  <FontAwesomeIcon
                    className={`${styles.user} pe-3`}
                    icon={faGlobe}
                  />
                  New Request
                </h4>
              </div>
            </Col>
          )}
        </Row>

        {/************ WholeSellerInputArea ************/}

        <div className={`${styles.WholeSellerInputArea}`}>
          <section className="d-flex align-items-center justify-content-around">
            <img
              className={styles.WholeSellerInputimg}
              src={WholeSellerimg}
              alt="userImg"
            />
            <input
              className={styles.wholeSellerInputField}
              type="text"
              onChange={contentHandler}
              name="description"
              value={postContent.description}
              placeholder="Write something..."
            />

            <div className="d-block">
              <button onClick={postCreator} style={{ fontSize: "0.8rem" }}>
                POST
              </button>
            </div>
          </section>
          <section
            className={` w-100 d-flex justify-content-center align-items-center`}
          >
            <hr className="m-0 p-0" style={{ width: "95%" }} />
          </section>
          <div className="d-flex justify-content-around align-items-center flex-row">
            <label htmlFor="fileInput" className={styles.custom_file_upload}>
              <FontAwesomeIcon
                icon={faImages}
                className={`fa-3x ${styles.WholeSellerimg}`}
              />
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className={styles.file_input}
                onChange={postMediaHandler}
              />
            </label>
            <label htmlFor="fileInput" className={styles.custom_file_upload}>
              <FontAwesomeIcon
                icon={faVideo}
                className={`fa-3x ${styles.WholeSellerimg}`}
              />
              <input
                type="image"
                alt="Video"
                className={styles.file_input}
                onClick={postMediaHandler}
              />
            </label>
            <label htmlFor="fileInput" className={styles.custom_file_upload}>
              <FontAwesomeIcon
                icon={faBroadcastTower}
                className={`fa-3x ${styles.WholeSellerimg}`}
              />
              <input
                type="image"
                alt="Video"
                className={styles.file_input}
                onClick={postMediaHandler}
              />
            </label>
          </div>
        </div>

        {/* Post Map From API */}

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
                      className={`${styles.ViewcommentInputField} d-flex align-items-center  py-2`}
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
                  src={WholeSellerimg}
                  alt="userImg"
                />

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
                <p className="px-5">{data?.posts ? data?.posts : ""}</p>
              </div>
            </Row>

            {/******* Posting Photos *****/}
            <section className={`${styles.PostingPhotos}`}>
              <ImageGallery items={images} />
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

export default WholeSellerPanel;

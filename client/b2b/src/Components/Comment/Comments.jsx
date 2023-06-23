import React, { useState } from "react";
import style from "./Comments.module.css";
import image from "../../assets/my_acc.png";

function Comments({ comments }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {comments.map((item, index) => (
        <div key={index}>
          <div className={style.CommentWrapper}>
            <img src={image} alt="" className={style.AddCommentImg} />
            <div className={style.CommentDetail}>
              <span className={style.CommentSpan}>
                <h5>John</h5>
                <p>{item.content}</p>
              </span>
              <button className={style.CommentLike}>Like</button>
              <button className={style.CommentReply} onClick={handleOpen}>
                Reply
              </button>
            </div>
          </div>
          {isOpen ? (
            <input
              type="text"
              className={style.CommentInput}
              placeholder="Write your comment..."
            />
          ) : (
            ""
          )}

          <SubComment
            content={item.content}
            isOpen={isOpen}
            handleOpen={handleOpen}
          />
        </div>
      ))}
    </>
  );
}

function SubComment({ content, handleOpen, isOpen }) {
  return (
    <>
      <div className={style.SubCommentWrapper}>
        <img src={image} alt="" className={style.SubAddCommentImg} />
        <div className={style.SubCommentDetail}>
          <span className={style.SubCommentSpan}>
            <h5>John</h5>
            <p>{content}</p>
          </span>
          <button className={style.SubCommentLike}>Like</button>
          <button className={style.SubCommentReply} onClick={handleOpen}>
            Reply
          </button>
        </div>
        {isOpen ? (
          <input
            type="text"
            className={style.CommentInput}
            placeholder="Write your comment..."
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Comments;

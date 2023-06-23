import React from "react";
import style from "./Comments.module.css";
import image from "../../assets/my_acc.png";

function Comments({ comments }) {
  console.log(comments);
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
              <button className={style.CommentReply}>Reply</button>
            </div>
          </div>
          <SubComment content={item.content} />
        </div>
      ))}
    </>
  );
}
function SubComment({ content }) {
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
          <button className={style.SubCommentReply}>Reply</button>
        </div>
      </div>
    </>
  );
}
export default Comments;

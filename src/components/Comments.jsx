import React from "react";

function Comments({ comments, commentsOpen, setCommentsOpen }) {
  if (!comments) return "";
  return (
    <>
      {comments.map((item) => {
        return (
          <div key={item.id} className="title">
            <span className="comments-username">{item.user.username} </span>
            <span className="user-comment"> {item.text}</span>
          </div>
        );
      })}
      <p onClick={() => setCommentsOpen(false)} className="hide-comments">
        {commentsOpen ? "Hide comments" : ""}
      </p>
    </>
  );
}

export default Comments;

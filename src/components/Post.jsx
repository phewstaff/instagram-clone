import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../redux/actions/APIActions";
import dots from "../assets/images/ellipsis.png";
import like from "../assets/images/like.svg";
import commentsImg from "../assets/images/comments.svg";
import direct from "../assets/images/direct.png";
import save from "../assets/images/save.png";
import sad from "../assets/images/emoji.png";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import Comments from "./Comments";

function Post(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    setIsOpen(true);
    setIsDropdownOpen(false);
  };

  const { likes, id, description, image, profile, comments } = props;
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };

  const handleUpdatePost = (postId, post) => {
    dispatch(updatePost(postId, post));
  };

  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <>
      <div key={id} className="post">
        <div className="post-header">
          <div className="profile-img-container">
            <img
              className="post-header-profile-img"
              src={profile.avatar}
              alt="profile-img"
            />
          </div>

          <p className="username">{profile.username}</p>

          <img
            className="dots"
            onClick={() => {
              setIsDropdownOpen(true);
            }}
            src={dots}
            alt="three-dots"
          />

          {!isDropdownOpen ? (
            ""
          ) : (
            <Dropdown
              handleDeletePost={handleDeletePost}
              setIsDropdownOpen={setIsDropdownOpen}
              openModal={openModal}
            />
          )}
        </div>

        <img
          src={image}
          className="post-image"
          onClick={() => console.log(id)}
        />

        <div className="post-footer">
          <div className="post-footer-buttons">
            <img src={like} alt="" className="post-footer-button" />
            <img src={commentsImg} alt="" className="post-footer-button" />
            <img src={direct} alt="" className="post-footer-button" />
            <img src={save} alt="" className="post-footer-button" />
          </div>

          <p className="likes">0 {likes} likes</p>

          <div className="post-text">
            <p className="post-description">
              <b className="post-footer-username">{profile.username}</b>
              {description}
            </p>
          </div>

          {!commentsOpen ? (
            <p onClick={() => setCommentsOpen(true)} className="see-comments">
              See {!comments ? "0" : comments.length} comments
            </p>
          ) : (
            <>
              <Comments
                setCommentsOpen={setCommentsOpen}
                commentsOpen={commentsOpen}
                comments={comments}
              />
            </>
          )}

          <p className="date">9 HOURS AGO </p>

          <div className="comments-input-container">
            <img src={sad} alt="emoji" className="sad" />
            <input
              type="text"
              className="type-comment"
              placeholder="Add a comment..."
            />

            <p className="post-comment">Post</p>
          </div>
        </div>

        <Modal
          profile={profile}
          id={id}
          defaultTextInput={description}
          defaultUrlInput={image}
          onSubmit={handleUpdatePost}
          closeModal={closeModal}
          isOpen={isOpen}
          title={"Изменение публикации"}
          buttonName={"Изменить"}
        />
      </div>
    </>
  );
}

export default Post;

import React from "react";
import ReactDom from "react-dom";
import arrowImg from "../assets/images/arrow.svg";
import smileImg from "../assets/images/emojis.svg";
import { useState } from "react";
import { v4 } from "uuid";

function Modal({
  isOpen,
  closeModal,
  title,
  buttonName,
  onSubmit,
  defaultTextInput,
  defaultUrlInput,
  id,
  profile,
}) {
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState(defaultTextInput || "");
  const [urlInput, setUrlInput] = useState(defaultUrlInput || "");
  const [countLetters, setCountLetters] = useState(0);

  const post = {
    likes: 0,
    image: urlInput,
    description: textInput,
    user: {
      username: "unicodebootcamp",
      profile_img:
        "https://lh3.googleusercontent.com/ogw/AOh-ky12LqC-YLK26sIoYQDYhN3-qwG9WsZH4bRj1XCB=s64-c-mo",
    },
  };
  const isEmpty = urlInput.trim().length === 0;

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <form>
      <div className="overlay" onClick={closeModal} />
      <div className="window-container">
        <div className="window-header">
          <img
            onClick={closeModal}
            src={arrowImg}
            alt="arrow button"
            className="arrow"
          />
          <p className="create-post-p">{title}</p>
          <button
            disabled={error || isEmpty}
            onClick={() => {
              onSubmit(id, post);
            }}
            className="blue-p"
          >
            {buttonName}
          </button>
        </div>
        <div className="create-post-text">
          <div className="post-text-profile">
            {!profile ? (
              "loading"
            ) : (
              <>
                <img
                  src={profile.profile_img}
                  alt="profile"
                  className="profile-img"
                />
                <p className="user-name">{profile.username}</p>
              </>
            )}
          </div>
          <textarea
            className="text-input"
            type="text"
            maxLength={2200}
            onChange={(e) => {
              setTextInput(e.currentTarget.value);
              setCountLetters(e.currentTarget.value.length);
            }}
            placeholder="Добавьте подпись..."
            value={textInput}
          />
          <div className="post-text-footer">
            <img src={smileImg} alt="" className="smile" />
            <h5 className="count-letters">{countLetters}/2200</h5>
          </div>
        </div>
        <div className="create-post-image">
          <input
            className="url-input"
            type="url"
            required
            onChange={(e) => {
              e.currentTarget.validity.typeMismatch
                ? setError(true)
                : setError(false);
              setUrlInput(e.currentTarget.value);
            }}
            value={urlInput}
            placeholder="Введите URL-картинки"
          />
          {error && (
            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
              Please make sure you've entered the <em>url</em>
            </p>
          )}
        </div>
      </div>
    </form>,
    document.getElementById("portal")
  );
}

export default Modal;

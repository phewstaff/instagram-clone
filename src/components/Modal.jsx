import React from "react";
import ReactDom from "react-dom";
import arrowImg from "../assets/images/arrow.svg";
import smileImg from "../assets/images/emojis.svg";
import { useState } from "react";

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
  const [fileInput, setUrlInput] = useState(defaultUrlInput || "");
  const [countLetters, setCountLetters] = useState(0);

  const formData = new FormData();

  formData.append("description", textInput);
  formData.append("image", fileInput);

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
            onClick={(e) => {
              e.preventDefault();
              if (fileInput) {
                if (id) {
                  onSubmit(id, { description: textInput });
                } else {
                  onSubmit(id, formData);
                }
              } else {
                setError(true);
              }
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
                  src={profile.avatar}
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
              setTextInput(e.target.value);
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
        {!id ? (
          <div className="create-post-image">
            <label htmlFor="file-upload" className="custom-file-upload">
              Выберите изображение
            </label>

            <input
              className="url-input"
              id="file-upload"
              type="file"
              required
              onChange={(e) => {
                setUrlInput(e.target.files[0]);
                setError(false);
              }}
            />

            {error && (
              <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                Вы не выбрали изображение
              </p>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </form>,
    document.getElementById("portal")
  );
}

export default Modal;

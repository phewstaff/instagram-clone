import React from "react";
import { useState } from "react";
import house from "../assets/images/house.png";
import direct from "../assets/images/direct.png";
import post from "../assets/images/post.png";
import notifications from "../assets/images/notifications.png";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from ".//Modal";
import { createPost } from "../redux/actions/APIActions";

function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.Data.profile);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleAddPost = (id, post) => {
    dispatch(createPost(post));
  };

  return (
    <div className="header-container">
      <Modal
        profile={profile}
        openModal={openModal}
        onSubmit={handleAddPost}
        closeModal={closeModal}
        isOpen={isOpen}
        title={"Создание публикации"}
        buttonName={"Опубликовать"}
      />
      <img className="logo" src={logo} alt="this is logo" />
      <input className="search" placeholder="    Search"></input>
      <ul className="nav">
        <li className="nav-item">
          <img src={house} alt="nav" />
        </li>
        <li className="nav-item">
          <img src={direct} alt="nav" />
        </li>
        <li className="nav-item">
          <img
            className="post-button"
            src={post}
            alt="nav"
            onClick={() => openModal()}
          />
        </li>
        <li className="nav-item">
          <img src={search} alt="nav" />
        </li>
        <li className="nav-item">
          <img src={notifications} alt="nav" />
        </li>

        <li className="nav-item">
          {!profile ? (
            ""
          ) : (
            <img src={profile.profile_img} alt="nav" className="profile-img" />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;

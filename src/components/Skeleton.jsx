import React from "react";
import dots from "../assets/images/ellipsis.png";
import commentsImg from "../assets/images/comments.svg";
import direct from "../assets/images/direct.png";
import save from "../assets/images/save.png";
import sad from "../assets/images/emoji.png";
import like from "../assets/images/like.svg";
import "./Skeleton.scss";

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div class="container">
        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
            </div>
            <div class="loading-btn"></div>
          </div>
        </div>

        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
            </div>
            <div class="loading-btn"></div>
          </div>
        </div>

        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
            </div>
            <div class="loading-btn"></div>
          </div>
        </div>

        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
            </div>
            <div class="loading-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;

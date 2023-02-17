import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

function Main() {
  const posts = useSelector((state) => state.Data.posts);
  const profile = useSelector((state) => state.Data.profile);
  const suggestions = useSelector((state) => state.Data.suggestions);
  return (
    <div className="main-container">
      <div className="posts">
        {!posts
          ? ""
          : posts.map((item) => {
              return (
                <Post
                  profile={profile}
                  key={item.id}
                  id={item.id}
                  likes={item.likes}
                  description={item.description}
                  image={item.image}
                  comments={item.comments}
                />
              );
            })}
      </div>

      <div className="main-right">
        <div className="profile-information">
          {!profile ? (
            ""
          ) : (
            <>
              <img className="profile-img" src={profile.profile_img} alt="" />
              <p className="bold-text">{profile.username}</p>
            </>
          )}

          <p className="change">Change</p>
        </div>
        <div className="suggestions">
          <div className="just-for-flex">
            <p className="suggestions-for-you">Suggestions for you</p>
            <p className="see-all">See all</p>
          </div>
          {!suggestions
            ? "loading"
            : suggestions.map((item) => {
                return (
                  <div key={v4()} className="suggestion">
                    <img
                      src={item.profile_img}
                      alt="suggestion-profile-img"
                      className="suggestion-profile-img"
                    />
                    <div className="suggestion-center">
                      <p className="username">{item.username}</p>
                      <p className="suggestions-for-you">Suggestion for you</p>
                    </div>
                    <p className="follow-button">Follow</p>
                  </div>
                );
              })}
          <div className="subtitle">
            <p className="alpha">
              Information · Help · Prisoner · API · Job · Privacity · Conditions
              · Locations · Trending accounts · Hashtags · Language
            </p>
            <p className="alpha">© 2022 INSTAGRAM FROM SIMMXS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

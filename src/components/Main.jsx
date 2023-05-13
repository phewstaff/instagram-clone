import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import Header from "./Header";

function Main() {
  const posts = useSelector((state) => state.Data.posts);
  const profile = useSelector((state) => state.Data.profile);
  const suggestions = useSelector((state) => state.Data.suggestions);

  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <div className="posts">
            {!posts
              ? ""
              : posts.map((item) => {
                  return (
                    <Post
                      date={item.created_at}
                      profile={item.user}
                      key={item._id}
                      id={item._id}
                      likes={item.likes}
                      description={item.description}
                      image={item.image}
                      comments={item.comments}
                    />
                  );
                })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;

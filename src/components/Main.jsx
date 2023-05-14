import React from "react";
import Post from "./Post";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isTokenValid } from ".././redux/actions/APIActions";
import Header from "./Header";
import { fetchPosts } from ".././redux/actions/APIActions";
import Cookies from "js-cookie";

function Main() {
  const posts = useSelector((state) => state.Data.posts);

  const dispatch = useDispatch();
  // dispatch(fetchProfile());  // todo
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    console.log(token);
    const checkToken = async () => {
      try {
        await isTokenValid(token);
      } catch (error) {
        toast.error(
          <div className="toaster">
            Вы не авторизованы
            <button
              className="toaster-button"
              onClick={() => navigate("/authorization")}
            >
              Авторизоваться
            </button>
          </div>
        );
      }
    };
    checkToken();

    dispatch(fetchPosts());
    // dispatch(fetchSuggestions()); // todo
  }, []);

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

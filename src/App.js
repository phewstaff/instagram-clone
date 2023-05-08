import "./app.scss";
import { useEffect } from "react";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchProfile,
  fetchSuggestions,
} from "./redux/actions/APIActions";
import { Routes, Route, useNavigate } from "react-router";
import Authorization from "./components/Authorization";
import { isTokenValid } from "./redux/actions/APIActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  // dispatch(fetchProfile());
  const navigate = useNavigate();

  const posts = useSelector((state) => state.Data.posts);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await isTokenValid();
      } catch (error) {
        navigate("/authorization");
        toast.error("Пожалуйста, авторизуйтесь");
      }
    };
    checkToken();

    dispatch(fetchPosts());
    // dispatch(fetchSuggestions());
  }, []);

  return (
    <>
      <ToastContainer position="bottom-right" />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

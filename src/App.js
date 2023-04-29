import "./app.scss";
import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchProfile,
  fetchSuggestions,
} from "./redux/actions/APIActions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProfile());

  const posts = useSelector((state) => state.Data.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}
export default App;

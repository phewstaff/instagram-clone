import "./app.scss";
import Main from "./components/Main";
import { Routes, Route, useNavigate } from "react-router";
import Authorization from "./components/Authorization";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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

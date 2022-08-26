import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import SubHeader from "./Component/SubHeader/SubHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginModel from "./Component/Header/LoginModel";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <LoginModel />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

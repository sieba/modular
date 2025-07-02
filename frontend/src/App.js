import React, { useRef, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Technology from "./pages/Technology";
import ConditionStatement from "./pages/ConditionalStatement/ConditionStatement";
import Sidebar from "./components/Sidebar";
import { useReference } from "./context/HandleClickoutside";
import Mobilenavbar from "./components/Mobilenavbar";
import { useSidebar } from "./context/SidebarContext";
import Looping from "./pages/Looping/Looping";
import Array from "./pages/Array/Array";
import Method from "./pages/Method/Method";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin";

const App = () => {
  const { sidebarRef, open } = useReference();
  const { openSidebar } = useSidebar();


  return (
    <div className="app__container">
      <div className="navigation_layout">
        <Navigation />
      </div>
      <div className="main_content">
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" exact Component={About}></Route>
          <Route path="/tech" exact Component={Technology}></Route>
          <Route path="/condition" exact Component={ConditionStatement}></Route>
          <Route path="/looping" exact Component={Looping}></Route>{" "}
          <Route path="/array" exact Component={Array}></Route>
          <Route path="/method" exact Component={Method}></Route>
          <Route path="/register" exact Component={Register}></Route>
          <Route path="/login" exact Component={Login}></Route>
          <Route path="/admin" exact Component={Admin}></Route>
        </Routes>
      </div>

      {/* Button to open sidebar */}

      {open && (
        <div className="profile" ref={sidebarRef}>
          <Sidebar />
        </div>
      )}
      {openSidebar && (
        <div>
          <Mobilenavbar />
        </div>
      )}
    </div>
  );
};

export default App;

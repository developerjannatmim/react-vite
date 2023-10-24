import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./components/Classroom";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle);
  };
    return (
      <>
        <BrowserRouter>
          <div className="d-flex">
            <div className={toggle ? "d-none" : "w-auto position-fixed"}>
              <Sidebar />
            </div>
            <div className={toggle ? "d-none" : "invisible"}>
              <Sidebar />
            </div>
            <div className="col overflow-auto">
              <Header Toggle={Toggle} />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/class" element={<Classroom />}></Route>
              </Routes>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
};

export default App;

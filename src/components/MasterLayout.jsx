import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Classroom from "./Classroom";
import routes from "../routes/routes";

const MasterLayout = () => {
    const [toggle, setToggle] = useState(false);
    const Toggle = () => {
      setToggle(!toggle);
    };
  return (
    <>
        <div className="d-flex">
          <div className={toggle ? "d-none" : "w-auto position-fixed"}>
            <Sidebar />
          </div>
          <div className={toggle ? "d-none" : "invisible"}>
            <Sidebar />
          </div>
          <div className="col overflow-auto">
            <Header Toggle={Toggle} />
            <main>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              </Routes>
            </main>
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
};

export default MasterLayout;

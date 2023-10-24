import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Classroom from "./Classroom";

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

          </div>
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
};

export default MasterLayout;

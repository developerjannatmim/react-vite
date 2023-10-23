import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./components/Classroom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div>
      <Header/>
    </div>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                }
              ></Route>
              <Route
                path="/users"
                element={
                  <User />
                }
              ></Route>
              <Route
                path="/class"
                element={
                  <Classroom />
                }
              ></Route>
            </Routes>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </>
  );
};

export default App;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./components/Classroom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddAdmin from './pages/Admin/AddAdmin';
import AddSubject from './pages/Subject/AddSubject';
import SubjectList from './pages/Subject/SubjectList';
import UpdateSubject from './pages/Subject/UpdateSubject';

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
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/class" element={<Classroom />}></Route>
                <Route path="/subject/create" element={<AddSubject />}></Route>
                <Route path="/subject/view" element={<SubjectList />}></Route>
                <Route path="/edit-subject/:id" element={<UpdateSubject />}></Route>
                <Route path="/add-admin" element={<AddAdmin />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
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

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import AdminList from "./pages/Admin/AdminList";
import ShowAdmin from "./pages/Admin/ShowAdmin";
import AddAdmin from "./pages/Admin/AddAdmin";
import UpdateAdmin from "./pages/Admin/UpdateAdmin";



import MarkList from "./pages/Mark/MarkList";
import ShowMark from "./pages/Mark/ShowMark";
import AddMark from "./pages/Mark/AddMark";
import UpdateMark from "./pages/Mark/UpdateMark";

import RoutineList from "./pages/Routine/RoutineList";
import ShowRoutine from "./pages/Routine/ShowRoutine";
import AddRoutine from "./pages/Routine/AddRoutine";
import UpdateRoutine from "./pages/Routine/UpdateRoutine";

import SyllabusList from "./pages/Syllabus/SyllabusList";
import ShowSyllabus from "./pages/Syllabus/ShowSyllabus";
import AddSyllabus from "./pages/Syllabus/AddSyllabus";
import UpdateSyllabus from "./pages/Syllabus/UpdateSyllabus";

import SectionList from "./pages/Section/SectionList";
import ShowSection from "./pages/Section/ShowSection";
import AddSection from "./pages/Section/AddSection";
import UpdateSection from "./pages/Section/UpdateSection";



import GradeList from "./pages/Grade/GradeList";
import ShowGrade from "./pages/Grade/ShowGrade";
import AddGrade from "./pages/Grade/AddGrade";
import UpdateGrade from "./pages/Grade/UpdateGrade";

import ExamList from "./pages/Exam/ExamList";
import ShowExam from "./pages/Exam/ShowExam";
import AddExam from "./pages/Exam/AddExam";
import UpdateExam from "./pages/Exam/UpdateExam";

import SubjectList from "./pages/Subject/SubjectList";
import ShowSubject from "./pages/Subject/ShowSubject";
import AddSubject from "./pages/Subject/AddSubject";
import UpdateSubject from "./pages/Subject/UpdateSubject";

import ClassesList from "./pages/Classes/ClassesList";
import ShowClasses from "./pages/Classes/ShowClasses";
import AddClasses from "./pages/Classes/AddClasses";
import UpdateClasses from "./pages/Classes/UpdateClasses";

import ClassRoomList from './pages/ClassRoom/ClassRoomList';
import ShowClassRoom from './pages/ClassRoom/ShowClassRoom';
import AddClassRoom from './pages/ClassRoom/AddClassRoom';
import UpdateClassRoom from './pages/ClassRoom/UpdateClassRoom';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <div>
      <Header />
      </div>
        <div className="d-flex">
          <div className="w-auto position-sticky">
            <Sidebar />
          </div>
          <div className="col overflow-hidden">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>

              <Route path="/subject/view" element={<SubjectList />}></Route>
              <Route path="/subject/create" element={<AddSubject />}></Route>
              <Route
                path="/subjects/:id/show"
                element={<ShowSubject />}
              ></Route>
              <Route
                path="/subjects/:id/edit"
                element={<UpdateSubject />}
              ></Route>
              <Route path="/marks" element={<MarkList />}></Route>
              <Route path="/marks/create" element={<AddMark />}></Route>
              <Route path="/marks/:id/show" element={<ShowMark />}></Route>
              <Route path="/marks/:id/edit" element={<UpdateMark />}></Route>

              <Route path="/routines" element={<RoutineList />}></Route>
              <Route path="/routines/create" element={<AddRoutine />}></Route>
              <Route path="/routines/:id/show" element={<ShowRoutine />}></Route>
              <Route path="/routines/:id/edit" element={<UpdateRoutine />}></Route>

              <Route path="/syllabuses" element={<SyllabusList />}></Route>
              <Route path="/syllabuses/create" element={<AddSyllabus />}></Route>
              <Route path="/syllabuses/:id/show" element={<ShowSyllabus />}></Route>
              <Route path="/syllabuses/:id/edit" element={<UpdateSyllabus />}></Route>

              <Route path="/sections" element={<SectionList />}></Route>
              <Route path="/sections/create" element={<AddSection />}></Route>
              <Route path="/sections/:id/show" element={<ShowSection />}></Route>
              <Route path="/sections/:id/edit" element={<UpdateSection />}></Route>

              <Route path="/grades" element={<GradeList />}></Route>
              <Route path="/grades/create" element={<AddGrade />}></Route>
              <Route path="/grades/:id/show" element={<ShowGrade />}></Route>
              <Route path="/grades/:id/edit" element={<UpdateGrade />}></Route>

              <Route path="/exams" element={<ExamList />}></Route>
              <Route path="/exams/create" element={<AddExam />}></Route>
              <Route path="/exams/:id/show" element={<ShowExam />}></Route>
              <Route path="/exams/:id/edit" element={<UpdateExam />}></Route>

              <Route path="/classes" element={<ClassesList />}></Route>
              <Route path="/classes/create" element={<AddClasses />}></Route>
              <Route path="/classes/:id/show" element={<ShowClasses />}></Route>
              <Route path="/classes/:id/edit" element={<UpdateClasses />}></Route>

              <Route path="/classroom" element={<ClassRoomList />}></Route>
              <Route path="/classroom/create" element={<AddClassRoom />}></Route>
              <Route path="/classroom/:id/show" element={<ShowClassRoom />}></Route>
              <Route path="/classroom/:id/edit" element={<UpdateClassRoom />}></Route>

              <Route path="/admin" element={<AdminList />}></Route>
              <Route path="/admin/create" element={<AddAdmin />}></Route>
              <Route path="/admin/:id/show" element={<ShowAdmin />}></Route>
              <Route path="/admin/:id/edit" element={<UpdateAdmin />}></Route>

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

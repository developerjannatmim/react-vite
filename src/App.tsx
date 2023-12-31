// import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Publicroute from "./components/Publicroute";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//Admin components start
import Gallery from "./AdminPages/Gallery/Gallery";

import AdminList from "./AdminPages/Admin/AdminList";
import ShowAdmin from "./AdminPages/Admin/ShowAdmin";
import AddAdmin from "./AdminPages/Admin/AddAdmin";
import UpdateAdmin from "./AdminPages/Admin/UpdateAdmin";

import NoticeList from "./AdminPages/Notice/NoticeList";
import ShowNotice from "./AdminPages/Notice/ShowNotice";
import AddNotice from "./AdminPages/Notice/AddNotice";
import UpdateNotice from "./AdminPages/Notice/UpdateNotice";

import AccountantList from "./AdminPages/Accountant/AccountantList";
import ShowAccountant from "./AdminPages/Accountant/ShowAccountant";
import AddAccountant from "./AdminPages/Accountant/AddAccountant";
import UpdateAccountant from "./AdminPages/Accountant/UpdateAccountant";

import DriverList from "./AdminPages/Driver/DriverList";
import ShowDriver from "./AdminPages/Driver/ShowDriver";
import AddDriver from "./AdminPages/Driver/AddDriver";
import UpdateDriver from "./AdminPages/Driver/UpdateDriver";

import AdmissionList from "./AdminPages/Admission/AdmissionList";
import ShowAdmission from "./AdminPages/Admission/ShowAdmission";
import AddAdmission from "./AdminPages/Admission/AddAdmission";
import UpdateAdmission from "./AdminPages/Admission/UpdateAdmission";

import EventList from "./AdminPages/Event/EventList";
import ShowEvent from "./AdminPages/Event/ShowEvent";
import AddEvent from "./AdminPages/Event/AddEvent";
import UpdateEvent from "./AdminPages/Event/UpdateEvent";

import AssignStudentList from "./AdminPages/AssignStudent/AssignStudentList";
import ShowAssignStudent from "./AdminPages/AssignStudent/ShowAssignStudent";
import AddAssignStudent from "./AdminPages/AssignStudent/AddAssignStudent";
import UpdateAssignStudent from "./AdminPages/AssignStudent/UpdateAssignStudent";

import VehicleList from "./AdminPages/Vehicle/VehicleList";
import ShowVehicle from "./AdminPages/Vehicle/ShowVehicle";
import AddVehicle from "./AdminPages/Vehicle/AddVehicle";
import UpdateVehicle from "./AdminPages/Vehicle/UpdateVehicle";

import UserList from "./AdminPages/User/UserList";
import ShowUser from "./AdminPages/User/ShowUser";
import AddUser from "./AdminPages/User/AddUser";
import UpdateUser from "./AdminPages/User/UpdateUser";

import UserRoleList from "./AdminPages/UserRole/UserRoleList";
import ShowUserRole from "./AdminPages/UserRole/ShowUserRole";
import AddUserRole from "./AdminPages/UserRole/AddUserRole";
import UpdateUserRole from "./AdminPages/UserRole/UpdateUserRole";

import BackOfficeList from "./AdminPages/BackOffice/BackOfficeList";
import ShowBackOffice from "./AdminPages/BackOffice/ShowBackOffice";
import AddBackOffice from "./AdminPages/BackOffice/AddBackOffice";
import UpdateBackOffice from "./AdminPages/BackOffice/UpdateBackOffice";

import LibrarianList from "./AdminPages/Librarian/LibrarianList";
import ShowLibrarian from "./AdminPages/Librarian/ShowLibrarian";
import AddLibrarian from "./AdminPages/Librarian/AddLibrarian";
import UpdateLibrarian from "./AdminPages/Librarian/UpdateLibrarian";

import ExamCategoryList from "./AdminPages/ExamCategory/ExamCategoryList";
import ShowExamCategory from "./AdminPages/ExamCategory/ShowExamCategory";
import AddExamCategory from "./AdminPages/ExamCategory/AddExamCategory";
import UpdateExamCategory from "./AdminPages/ExamCategory/UpdateExamCategory";

import StudentList from "./AdminPages/Student/StudentList";
import ShowStudent from "./AdminPages/Student/ShowStudent";
import AddStudent from "./AdminPages/Student/AddStudent";
import UpdateStudent from "./AdminPages/Student/UpdateStudent";

import ParentList from "./AdminPages/Parent/ParentList";
import ShowParent from "./AdminPages/Parent/ShowParent";
import AddParent from "./AdminPages/Parent/AddParent";
import UpdateParent from "./AdminPages/Parent/UpdateParent";

import TeacherList from "./AdminPages/Teacher/TeacherList";
import ShowTeacher from "./AdminPages/Teacher/ShowTeacher";
import AddTeacher from "./AdminPages/Teacher/AddTeacher";
import UpdateTeacher from "./AdminPages/Teacher/UpdateTeacher";

import MarkList from "./AdminPages/Mark/MarkList";
import ShowMark from "./AdminPages/Mark/ShowMark";
import AddMark from "./AdminPages/Mark/AddMark";
import UpdateMark from "./AdminPages/Mark/UpdateMark";

import RoutineList from "./AdminPages/Routine/RoutineList";
import ShowRoutine from "./AdminPages/Routine/ShowRoutine";
import AddRoutine from "./AdminPages/Routine/AddRoutine";
import UpdateRoutine from "./AdminPages/Routine/UpdateRoutine";

import SyllabusList from "./AdminPages/Syllabus/SyllabusList";
import ShowSyllabus from "./AdminPages/Syllabus/ShowSyllabus";
import AddSyllabus from "./AdminPages/Syllabus/AddSyllabus";
import UpdateSyllabus from "./AdminPages/Syllabus/UpdateSyllabus";

import SectionList from "./AdminPages/Section/SectionList";
import ShowSection from "./AdminPages/Section/ShowSection";
import AddSection from "./AdminPages/Section/AddSection";
import UpdateSection from "./AdminPages/Section/UpdateSection";

import GradeList from "./AdminPages/Grade/GradeList";
import ShowGrade from "./AdminPages/Grade/ShowGrade";
import AddGrade from "./AdminPages/Grade/AddGrade";
import UpdateGrade from "./AdminPages/Grade/UpdateGrade";

import ExamList from "./AdminPages/Exam/ExamList";
import ShowExam from "./AdminPages/Exam/ShowExam";
import AddExam from "./AdminPages/Exam/AddExam";
import UpdateExam from "./AdminPages/Exam/UpdateExam";

import SubjectList from "./AdminPages/Subject/SubjectList";
import ShowSubject from "./AdminPages/Subject/ShowSubject";
import AddSubject from "./AdminPages/Subject/AddSubject";
import UpdateSubject from "./AdminPages/Subject/UpdateSubject";

import ClassesList from "./AdminPages/Classes/ClassesList";
import ShowClasses from "./AdminPages/Classes/ShowClasses";
import AddClasses from "./AdminPages/Classes/AddClasses";
import UpdateClasses from "./AdminPages/Classes/UpdateClasses";

import ClassRoomList from "./AdminPages/ClassRoom/ClassRoomList";
import ShowClassRoom from "./AdminPages/ClassRoom/ShowClassRoom";
import AddClassRoom from "./AdminPages/ClassRoom/AddClassRoom";
import UpdateClassRoom from "./AdminPages/ClassRoom/UpdateClassRoom";
import SchoolList from "./AdminPages/School/SchoolList";
import UpdateSchool from "./AdminPages/School/UpdateSchool";
//Admin components end

//Teacher components start
import TExamCategoryList from "./TeacherPages/ExamCategory/ExamCategoryList";
import TShowExamCategory from "./TeacherPages/ExamCategory/ShowExamCategory";
import TAddExamCategory from "./TeacherPages/ExamCategory/AddExamCategory";
import TUpdateExamCategory from "./TeacherPages/ExamCategory/UpdateExamCategory";

import TDriverList from "./TeacherPages/Driver/DriverList";
import TShowDriver from "./TeacherPages/Driver/ShowDriver";

import TVehicleList from "./TeacherPages/Vehicle/VehicleList";
import TShowVehicle from "./TeacherPages/Vehicle/ShowVehicle";

import TEventList from "./TeacherPages/Event/EventList";
import TShowEvent from "./TeacherPages/Event/ShowEvent";

import TBackOfficeList from "./TeacherPages/BackOffice/BackOfficeList";
import TShowBackOffice from "./TeacherPages/BackOffice/ShowBackOffice";

import TNoticeList from "./TeacherPages/Notice/NoticeList";
import TShowNotice from "./TeacherPages/Notice/ShowNotice";

import TGallery from "./TeacherPages/Gallery/Gallery";

import TStudentList from "./TeacherPages/Student/StudentList";
import TShowStudent from "./TeacherPages/Student/ShowStudent";

import TParentList from "./TeacherPages/Parent/ParentList";
import TShowParent from "./TeacherPages/Parent/ShowParent";

import TTeacherList from "./TeacherPages/Teacher/TeacherList";
import TShowTeacher from "./TeacherPages/Teacher/ShowTeacher";

import TMarkList from "./TeacherPages/Mark/MarkList";
import TShowMark from "./TeacherPages/Mark/ShowMark";

import TRoutineList from "./TeacherPages/Routine/RoutineList";
import TShowRoutine from "./TeacherPages/Routine/ShowRoutine";

import TSyllabusList from "./TeacherPages/Syllabus/SyllabusList";
import TShowSyllabus from "./TeacherPages/Syllabus/ShowSyllabus";

import TSectionList from "./TeacherPages/Section/SectionList";
import TShowSection from "./TeacherPages/Section/ShowSection";

import TGradeList from "./TeacherPages/Grade/GradeList";
import TShowGrade from "./TeacherPages/Grade/ShowGrade";

import TExamList from "./TeacherPages/Exam/ExamList";
import TShowExam from "./TeacherPages/Exam/ShowExam";

import TSubjectList from "./TeacherPages/Subject/SubjectList";
import TShowSubject from "./TeacherPages/Subject/ShowSubject";

import TClassesList from "./TeacherPages/Classes/ClassesList";
import TShowClasses from "./TeacherPages/Classes/ShowClasses";

import TClassRoomList from "./TeacherPages/ClassRoom/ClassRoomList";
import TShowClassRoom from "./TeacherPages/ClassRoom/ShowClassRoom";
//Teacher components end

//Student components start
import SDriverList from "./StudentPages/Driver/DriverList";
import SShowDriver from "./StudentPages/Driver/ShowDriver";

import SVehicleList from "./StudentPages/Vehicle/VehicleList";
import SShowVehicle from "./StudentPages/Vehicle/ShowVehicle";

import SEventList from "./StudentPages/Event/EventList";
import SShowEvent from "./StudentPages/Event/ShowEvent";

import SBackOfficeList from "./StudentPages/BackOffice/BackOfficeList";
import SShowBackOffice from "./StudentPages/BackOffice/ShowBackOffice";

import SNoticeList from "./StudentPages/Notice/NoticeList";
import SShowNotice from "./StudentPages/Notice/ShowNotice";

import SGallery from "./StudentPages/Gallery/Gallery";

import SStudentList from "./StudentPages/Student/StudentList";
import SShowStudent from "./StudentPages/Student/ShowStudent";

import STeacherList from "./StudentPages/Teacher/TeacherList";
import SShowTeacher from "./StudentPages/Teacher/ShowTeacher";

import SMarkList from "./StudentPages/Mark/MarkList";
import SShowMark from "./StudentPages/Mark/ShowMark";

import SRoutineList from "./StudentPages/Routine/RoutineList";
import SShowRoutine from "./StudentPages/Routine/ShowRoutine";

import SSyllabusList from "./StudentPages/Syllabus/SyllabusList";
import SShowSyllabus from "./StudentPages/Syllabus/ShowSyllabus";

import SSectionList from "./StudentPages/Section/SectionList";
import SShowSection from "./StudentPages/Section/ShowSection";

import SGradeList from "./StudentPages/Grade/GradeList";
import SShowGrade from "./StudentPages/Grade/ShowGrade";

import SExamList from "./StudentPages/Exam/ExamList";
import SShowExam from "./StudentPages/Exam/ShowExam";

import SSubjectList from "./StudentPages/Subject/SubjectList";
import SShowSubject from "./StudentPages/Subject/ShowSubject";

import SClassesList from "./StudentPages/Classes/ClassesList";
import SShowClasses from "./StudentPages/Classes/ShowClasses";

import SClassRoomList from "./StudentPages/ClassRoom/ClassRoomList";
import SShowClassRoom from "./StudentPages/ClassRoom/ShowClassRoom";
//Student components end

//Parent components start
import PStudentList from "./ParentPages/Student/StudentList";
import PShowStudent from "./ParentPages/Student/ShowStudent";

import PParentList from "./ParentPages/Parent/ParentList";
import PShowParent from "./ParentPages/Parent/ShowParent";

import PTeacherList from "./ParentPages/Teacher/TeacherList";
import PShowTeacher from "./ParentPages/Teacher/ShowTeacher";

import PMarkList from "./ParentPages/Mark/MarkList";
import PShowMark from "./ParentPages/Mark/ShowMark";

import PRoutineList from "./ParentPages/Routine/RoutineList";
import PShowRoutine from "./ParentPages/Routine/ShowRoutine";

import PSyllabusList from "./ParentPages/Syllabus/SyllabusList";
import PShowSyllabus from "./ParentPages/Syllabus/ShowSyllabus";

import PSectionList from "./ParentPages/Section/SectionList";
import PShowSection from "./ParentPages/Section/ShowSection";

import PGradeList from "./ParentPages/Grade/GradeList";
import PShowGrade from "./ParentPages/Grade/ShowGrade";

import PExamList from "./ParentPages/Exam/ExamList";
import PShowExam from "./ParentPages/Exam/ShowExam";

import PSubjectList from "./ParentPages/Subject/SubjectList";
import PShowSubject from "./ParentPages/Subject/ShowSubject";

import PClassesList from "./ParentPages/Classes/ClassesList";
import PShowClasses from "./ParentPages/Classes/ShowClasses";

import PClassRoomList from "./ParentPages/ClassRoom/ClassRoomList";
import PShowClassRoom from "./ParentPages/ClassRoom/ShowClassRoom";
//Parent components end

//User Route components
import AdminDashboard from "./components/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminProfile from "./AdminPages/AdminProfile/AdminProfile";

import TeacherDashboard from "./components/TeacherDashboard";
import TeacherRoute from "./components/TeacherRoute";
import TeacherProfile from "./TeacherPages/TeacherProfile/TeacherProfile";

import StudentDashboard from "./components/StudentDashboard";
import StudentRoute from "./components/StudentRoute";
import StudentProfile from "./StudentPages/StudentProfile/StudentProfile";

import ParentDashboard from "./components/ParentDashboard";
import ParentRoute from "./components/ParentRoute";
import ParentProfile from "./ParentPages/ParentProfile/ParentProfile";

import HomePage from "./PublicPages/HomePage/HomePage.jsx";
import { Switch } from 'react-switch';
import StudentSidebar from './components/StudentSidebar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Publicroute />}></Route>
        <Route path="/home" element={<HomePage />}></Route>

        {/* Private Routes start */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />

          <Route path="gallery" element={<Gallery />} />

          <Route path="admin" element={<AdminList />} />
          <Route path="admin/create" element={<AddAdmin />} />
          <Route path="admin/:id/show" element={<ShowAdmin />} />
          <Route path="admin/:id/edit" element={<UpdateAdmin />} />

          <Route path="notice" element={<NoticeList />} />
          <Route path="notice/create" element={<AddNotice />} />
          <Route path="notice/:id/show" element={<ShowNotice />} />
          <Route path="notice/:id/edit" element={<UpdateNotice />} />

          <Route path="accountant" element={<AccountantList />} />
          <Route path="accountant/create" element={<AddAccountant />} />
          <Route path="accountant/:id/show" element={<ShowAccountant />} />
          <Route path="accountant/:id/edit" element={<UpdateAccountant />} />

          <Route path="driver" element={<DriverList />} />
          <Route path="driver/create" element={<AddDriver />} />
          <Route path="driver/:id/show" element={<ShowDriver />} />
          <Route path="driver/:id/edit" element={<UpdateDriver />} />

          <Route path="admission" element={<AdmissionList />} />
          <Route path="admission/create" element={<AddAdmission />} />
          <Route path="admission/:id/show" element={<ShowAdmission />} />
          <Route path="admission/:id/edit" element={<UpdateAdmission />} />

          <Route path="event" element={<EventList />} />
          <Route path="event/create" element={<AddEvent />} />
          <Route path="event/:id/show" element={<ShowEvent />} />
          <Route path="event/:id/edit" element={<UpdateEvent />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<AddUser />} />
          <Route path="users/:id/show" element={<ShowUser />} />
          <Route path="users/:id/edit" element={<UpdateUser />} />

          <Route path="assignStudents" element={<AssignStudentList />} />
          <Route path="assignStudents/create" element={<AddAssignStudent />} />
          <Route path="assignStudents/:id/show" element={<ShowAssignStudent />} />
          <Route path="assignStudents/:id/edit" element={<UpdateAssignStudent />} />

          <Route path="vehicles" element={<VehicleList />} />
          <Route path="vehicles/create" element={<AddVehicle />} />
          <Route path="vehicles/:id/show" element={<ShowVehicle />} />
          <Route path="vehicles/:id/edit" element={<UpdateVehicle />} />

          <Route path="userRoles" element={<UserRoleList />} />
          <Route path="userRoles/create" element={<AddUserRole />} />
          <Route path="userRoles/:id/show" element={<ShowUserRole />} />
          <Route path="userRoles/:id/edit" element={<UpdateUserRole />} />

          <Route path="backOffice" element={<BackOfficeList />} />
          <Route path="backOffice/create" element={<AddBackOffice />} />
          <Route path="backOffice/:id/show" element={<ShowBackOffice />} />
          <Route path="backOffice/:id/edit" element={<UpdateBackOffice />} />

          <Route path="librarian" element={<LibrarianList />} />
          <Route path="librarian/create" element={<AddLibrarian />} />
          <Route path="librarian/:id/show" element={<ShowLibrarian />} />
          <Route path="librarian/:id/edit" element={<UpdateLibrarian />} />

          <Route path="exam-category" element={<ExamCategoryList />} />
          <Route path="exam-category/create" element={<AddExamCategory />} />
          <Route path="exam-category/:id/show" element={<ShowExamCategory />} />
          <Route path="exam-category/:id/edit" element={<UpdateExamCategory />} />

          <Route path="exams" element={<ExamList />} />
          <Route path="exams/create" element={<AddExam />} />
          <Route path="exams/:id/show" element={<ShowExam />} />
          <Route path="exams/:id/edit" element={<UpdateExam />} />

          <Route path="subject/view" element={<SubjectList />} />
          <Route path="subject/create" element={<AddSubject />} />
          <Route path="subjects/:id/show" element={<ShowSubject />} />
          <Route path="subjects/:id/edit" element={<UpdateSubject />} />

          <Route path="students" element={<StudentList />} />
          <Route path="students/create" element={<AddStudent />} />
          <Route path="students/:id/show" element={<ShowStudent />} />
          <Route path="students/:id/edit" element={<UpdateStudent />} />

          <Route path="teachers" element={<TeacherList />} />
          <Route path="teachers/create" element={<AddTeacher />} />
          <Route path="teachers/:id/show" element={<ShowTeacher />} />
          <Route path="teachers/:id/edit" element={<UpdateTeacher />} />

          <Route path="parents" element={<ParentList />} />
          <Route path="parents/create" element={<AddParent />} />
          <Route path="parents/:id/show" element={<ShowParent />} />
          <Route path="parents/:id/edit" element={<UpdateParent />} />

          <Route path="sections" element={<SectionList />} />
          <Route path="sections/create" element={<AddSection />} />
          <Route path="sections/:id/show" element={<ShowSection />} />
          <Route path="sections/:id/edit" element={<UpdateSection />} />

          <Route path="grades" element={<GradeList />} />
          <Route path="grades/create" element={<AddGrade />} />
          <Route path="grades/:id/show" element={<ShowGrade />} />
          <Route path="grades/:id/edit" element={<UpdateGrade />} />

          <Route path="syllabuses" element={<SyllabusList />} />
          <Route path="syllabuses/create" element={<AddSyllabus />} />
          <Route path="syllabuses/:id/show" element={<ShowSyllabus />} />
          <Route path="syllabuses/:id/edit" element={<UpdateSyllabus />} />

          <Route path="routines" element={<RoutineList />} />
          <Route path="routines/create" element={<AddRoutine />} />
          <Route path="routines/:id/show" element={<ShowRoutine />} />
          <Route path="routines/:id/edit" element={<UpdateRoutine />} />

          <Route path="marks" element={<MarkList />} />
          <Route path="marks/create" element={<AddMark />} />
          <Route path="marks/:id/show" element={<ShowMark />} />
          <Route path="marks/:id/edit" element={<UpdateMark />} />

          <Route path="classes" element={<ClassesList />} />
          <Route path="classes/create" element={<AddClasses />} />
          <Route path="classes/:id/show" element={<ShowClasses />} />
          <Route path="classes/:id/edit" element={<UpdateClasses />} />

          <Route path="classroom" element={<ClassRoomList />} />
          <Route path="classroom/create" element={<AddClassRoom />} />
          <Route path="classroom/:id/show" element={<ShowClassRoom />} />
          <Route path="classroom/:id/edit" element={<UpdateClassRoom />} />

          <Route path="settings/school-info" element={<SchoolList />} />
          <Route
            path="settings/school-info/:id/edit"
            element={<UpdateSchool />}
          />
        </Route>

        <Route path="/teacher" element={<TeacherRoute />}>
          <Route path="exam-category" element={<TExamCategoryList />} />
          <Route path="exam-category/create" element={<TAddExamCategory />} />
          <Route path="exam-category/:id/show" element={<TShowExamCategory />} />
          <Route path="exam-category/:id/edit" element={<TUpdateExamCategory />} />

          <Route path="driver" element={<TDriverList />} />
          <Route path="driver/:id/show" element={<TShowDriver />} />

          <Route path="vehicles" element={<TVehicleList />} />
          <Route path="vehicles/:id/show" element={<TShowVehicle />} />

          <Route path="backOffice" element={<TBackOfficeList />} />
          <Route path="backOffice/:id/show" element={<TShowBackOffice />} />

          <Route path="event" element={<TEventList />} />
          <Route path="event/:id/show" element={<TShowEvent />} />

          <Route path="notice" element={<TNoticeList />} />
          <Route path="notice/:id/show" element={<TShowNotice />} />

          <Route path="gallery" element={<TGallery />} />

          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="profile" element={<TeacherProfile />} />

          <Route path="exams" element={<TExamList />} />
          <Route path="exams/:id/show" element={<TShowExam />} />

          <Route path="subject/view" element={<TSubjectList />} />
          <Route path="subjects/:id/show" element={<TShowSubject />} />

          <Route path="students" element={<TStudentList />} />
          <Route path="students/:id/show" element={<TShowStudent />} />

          <Route path="teachers" element={<TTeacherList />} />
          <Route path="teachers/:id/show" element={<TShowTeacher />} />

          <Route path="parents" element={<TParentList />} />
          <Route path="parents/:id/show" element={<TShowParent />} />

          <Route path="sections" element={<TSectionList />} />
          <Route path="sections/:id/show" element={<TShowSection />} />

          <Route path="grades" element={<TGradeList />} />
          <Route path="grades/:id/show" element={<TShowGrade />} />

          <Route path="syllabuses" element={<TSyllabusList />} />
          <Route path="syllabuses/:id/show" element={<TShowSyllabus />} />

          <Route path="routines" element={<TRoutineList />} />
          <Route path="routines/:id/show" element={<TShowRoutine />} />

          <Route path="marks" element={<TMarkList />} />
          <Route path="marks/:id/show" element={<TShowMark />} />

          <Route path="classes" element={<TClassesList />} />
          <Route path="classes/:id/show" element={<TShowClasses />} />

          <Route path="classroom" element={<TClassRoomList />} />
          <Route path="classroom/:id/show" element={<TShowClassRoom />} />
        </Route>

        <Route path="/student" element={<StudentRoute />}>
          <Route path="driver" element={<SDriverList />} />
          <Route path="driver/:id/show" element={<SShowDriver />} />

          <Route path="vehicles" element={<SVehicleList />} />
          <Route path="vehicles/:id/show" element={<SShowVehicle />} />

          <Route path="backOffice" element={<SBackOfficeList />} />
          <Route path="backOffice/:id/show" element={<SShowBackOffice />} />

          <Route path="event" element={<SEventList />} />
          <Route path="event/:id/show" element={<SShowEvent />} />

          <Route path="gallery" element={<SGallery />} />

          <Route path="notice" element={<SNoticeList />} />
          <Route path="notice/:id/show" element={<SShowNotice />} />

          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />

          <Route path="exams" element={<SExamList />} />
          <Route path="exams/:id/show" element={<SShowExam />} />

          <Route path="subject/view" element={<SSubjectList />} />
          <Route path="subjects/:id/show" element={<SShowSubject />} />

          <Route path="students" element={<SStudentList />} />
          <Route path="students/:id/show" element={<SShowStudent />} />

          <Route path="teachers" element={<STeacherList />} />
          <Route path="teachers/:id/show" element={<SShowTeacher />} />

          <Route path="sections" element={<SSectionList />} />
          <Route path="sections/:id/show" element={<SShowSection />} />

          <Route path="grades" element={<SGradeList />} />
          <Route path="grades/:id/show" element={<SShowGrade />} />

          <Route path="syllabuses" element={<SSyllabusList />} />
          <Route path="syllabuses/:id/show" element={<SShowSyllabus />} />

          <Route path="routines" element={<SRoutineList />} />
          <Route path="routines/:id/show" element={<SShowRoutine />} />

          <Route path="marks" element={<SMarkList />} />
          <Route path="marks/:id/show" element={<SShowMark />} />

          <Route path="classes" element={<SClassesList />} />
          <Route path="classes/:id/show" element={<SShowClasses />} />

          <Route path="classroom" element={<SClassRoomList />} />
          <Route path="classroom/:id/show" element={<SShowClassRoom />} />
        </Route>

        <Route path="/parent" element={<ParentRoute />}>
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="profile" element={<ParentProfile />} />

          <Route path="exams" element={<PExamList />} />
          <Route path="exams/:id/show" element={<PShowExam />} />

          <Route path="subject/view" element={<PSubjectList />} />
          <Route path="subjects/:id/show" element={<PShowSubject />} />

          <Route path="students" element={<PStudentList />} />
          <Route path="students/:id/show" element={<PShowStudent />} />

          <Route path="teachers" element={<PTeacherList />} />
          <Route path="teachers/:id/show" element={<PShowTeacher />} />

          <Route path="parents" element={<PParentList />} />
          <Route path="parents/:id/show" element={<PShowParent />} />

          <Route path="sections" element={<PSectionList />} />
          <Route path="sections/:id/show" element={<PShowSection />} />

          <Route path="grades" element={<PGradeList />} />
          <Route path="grades/:id/show" element={<PShowGrade />} />

          <Route path="syllabuses" element={<PSyllabusList />} />
          <Route path="syllabuses/:id/show" element={<PShowSyllabus />} />

          <Route path="routines" element={<PRoutineList />} />
          <Route path="routines/:id/show" element={<PShowRoutine />} />

          <Route path="marks" element={<PMarkList />} />
          <Route path="marks/:id/show" element={<PShowMark />} />

          <Route path="classes" element={<PClassesList />} />
          <Route path="classes/:id/show" element={<PShowClasses />} />

          <Route path="classroom" element={<PClassRoomList />} />
          <Route path="classroom/:id/show" element={<PShowClassRoom />} />
        </Route>
        {/* Private Routes end */}
      </Routes>
    </>
  );
};
export default App;

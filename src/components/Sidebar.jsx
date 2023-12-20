import React, { useEffect, useState } from "react";
import "../assets/css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  let role = localStorage.getItem("role");

  if (role === "1") {
    return (
      <>
        <div className="sidebar py-5 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div>
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
              <span className="sidenav-menu-heading">CORE</span>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <span className="sidenav-menu-heading">INTERFACE</span>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Users</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 3 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(3)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/admin"
                      aria-current="page"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Admin</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link className="nav-link text-white" to="/admin/students">
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Student</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 5 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(5)}
                  >
                    <Link className="nav-link text-white" to="/admin/parents">
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Parent</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 5 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(5)}
                  >
                    <Link className="nav-link text-white" to="/admin/teachers">
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Teacher</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 5 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(5)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/librarian"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Librarians</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 5 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(5)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/accountant"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Accountant</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  active === 6 ? "active nav-item p-2" : "nav-item p-2"
                }
                onClick={(e) => setActive(6)}
              >
                <Link
                  to="/admin/admissions"
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-newspaper"></i>
                  <span className="ms-2 d-none d-sm-inline">Admissions</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts1"
                  aria-expanded="false"
                  aria-controls="collapseLayouts1"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Examinations</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts1"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/exam-category"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Exam Category</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 6 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(6)}
                  >
                    <Link
                      to="/admin/exams"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-newspaper"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Offilne Exam
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 10 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(10)}
                  >
                    <Link
                      to="/admin/marks"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-file-earmark-medical-fill"></i>
                      <span className="ms-2 d-none d-sm-inline">Marks</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 15 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(15)}
                  >
                    <Link
                      to="/admin/grades"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-list-stars"></i>
                      <span className="ms-2 d-none d-sm-inline">Grades</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts3"
                  aria-expanded="false"
                  aria-controls="collapseLayouts3"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Academic</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts3"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 14 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(14)}
                  >
                    <Link
                      to="/admin/classes"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-book-half"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Class list
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 11 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(11)}
                  >
                    <Link
                      to="/admin/routines"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-bookmark-check"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Class Routine
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 9 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(9)}
                  >
                    <Link
                      to="/admin/subject/view"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-book"></i>
                      <span className="ms-2 d-none d-sm-inline">Subjects</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 7 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => {
                      setActive(7);
                    }}
                  >
                    <Link
                      to="/admin/classroom"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-house-door"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Class Room
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 12 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(12)}
                  >
                    <Link
                      to="/admin/sections"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-bar-chart-steps"></i>
                      <span className="ms-2 d-none d-sm-inline">Section</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 13 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(13)}
                  >
                    <Link
                      to="/admin/syllabuses"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-card-checklist"></i>
                      <span className="ms-2 d-none d-sm-inline">Syllabus</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts5"
                  aria-expanded="false"
                  aria-controls="collapseLayouts5"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Transport</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts5"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link className="nav-link text-white" to="/admin/driver">
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Driver</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 6 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(6)}
                  >
                    <Link
                      to="/admin/vehicles"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-newspaper"></i>
                      <span className="ms-2 d-none d-sm-inline">Vehicle</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 10 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(10)}
                  >
                    <Link
                      to="/admin/assignStudents"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-file-earmark-medical-fill"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Assign student
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts6"
                  aria-expanded="false"
                  aria-controls="collapseLayouts6"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Alumni</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts6"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/manage-alumni"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Manage Alumni</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 6 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(6)}
                  >
                    <Link
                      to="/admin/gallery"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-newspaper"></i>
                      <span className="ms-2 d-none d-sm-inline">Gallery</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 10 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(10)}
                  >
                    <Link
                      to="/admin/events"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-file-earmark-medical-fill"></i>
                      <span className="ms-2 d-none d-sm-inline">Events</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  active === 10 ? "active nav-item p-2" : "nav-item p-2"
                }
                onClick={(e) => setActive(10)}
              >
                <Link
                  to="/admin/assignments
                      "
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-file-earmark-medical-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Assignments</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts4"
                  aria-expanded="false"
                  aria-controls="collapseLayouts4"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Back office</span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts4"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link
                      className="nav-link text-white"
                      to="/admin/backOffice"
                    >
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">Book List Manager</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 6 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(6)}
                  >
                    <Link
                      to="/admin/noticeboard"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-newspaper"></i>
                      <span className="ms-2 d-none d-sm-inline">Noticeboard</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 10 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(10)}
                  >
                    <Link
                      to="/admin/events"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-file-earmark-medical-fill"></i>
                      <span className="ms-2 d-none d-sm-inline">Events</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts2"
                  aria-expanded="false"
                  aria-controls="collapseLayouts2"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Human Resource
                  </span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts2"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li
                    className={
                      active === 4 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(4)}
                  >
                    <Link className="nav-link text-white" to="/admin/user-role">
                      <i className="bi bi-person-circle icon"></i>
                      <span className="d-none d-sm-inline">User Roles</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 6 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(6)}
                  >
                    <Link
                      to="/admin/user-list"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-newspaper"></i>
                      <span className="ms-2 d-none d-sm-inline">User List</span>
                    </Link>
                  </li>
                  <li
                    className={
                      active === 10 ? "active nav-item p-2" : "nav-item p-2"
                    }
                    onClick={(e) => setActive(10)}
                  >
                    <Link
                      to="/admin/take-attendance"
                      className="nav-link text-white text-center text-sm-start"
                      aria-current="page"
                    >
                      <i className="bi bi-file-earmark-medical-fill"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Take Attendance
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <span className="sidenav-menu-heading">SETTINGS</span>
              <li
                className={
                  active === 8 ? "active nav-item p-2" : "nav-item p-2"
                }
                onClick={(e) => setActive(8)}
              >
                <Link
                  to="/admin/settings/school-info"
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">School Settings</span>
                </Link>
              </li>
              <li
                className={
                  active === 8 ? "active nav-item p-2" : "nav-item p-2"
                }
                onClick={(e) => setActive(8)}
              >
                <Link
                  to="/admin/profile"
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">My Account</span>
                </Link>
              </li>
              {/* <span className="sidenav-menu-heading">AUTHENTICATION</span>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts1"
                  aria-expanded="false"
                  aria-controls="collapseLayouts1"
                >
                  <i className="bi bi-shop"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Authentication
                  </span>
                  <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="collapse"
                  id="collapseLayouts1"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li className="nav-item">
                    <a
                      href='/login'
                      className="nav-link text-white"
                      aria-current="page"
                    >
                      <i className="bi bi-browser-safari icon"></i>
                      <span className="d-none d-sm-inline">Login</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/register">
                      <i className="bi bi-browser-safari icon"></i>
                      <span className="d-none d-sm-inline">register</span>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </>
    );
  } else if (role === "2") {
    return (
      <div className="sidebar py-5 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
        <div>
          <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
            <span className="sidenav-menu-heading">CORE</span>
            <li
              className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(1)}
            >
              <a
                href="/teacher/home"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2 d-none d-sm-inline ">Home</span>
              </a>
            </li>
            <span className="sidenav-menu-heading">INTERFACE</span>
            <li
              className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(2)}
            >
              <a
                href="#"
                className="nav-link text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <i className="bi bi-people"></i>
                <span className="ms-2 d-none d-sm-inline">Users</span>
                <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
              </a>
              <ul
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <li
                  className={
                    active === 4 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(4)}
                >
                  <a className="nav-link text-white" href="/teacher/students">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Student</span>
                  </a>
                </li>
                <li
                  className={
                    active === 5 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(5)}
                >
                  <a className="nav-link text-white" href="/teacher/parents">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Parent</span>
                  </a>
                </li>
                <li
                  className={
                    active === 5 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(5)}
                >
                  <a className="nav-link text-white" href="/teacher/teachers">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Teacher</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(6)}
            >
              <a
                href="/teacher/exams"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-newspaper"></i>
                <span className="ms-2 d-none d-sm-inline">Exam</span>
              </a>
            </li>
            <li
              className={active === 10 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(10)}
            >
              <a
                href="/teacher/marks"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-file-earmark-medical-fill"></i>
                <span className="ms-2 d-none d-sm-inline">Marks</span>
              </a>
            </li>
            <li
              className={active === 11 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(11)}
            >
              <a
                href="/teacher/routines"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bookmark-check"></i>
                <span className="ms-2 d-none d-sm-inline">Routine</span>
              </a>
            </li>
            <li
              className={active === 12 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(12)}
            >
              <a
                href="/teacher/sections"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bar-chart-steps"></i>
                <span className="ms-2 d-none d-sm-inline">Section</span>
              </a>
            </li>
            <li
              className={active === 13 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(13)}
            >
              <a
                href="/teacher/syllabuses"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-card-checklist"></i>
                <span className="ms-2 d-none d-sm-inline">Syllabus</span>
              </a>
            </li>
            <li
              className={active === 14 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(14)}
            >
              <a
                href="/teacher/classes"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book-half"></i>
                <span className="ms-2 d-none d-sm-inline">Class</span>
              </a>
            </li>
            <li
              className={active === 15 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(15)}
            >
              <a
                href="/teacher/grades"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-list-stars"></i>
                <span className="ms-2 d-none d-sm-inline">Grade</span>
              </a>
            </li>
            <li
              className={active === 9 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(9)}
            >
              <a
                href="/teacher/subject/view"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book"></i>
                <span className="ms-2 d-none d-sm-inline">Subject</span>
              </a>
            </li>
            <li
              className={active === 7 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => {
                setActive(7);
              }}
            >
              <a
                href="/teacher/classroom"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-house-door"></i>
                <span className="ms-2 d-none d-sm-inline">Class Room</span>
              </a>
            </li>
            {/* <span className="sidenav-menu-heading">AUTHENTICATION</span>
          <li className="nav-item my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts1"
              aria-expanded="false"
              aria-controls="collapseLayouts1"
            >
              <i className="bi bi-shop"></i>
              <span className="ms-2 d-none d-sm-inline">Authentication</span>
              <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
            </a>
            <ul
              className="collapse"
              id="collapseLayouts1"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <li className="nav-item">
                <a
                  href='/login'
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="bi bi-browser-safari icon"></i>
                  <span className="d-none d-sm-inline">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/register">
                  <i className="bi bi-browser-safari icon"></i>
                  <span className="d-none d-sm-inline">register</span>
                </a>
              </li>
            </ul>
          </li> */}
          </ul>
        </div>
      </div>
    );
  } else if (role === "4") {
    return (
      <div className="sidebar py-5 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
        <div>
          <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
            <span className="sidenav-menu-heading">CORE</span>
            <li
              className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(1)}
            >
              <a
                href="/parent/home"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2 d-none d-sm-inline ">Home</span>
              </a>
            </li>
            <span className="sidenav-menu-heading">INTERFACE</span>
            <li
              className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(2)}
            >
              <a
                href="#"
                className="nav-link text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <i className="bi bi-people"></i>
                <span className="ms-2 d-none d-sm-inline">Users</span>
                <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
              </a>
              <ul
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <li
                  className={
                    active === 4 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(4)}
                >
                  <a className="nav-link text-white" href="/parent/students">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Student</span>
                  </a>
                </li>
                <li
                  className={
                    active === 5 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(5)}
                >
                  <a className="nav-link text-white" href="/parent/parents">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Parent</span>
                  </a>
                </li>
                <li
                  className={
                    active === 5 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(5)}
                >
                  <a className="nav-link text-white" href="/parent/teachers">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Teacher</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(6)}
            >
              <a
                href="/parent/exams"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-newspaper"></i>
                <span className="ms-2 d-none d-sm-inline">Exam</span>
              </a>
            </li>
            <li
              className={active === 10 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(10)}
            >
              <a
                href="/parent/marks"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-file-earmark-medical-fill"></i>
                <span className="ms-2 d-none d-sm-inline">Marks</span>
              </a>
            </li>
            <li
              className={active === 11 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(11)}
            >
              <a
                href="/parent/routines"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bookmark-check"></i>
                <span className="ms-2 d-none d-sm-inline">Routine</span>
              </a>
            </li>
            <li
              className={active === 12 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(12)}
            >
              <a
                href="/parent/sections"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bar-chart-steps"></i>
                <span className="ms-2 d-none d-sm-inline">Section</span>
              </a>
            </li>
            <li
              className={active === 13 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(13)}
            >
              <a
                href="/parent/syllabuses"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-card-checklist"></i>
                <span className="ms-2 d-none d-sm-inline">Syllabus</span>
              </a>
            </li>
            <li
              className={active === 14 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(14)}
            >
              <a
                href="/parent/classes"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book-half"></i>
                <span className="ms-2 d-none d-sm-inline">Class</span>
              </a>
            </li>
            <li
              className={active === 15 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(15)}
            >
              <a
                href="/parent/grades"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-list-stars"></i>
                <span className="ms-2 d-none d-sm-inline">Grade</span>
              </a>
            </li>
            <li
              className={active === 9 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(9)}
            >
              <a
                href="/parent/subject/view"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book"></i>
                <span className="ms-2 d-none d-sm-inline">Subject</span>
              </a>
            </li>
            <li
              className={active === 7 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => {
                setActive(7);
              }}
            >
              <a
                href="/parent/classroom"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-house-door"></i>
                <span className="ms-2 d-none d-sm-inline">Class Room</span>
              </a>
            </li>
            {/* <span className="sidenav-menu-heading">AUTHENTICATION</span>
            <li className="nav-item my-1 py-2 py-sm-0">
              <a
                href="#"
                className="nav-link text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts1"
                aria-expanded="false"
                aria-controls="collapseLayouts1"
              >
                <i className="bi bi-shop"></i>
                <span className="ms-2 d-none d-sm-inline">Authentication</span>
                <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
              </a>
              <ul
                className="collapse"
                id="collapseLayouts1"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <li className="nav-item">
                  <a
                    href='/login'
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="bi bi-browser-safari icon"></i>
                    <span className="d-none d-sm-inline">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/register">
                    <i className="bi bi-browser-safari icon"></i>
                    <span className="d-none d-sm-inline">register</span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    );
  } else if (role === "3") {
    return (
      <div className="sidebar py-5 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
        <div>
          <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
            <span className="sidenav-menu-heading">CORE</span>
            <li
              className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(1)}
            >
              <a
                href="/student/home"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2 d-none d-sm-inline ">Home</span>
              </a>
            </li>
            <span className="sidenav-menu-heading">INTERFACE</span>
            <li
              className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(2)}
            >
              <a
                href="#"
                className="nav-link text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <i className="bi bi-people"></i>
                <span className="ms-2 d-none d-sm-inline">Users</span>
                <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
              </a>
              <ul
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <li
                  className={
                    active === 4 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(4)}
                >
                  <a className="nav-link text-white" href="/student/students">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Student</span>
                  </a>
                </li>
                <li
                  className={
                    active === 5 ? "active nav-item p-2" : "nav-item p-2"
                  }
                  onClick={(e) => setActive(5)}
                >
                  <a className="nav-link text-white" href="/student/teachers">
                    <i className="bi bi-person-circle icon"></i>
                    <span className="d-none d-sm-inline">Teacher</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(6)}
            >
              <a
                href="/student/exams"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-newspaper"></i>
                <span className="ms-2 d-none d-sm-inline">Exam</span>
              </a>
            </li>
            <li
              className={active === 10 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(10)}
            >
              <a
                href="/student/marks"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-file-earmark-medical-fill"></i>
                <span className="ms-2 d-none d-sm-inline">Marks</span>
              </a>
            </li>
            <li
              className={active === 11 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(11)}
            >
              <a
                href="/student/routines"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bookmark-check"></i>
                <span className="ms-2 d-none d-sm-inline">Routine</span>
              </a>
            </li>
            <li
              className={active === 12 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(12)}
            >
              <a
                href="/student/sections"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-bar-chart-steps"></i>
                <span className="ms-2 d-none d-sm-inline">Section</span>
              </a>
            </li>
            <li
              className={active === 13 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(13)}
            >
              <a
                href="/student/syllabuses"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-card-checklist"></i>
                <span className="ms-2 d-none d-sm-inline">Syllabus</span>
              </a>
            </li>
            <li
              className={active === 14 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(14)}
            >
              <a
                href="/student/classes"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book-half"></i>
                <span className="ms-2 d-none d-sm-inline">Class</span>
              </a>
            </li>
            <li
              className={active === 15 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(15)}
            >
              <a
                href="/student/grades"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-list-stars"></i>
                <span className="ms-2 d-none d-sm-inline">Grade</span>
              </a>
            </li>
            <li
              className={active === 9 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(9)}
            >
              <a
                href="/student/subject/view"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-book"></i>
                <span className="ms-2 d-none d-sm-inline">Subject</span>
              </a>
            </li>
            <li
              className={active === 7 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => {
                setActive(7);
              }}
            >
              <a
                href="/student/classroom"
                className="nav-link text-white text-center text-sm-start"
                aria-current="page"
              >
                <i className="bi bi-house-door"></i>
                <span className="ms-2 d-none d-sm-inline">Class Room</span>
              </a>
            </li>
            {/* <span className="sidenav-menu-heading">AUTHENTICATION</span>
            <li className="nav-item my-1 py-2 py-sm-0">
              <a
                href="#"
                className="nav-link text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts1"
                aria-expanded="false"
                aria-controls="collapseLayouts1"
              >
                <i className="bi bi-shop"></i>
                <span className="ms-2 d-none d-sm-inline">Authentication</span>
                <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
              </a>
              <ul
                className="collapse"
                id="collapseLayouts1"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <li className="nav-item">
                  <a
                    href="/login"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="bi bi-browser-safari icon"></i>
                    <span className="d-none d-sm-inline">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/register">
                    <i className="bi bi-browser-safari icon"></i>
                    <span className="d-none d-sm-inline">register</span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
};

export default Sidebar;

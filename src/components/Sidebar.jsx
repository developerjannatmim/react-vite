import React, { useState } from "react";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar py-5 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
      <div>
        <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
          <span className="sidenav-menu-heading">CORE</span>
          <li
            className={
              active === 1
                ? 'active nav-item p-2'
                : 'nav-item p-2'
            }
            onClick={e => setActive(1)}
          >
            <a
              href="/dashboard"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-speedometer2"></i>
              <span className="ms-2 d-none d-sm-inline ">Dashboard</span>
            </a>
          </li>
          <span className="sidenav-menu-heading">INTERFACE</span>
          <li
            className={
              active === 2
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
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
                  active === 3
                    ? "active nav-item p-2"
                    : "nav-item p-2"
                }
                onClick={(e) => setActive(3)}
              >
                <a
                  className="nav-link text-white"
                  href="/admin"
                  aria-current="page"
                >
                  <i className="bi bi-person-circle icon"></i>
                  <span className="d-none d-sm-inline">Admin</span>
                </a>
              </li>
              <li
                className={
                  active === 4
                    ? "active nav-item p-2"
                    : "nav-item p-2"
                }
                onClick={(e) => setActive(4)}
              >
                <a className="nav-link text-white" href="/students">
                  <i className="bi bi-person-circle icon"></i>
                  <span className="d-none d-sm-inline">Student</span>
                </a>
              </li>
              <li
                className={
                  active === 5
                    ? "active nav-item p-2"
                    : "nav-item p-2"
                }
                onClick={(e) => setActive(5)}
              >
                <a className="nav-link text-white" href="/parents">
                  <i className="bi bi-person-circle icon"></i>
                  <span className="d-none d-sm-inline">Parent</span>
                </a>
              </li>
              <li
                className={
                  active === 5
                    ? "active nav-item p-2"
                    : "nav-item p-2"
                }
                onClick={(e) => setActive(5)}
              >
                <a className="nav-link text-white" href="/teachers">
                  <i className="bi bi-person-circle icon"></i>
                  <span className="d-none d-sm-inline">Teacher</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className={
              active === 6
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(6)}
          >
            <a
              href="/exams"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Exam</span>
            </a>
          </li>
          <li
            className={
              active === 10
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(10)}
          >
            <a
              href="/marks"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Marks</span>
            </a>
          </li>
          <li
            className={
              active === 11
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(11)}
          >
            <a
              href="/routines"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Routine</span>
            </a>
          </li>
          <li
            className={
              active === 12
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(12)}
          >
            <a
              href="/sections"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Section</span>
            </a>
          </li>
          <li
            className={
              active === 13
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(13)}
          >
            <a
              href="/syllabuses"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Syllabus</span>
            </a>
          </li>
          <li
            className={
              active === 14
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(14)}
          >
            <a
              href="/classes"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Class</span>
            </a>
          </li>
          <li
            className={
              active === 15
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(15)}
          >
            <a
              href="/grades"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Grade</span>
            </a>
          </li>
          <li
            className={
              active === 9
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => setActive(9)}
          >
            <a
              href="/subject/view"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Subject</span>
            </a>
          </li>
          <li
            className={
              active === 7
                ? "active nav-item p-2"
                : "nav-item p-2"
            }
            onClick={(e) => {
              setActive(7);
            }}
          >
            <a
              href="/classroom"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Class Room</span>
            </a>
          </li>
          <li
            className={
              active === 8
                ? 'active nav-item p-2'
                : 'nav-item p-2'
            }
            onClick={e => setActive(8)}
          >
            <a
              href="school-info"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-house"></i>
              <span className="ms-2 d-none d-sm-inline">School</span>
            </a>
          </li>
          <span className="sidenav-menu-heading">SETTINGS</span>
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
              <span className="ms-2 d-none d-sm-inline">Settings</span>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

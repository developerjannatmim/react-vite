import React, { useState } from "react";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar py-3 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
      <div>
        <a
          className="p-3 text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
          role="button"
          href="#"
        >
          <span className="f5-4">Side Menu</span>
        </a>
        <hr className="text-white d-none d-sm-block"></hr>
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
              href="/"
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
                  <i class="bi bi-person-circle icon"></i>
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
                  <i class="bi bi-person-circle icon"></i>
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
                <a className="nav-link text-white" href="#">
                  <i class="bi bi-person-circle icon"></i>
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
              href="/exam"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Exam</span>
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
              href="/class"
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
              href="#"
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
              <i class="bi bi-shop"></i>
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
                  className="nav-link text-white"
                  href="/login"
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

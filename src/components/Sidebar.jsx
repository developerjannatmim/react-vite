import React, { useState } from "react";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="py-3 ps-3 pe-5 bg-dark d-flex flex-column justify-content-between min-vh-100">
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
          <li className={active === 1 ? 'active nav nav-pills mt-2 mt-sm-0' : 'nav nav-pills mt-2 mt-sm-0'} onClick={(e) => setActive(1)}>
            <a
              href="#"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-speedometer2"></i>
              <span className="ms-2 d-none d-sm-inline ">Dashboard</span>
            </a>
          </li>
          <li className={active === 2 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(2)}>
            <a
              href="#submenu"
              className="nav-link text-white text-center text-sm-start"
              data-bs-toggle="collapse"
              aria-current="page"
            >
              <i className="bi bi-people"></i>
              <span className="ms-2 d-none d-sm-inline">Users</span>
              <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
            </a>
            <ul
              className="nav collapse flex-column"
              id="submenu"
              data-bs-toggle="#parentM"
            >
              <li className={active === 3 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(3)}>
                <a
                  className="nav-link text-white"
                  href="/admin"
                  aria-current="page"
                >
                  <span className="d-none d-sm-inline">Admin</span>
                </a>
              </li>
              <li className={active === 4 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(4)}>
                <a className="nav-link text-white" href="/students">
                  <span className="d-none d-sm-inline">Student</span>
                </a>
              </li>
              <li className={active === 5 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(5)}>
                <a className="nav-link text-white" href="#">
                  <span className="d-none d-sm-inline">Teacher</span>
                </a>
              </li>
            </ul>
          </li>
          <li className={active === 6 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(6)}>
            <a
              href="/exam"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Exam</span>
            </a>
          </li>
          <li className={active === 7 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => {setActive(7)}}>
            <a
              href="/class"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-book"></i>
              <span className="ms-2 d-none d-sm-inline">Class Room</span>
            </a>
          </li>
          <li className={active === 8 ? 'active nav nav-pills flex-column mt-2 mt-sm-0' : 'nav nav-pills flex-column mt-2 mt-sm-0'} onClick={(e) => setActive(8)}>
            <a
              href="#"
              className="nav-link text-white text-center text-sm-start"
              aria-current="page"
            >
              <i className="bi bi-house"></i>
              <span className="ms-2 d-none d-sm-inline">School</span>
            </a>
          </li>
          <li className="nav-item my-1 py-2 py-sm-0">
            <a
              href="#submenu1"
              className="nav-link text-white text-center text-sm-start"
              data-bs-toggle="collapse"
              aria-current="page"
            >
              <i className="bi bi-people"></i>
              <span className="ms-2 d-none d-sm-inline">Settings</span>
              <i className="bi bi-caret-down arrow ms-0 ms-sm-3"></i>
            </a>
            <ul
              className="nav collapse ms-2 flex-column"
              id="submenu1"
              data-bs-parent="#parentM"
            >
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="/login"
                  aria-current="page"
                >
                  <span className="d-none d-sm-inline">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/register">
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

import React from 'react';
import '../assets/css/Header.css';
import { useNavigate, Link } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          Cantoment Primary School
        </a>
        <a className="navbar-brand d-block d-md-none">
          <i className="bi bi-justify"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="btnNavbarSearch"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle collapsed"
              data-bs-toggle="collapse"
              aria-haspopup="true"
              data-bs-target="#navbarDropdown"
              aria-expanded="collapse"
              aria-controls="navbarDropdown"
              href="#"
            >
              <i className="bi bi-people"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              id="navbarDropdown"
              aria-labelledby="navbarDropdown"
            >
              <li className='dropdown-list'>
                <Link className="dropdown-item" to="/admin/profile">
                  Account
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className='dropdown-list'>
                <button onClick={handleClick} className="dropdown-item">
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;

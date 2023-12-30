import React from 'react';
import { useState } from 'react';

import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import './../assets/css/style.css';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import AdminHeader from './AdminHeader';
import student from './../assets/img/dashboard/students.jpg';
import parent from './../assets/img/dashboard/parents.jpg';
import teacher from './../assets/img/dashboard/teachers.jpg';
import stuff from './../assets/img/dashboard/stuff.jpg';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";


const AdminDashboard = () => {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  const authUserInfo = JSON.parse(localStorage.getItem('auth_info'));
  const userName = authUserInfo.auth_name;

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="mt-5 container" style={{ marginLeft: '260px' }}>
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">Welcome to Admin Dashboard</li>
              </ol>
              <span className="user_role">
                <b>Admin</b>
              </span>
              <br></br>
              <span className="auth_user">
                User Name: <b>{userName}</b>
              </span>
              <div className="row mt-4">
                <div className="col-3 col-sm-6" style={{ marginLeft: '-25px' }}>
                  <div
                    className="card bg-warning text-white mb-4"
                    style={{ width: '480px', height: '380px' }}
                  >
                    <div className="card-body">
                      <img src={student} />
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/admin/students"
                      >
                        <FaUserLarge /> Total 750 Students
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  style={{ marginLeft: '-100px' }}
                >
                  <div
                    className="card bg-success text-white mb-4"
                    style={{ width: '480px', height: '380px' }}
                  >
                    <div className="card-body">
                      <img src={teacher} />
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/admin/teachers"
                      >
                        <FaUserLarge /> Total 280 Teachers
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  style={{ marginLeft: '-25px' }}
                >
                  <div
                    className="card bg-danger text-white mb-4"
                    style={{ width: '480px', height: '380px' }}
                  >
                    <div className="card-body">
                      <img src={parent} />
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/admin/parents"
                      >
                        <FaUserLarge /> Total 745 Parents
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  style={{ marginLeft: '-100px' }}
                >
                  <div
                    className="card bg-primary text-white mb-4"
                    style={{ width: '480px', height: '380px' }}
                  >
                    <div className="card-body">
                      <img src={stuff} />
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/admin/users"
                      >
                        <FaUserLarge /> Total 150 Stuff
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* google map */}
                <div className="col-xl-6 dash_map">
                <div className="mb-2"><FaMapMarkedAlt /> <b>Google Map</b></div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98686.74226621154!2d89.05814480082303!3d23.18960909464772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10a851858de5%3A0x445f821ed3e307a0!2sCantonment%20High%20School%2C%20Jashore!5e0!3m2!1sen!2sbd!4v1703869555210!5m2!1sen!2sbd" width="500" height="280" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-xl-6">
                  <div style={{ marginLeft: '-50px' }}>
                    <div className="mb-2"><FaCalendarAlt /> <b>Calender</b></div>
                    <Calendar onChange={changeValue} value={date} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;

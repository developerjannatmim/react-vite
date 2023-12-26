import React from "react";
import Footer from "./Footer";
import { useState } from 'react';
import "./../assets/css/style.css";
import { Link } from 'react-router-dom';
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import student from './../assets/img/dashboard/students.jpg';
import parent from './../assets/img/dashboard/parents.jpg';
import teacher from './../assets/img/dashboard/teachers.jpg';
import stuff from './../assets/img/dashboard/stuff.jpg';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const TeacherDashboard = () => {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  const authUserInfo = JSON.parse(localStorage.getItem("auth_info"));
  const userName = authUserInfo.auth_name;

  return (
    <>
      <div>
        <TeacherHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <TeacherSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="mt-5 container" style={{ marginLeft: '260px' }}>
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">Welcome to StuTeacherdent Dashboard</li>
              </ol>
              <span className="user_role">
                <b>Teacher</b>
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
                        <FaUserLarge /> Total 80 Teachers
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.9331509937015!2d89.
                      20040797411622!3d23.172639810713665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                      1!3m3!1m2!1s0x39ff112a602d68ff%3A0xb3b85ec88687eb53!2z4KaG4Kas4KeN4Kam4KeB4Kay
                      IOCml-Cmq-CngeCmsCDgpo_gppXgpr7gpqHgp4fgpq7gp4Ag4Kau4Ka-4Kan4KeN4Kav4Kau4Ka_4KaVIOCmrOCmv-CmpuCnjeCmr-CmvuCms
                      uCmr-CmvA!5e0!3m2!1sen!2sbd!4v1701937958811!5m2!1sen!2sbd"
                    width="470"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

export default TeacherDashboard;

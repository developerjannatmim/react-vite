import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import './../../assets/css/exam.css';
import AdminSidebar from './../../components/AdminSidebar';

const ShowAssignStudent = () => {
  const [assignStudentItem, setAssignStudentItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/assignStudents/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAssignStudentItem(response.data?.assignStudent);
      })
      .catch((error) => {
        console.error(error);
        setAssignStudentItem(null);
      });
  }, [id]);

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
          <div className="mt-5 container">
            <div className="card">
              <div className="card-header">
                <h4>Assign Student Details</h4>
                <Link
                  to="/admin/assignStudents"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px' }}
                >
                  Assign Student List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Assign Student Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{assignStudentItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Vehicle Model</label>
                        </div>
                        <div class="col-md-6">
                          <p>{assignStudentItem?.vehicle?.vehicle_model}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Driver Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{assignStudentItem?.driver?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Student Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{assignStudentItem?.student?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class</label>
                        </div>
                        <div class="col-md-6">
                          <p>{assignStudentItem?.class?.name}</p>
                        </div>
                      </li>
                    </ol>
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

export default ShowAssignStudent;

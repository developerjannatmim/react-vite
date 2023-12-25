import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import './../../assets/css/exam.css';
import AdminSidebar from './../../components/AdminSidebar';

const ShowExam = () => {
  const [examItem, setExamItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exams/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamItem(response.data?.exam);
      })
      .catch((error) => {
        console.error(error);
        setExamItem(null);
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
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Exam Details</h4>
                <Link
                  to="/admin/exams"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Exam List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Exam Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Exam Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.exam_category?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Starting Time</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.starting_time}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Ending Time</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.ending_time}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Total Marks</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.total_marks}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.class?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Section No.</label>
                        </div>
                        <div class="col-md-6">
                          <p>{examItem?.section?.name}</p>
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

export default ShowExam;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const ShowSyllabus = () => {
  const [syllabusItem, setSyllabusItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/syllabuses/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabusItem(response.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
        setSyllabusItem(null);
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
                <h4>Syllabus Details</h4>
                <Link
                  to="/admin/syllabuses"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px' }}
                >
                  Syllabus List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{syllabusItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Syllabus</label>
                        </div>
                        <div class="col-md-6">
                          <p>{syllabusItem?.title}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class</label>
                        </div>
                        <div class="col-md-6">
                          <p>{syllabusItem?.class?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Subject</label>
                        </div>
                        <div class="col-md-6">
                          <p>{syllabusItem?.subject?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Section</label>
                        </div>
                        <div class="col-md-6">
                          <p>{syllabusItem?.section?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>File</label>
                        </div>
                        <div class="col-md-6">
                          <img
                            src={`http://127.0.0.1:8000/syllabus-images/${syllabusItem?.file}`}
                            width="40"
                          />
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

export default ShowSyllabus;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TeacherSidebar from './../../components/TeacherSidebar';
import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';

const ShowSubject = () => {
  const [subjectItem, setSubjectItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/subjects/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubjectItem(response.data?.subject);
      })
      .catch((error) => {
        console.error(error);
        setSubjectItem(null);
      });
  }, [id]);

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
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Subject Details</h4>
                <Link
                  to="/teacher/subject/view"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Subject List
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
                          <p>{subjectItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class</label>
                        </div>
                        <div class="col-md-6">
                          <p>{subjectItem?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Subject</label>
                        </div>
                        <div class="col-md-6">
                          <p>{subjectItem?.class?.name}</p>
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

export default ShowSubject;

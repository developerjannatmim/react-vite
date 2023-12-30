import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';
import TeacherSidebar from './../../components/TeacherSidebar';

const ShowClasses = () => {
  const [classItem, setClassItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassItem(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClassItem(null);
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
        <div className="mt-5 d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Class Details</h4>
                <Link
                  to="/teacher/classes"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Class List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{classItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{classItem?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Section Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>{classItem?.section?.name}</p>
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

export default ShowClasses;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import StudentSidebar from './../../components/StudentSidebar';
import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';

const ShowGrade = () => {
  const [gradeItem, setGradeItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grades/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGradeItem(response.data?.grade);
      })
      .catch((error) => {
        console.error(error);
        setGradeItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <StudentSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Grade Details</h4>
                <Link
                  to="/student/grades"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px' }}
                >
                  Grade List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Grade Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{gradeItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Grade Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{gradeItem?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Grade Point</label>
                      </div>
                      <div class="col-md-6">
                        <p>{gradeItem?.grade_point}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Mark From</label>
                      </div>
                      <div class="col-md-6">
                        <p>{gradeItem?.mark_from}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Mark Upto</label>
                      </div>
                      <div class="col-md-6">
                        <p>{gradeItem?.mark_upto}</p>
                      </div>
                    </div>
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

export default ShowGrade;

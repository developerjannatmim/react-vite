import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StudentHeader from '../../components/StudentHeader';


const ShowStudent = () => {
  const [studentItem, setStudentItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/students/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setStudentItem(response.data?.student);
      })
      .catch((error) => {
        console.error(error);
        setStudentItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Student Information</h4>
                <Link
                  to="/student/students"
                  className="btn btn-primary btn-sm float-end"
                >
                  Student List
                </Link>
              </div>
              <section className="section about-section gray-bg" id="about">
                <div className="container">
                  <div
                    className="row align-items-center flex-row-reverse"
                    style={{ marginTop: "-60px" }}
                  >
                    <div className="col-lg-8">
                      <div className="about-text go-to">
                        <h3 className="dark-color">Student Details</h3>
                        <h6 className="theme-color lead">{studentItem?.name}</h6>
                        <div className="row about-list">
                          <div className="col-md-6">
                            <div className="media">
                              <label>Birthday</label>
                              <p>{studentItem?.user_information?.birthday}</p>
                            </div>
                            <div className="media">
                              <label>Gender</label>
                              <p>{studentItem?.user_information?.gender}</p>
                            </div>
                            <div className="media">
                              <label>Address</label>
                              <p>{studentItem?.user_information?.address}</p>
                            </div>
                          </div>
                          <div
                            className="col-md-6"
                            style={{ marginRight: "600px" }}
                          >
                            <div className="media">
                              <label>E-mail</label>
                              <p>{studentItem?.email}</p>
                            </div>
                            <div className="media">
                              <label>Phone</label>
                              <p>{studentItem?.user_information?.phone}</p>
                            </div>
                            <div className="media">
                              <label>Blood Group</label>
                              <p style={{ marginTop: "15px" }}>
                                {studentItem?.user_information?.blood_group}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="about-avatar">
                        <img
                          src={`http://127.0.0.1:8000/student-images/${studentItem?.user_information?.photo}`}
                          width="200"
                          height="200"
                          style={{ marginLeft: "30px", borderRadius: "100px" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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

export default ShowStudent;

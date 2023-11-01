import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const UpdateExam = () => {
  const navigate = useNavigate();
  const [examInput, setExamInput] = useState([]);
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setExamInput({ ...examInput, [e.target.name]: e.target.value });
  };

  const submitExam = (e) => {
    e.preventDefault();
    console.log(examInput);
    const data = examInput;
    fetch(
      `http://127.0.0.1:8000/api/exams/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/exams');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SUBJECT_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exams/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamInput(response.data?.exam);
      })
      .catch((error) => {
        console.error(error);
        setExamInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClasses(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClasses(null);
      });
  }, []);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSections(response.data?.sections);
      })
      .catch((error) => {
        console.error(error);
        setSections(null);
      });
  }, []);

  return (
  <>
    <div>
      <Header />
    </div>
    <div className="d-flex">
      <div className="w-auto position-sticky">
        <Sidebar />
      </div>
      <div className="col overflow-hidden">
        <div className="container px-4">
          <div className="card">
            <div className="card-header">
              <h4>Subject List</h4>
              <Link to="/admin/exams" className="btn btn-primary btn-sm float-end">
                Subject List
              </Link>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={submitExam} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active card-body border"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6 form-group mb-3">
                          <label>Exam Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={examInput?.name || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Exam Type</label>
                          <input
                            type="text"
                            name="exam_type"
                            onChange={handleChange}
                            value={examInput?.exam_type || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Starting Time</label>
                          <input
                            type="text"
                            name="starting_time"
                            onChange={handleChange}
                            value={examInput?.starting_time || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Ending Time</label>
                          <input
                            type="text"
                            name="ending_time"
                            onChange={handleChange}
                            value={examInput?.ending_time || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Total Marks</label>
                          <input
                            type="text"
                            name="total_marks"
                            onChange={handleChange}
                            value={examInput?.total_marks || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Status</label>
                          <input
                            type="text"
                            name="status"
                            onChange={handleChange}
                            value={examInput?.status || ''}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Name</label>
                          <select
                            name="class_id"
                            className="form-control"
                            onChange={handleChange}
                            value={examInput?.class_id || ''}
                          >
                            <option>select class</option>
                            {classes?.map((classItem) => {
                              return (
                                <option
                                  key={classItem.id}
                                  value={classItem.id}
                                >
                                  {classItem.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Section Name</label>
                          <select
                            name="section_id"
                            className="form-control"
                            onChange={handleChange}
                            value={examInput?.section_id || ''}
                          >
                            <option>select section</option>
                            {sections?.map((sectionItem) => {
                              return (
                                <option
                                  key={sectionItem.id}
                                  value={sectionItem.id}
                                >
                                  {sectionItem.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary px-4">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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

export default UpdateExam;

import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const UpdateExam = () => {
  const navigate = useNavigate();
  const [examInput, setExamInput] = useState([]);
  const [exam_category, setExamCategory] = useState();
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setExamInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitExam = (e) => {
    e.preventDefault();
    console.log(examInput);
    const data = examInput;
    fetch(`http://127.0.0.1:8000/api/exams/${id}`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
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
    console.log({ exam_category });
    fetch(`http://127.0.0.1:8000/api/exam_category`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamCategory(response.data?.exam_category);
      })
      .catch((error) => {
        console.error(error);
        setExamCategory(null);
      });
  }, []);

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
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Exam Edit</h4>
                <Link
                  to="/admin/exams"
                  className="btn btn-primary btn-sm float-end"
                >
                  Exam List
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
                            <select
                              name="exam_category_id"
                              className="form-control"
                              onChange={handleChange}
                              value={examInput?.exam_category_id || ''}
                            >
                              <option>select exam category</option>
                              {exam_category?.map((examCategoryItem) => {
                                return (
                                  <option
                                    key={examCategoryItem.id}
                                    value={examCategoryItem.id}
                                  >
                                    {examCategoryItem.name}
                                  </option>
                                );
                              })}
                            </select>
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

import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateMark = () => {
  const navigate = useNavigate();
  const [markInput, setMarkInput] = useState([]);
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [exams, setExams] = useState();
  const [exam_category, setExamCategory] = useState();
  const [subjects, setSubjects] = useState();
  const [users, setUsers] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setMarkInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitMark = (e) => {
    e.preventDefault();
    const data = markInput;
    console.log(markInput);
    fetch(`http://127.0.0.1:8000/api/marks/${id}`, {
      body: JSON.stringify({
        ...data
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/grades');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('MARK_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMarkInput(response.data?.mark);
      })
      .catch((error) => {
        console.error(error);
        setMarkInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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
    console.log({ exam_category });
    fetch(`http://127.0.0.1:8000/api/exam_category`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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
    console.log({ sections });
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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

  useEffect(() => {
    console.log({ subjects });
    fetch(`http://127.0.0.1:8000/api/subjects`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubjects(response.data?.subjects);
      })
      .catch((error) => {
        console.error(error);
        setSubjects(null);
      });
  }, []);

  useEffect(() => {
    console.log({ users });
    fetch(`http://127.0.0.1:8000/api/students`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUsers(response.data?.students);
      })
      .catch((error) => {
        console.error(error);
        setUsers(null);
      });
  }, []);

  useEffect(() => {
    console.log({ exams });
    fetch(`http://127.0.0.1:8000/api/exams`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExams(response.data?.exams);
      })
      .catch((error) => {
        console.error(error);
        setExams(null);
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
          <div className="mt-5 container px-4" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Mark Edit</h4>
                <Link
                  to="/admin/marks"
                  className="btn btn-primary btn-sm float-end"
                  
                >
                  Mark List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitMark} id="MARK_FORM">
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
                            <label>Mark</label>
                            <input
                              type="text"
                              name="marks"
                              onChange={handleChange}
                              value={markInput?.marks || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Grade Point</label>
                            <input
                              type="text"
                              name="grade_point"
                              onChange={handleChange}
                              value={markInput?.grade_point || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Comment</label>
                            <input
                              type="text"
                              name="comment"
                              onChange={handleChange}
                              value={markInput?.comment || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Class Name</label>
                            <select
                              name="class_id"
                              className="form-control"
                              onChange={handleChange}
                              value={markInput?.class_id || ''}
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
                              value={markInput?.section_id || ''}
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
                          <div className="col-md-6 form-group mb-3">
                            <label>Subject Name</label>
                            <select
                              name="subject_id"
                              className="form-control"
                              onChange={handleChange}
                              value={markInput?.subject_id || ''}
                            >
                              <option>select subject</option>
                              {subjects?.map((subjectItem) => {
                                return (
                                  <option
                                    key={subjectItem.id}
                                    value={subjectItem.id}
                                  >
                                    {subjectItem.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Exam Name</label>
                            <select
                              name="exam_category_id"
                              className="form-control"
                              onChange={handleChange}
                              value={markInput.exam_category_id}
                            >
                              <option>select exam category</option>
                              {exam_category?.map((exam_categoryItem) => {
                                return (
                                  <option
                                    key={exam_categoryItem.id}
                                    value={exam_categoryItem.id}
                                  >
                                    {exam_categoryItem.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Student Name</label>
                            <select
                              name="user_id"
                              className="form-control"
                              onChange={handleChange}
                              value={markInput?.user_id || ''}
                            >
                              <option>select student</option>
                              {users?.map((userItem) => {
                                return (
                                  <option key={userItem.id} value={userItem.id}>
                                    {userItem.name}
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

export default UpdateMark;

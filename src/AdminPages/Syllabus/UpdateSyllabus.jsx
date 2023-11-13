import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateSyllabus = () => {
  const navigate = useNavigate();
  const [syllabusInput, setSyllabusInput] = useState([]);
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [subjects, setSubjects] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setSyllabusInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    setSyllabusInput((values) => ({
      ...values,
      [e.target.name]: e.target.files[0],
    }));
  };

  const submitSyllabus = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('title', syllabusInput.title);
    formData.append('class_id', syllabusInput.class_id);
    formData.append('subject_id', syllabusInput.subject_id);
    formData.append('section_id', syllabusInput.section_id);
    formData.append('file', syllabusInput.file);

    console.log(syllabusInput);

    fetch(`http://127.0.0.1:8000/api/syllabuses/${id}`, {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/syllabuses');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SYLLABUS_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/syllabuses/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabusInput(response.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
        setSyllabusInput(null);
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
    console.log({ sections });
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

  useEffect(() => {
    console.log({ subjects });
    fetch(`http://127.0.0.1:8000/api/subjects`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
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

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Syllabus Edit</h4>
                <Link
                  to="/admin/syllabuses"
                  className="btn btn-primary btn-sm float-end"
                >
                  Syllabus List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitSyllabus} id="SYLLABUS_FORM">
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
                            <label>Syllabus</label>
                            <input
                              type="text"
                              name="title"
                              onChange={handleChange}
                              value={syllabusInput?.title || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Class Name</label>
                            <select
                              name="class_id"
                              className="form-control"
                              onChange={handleChange}
                              value={syllabusInput?.class_id || ''}
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
                              value={syllabusInput?.section_id || ''}
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
                              value={syllabusInput?.subject_id || ''}
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
                            <label>Syllabus</label>
                            <input
                              type="file"
                              name="file"
                              onChange={handleImage}
                              className="form-control"
                            />
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

export default UpdateSyllabus;

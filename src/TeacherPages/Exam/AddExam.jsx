import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';
import TeacherSidebar from './../../components/TeacherSidebar';

const AddExam = () => {
  const navigate = useNavigate();
  const [exam_category, setExamCategory] = useState();
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [examInput, setExamInput] = useState({
    exam_category_id: '',
    starting_time: '',
    ending_time: '',
    total_marks: '',
    class_id: '',
    section_id: '',
  });

  const handleChange = (e) => {
    setExamInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

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

const submitExam = (e) => {
  e.preventDefault();
  const data = {
    exam_category_id: examInput.exam_category_id,
    starting_time: examInput.starting_time,
    ending_time: examInput.ending_time,
    total_marks: examInput.total_marks,
    class_id: examInput.class_id,
    section_id: examInput.section_id,
  };
  fetch('http://127.0.0.1:8000/api/exams', {
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      Swal.fire('Success', response?.message, 'success');
      navigate('/teacher/exams');
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('EXAM_FORM').reset();
      Swal.fire('Warning', response?.message, 'warning');
    });
};

return (
  <>
    <div>
      <TeacherHeader />
    </div>
    <div className="col">
      <div className="w-auto">
        <TeacherSidebar />
      </div>
      <div className="d-flex align-items-center" style={{ marginTop: '-550px' }}>
        <div className="mt-5 container" style={{ marginLeft: '320px' }}>
          <form onSubmit={submitExam} id="EXAM_FORM">
            <div className="card mt-4">
              <div className="card-header">
                <h4>
                Add Exam 
                  <Link
                    to="/teacher/exams"
                    className="btn btn-primary btn-sm float-end"
                  >
                    View Exam
                  </Link>
                </h4>
              </div>
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
                          value={examInput.exam_category_id}
                        >
                          <option>select exam category</option>
                          {exam_category?.map((examCategoryItem) => {
                            return (
                              <option key={examCategoryItem.id} value={examCategoryItem.id}>
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
                          value={examInput.starting_time}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Ending Time</label>
                        <input
                          type="text"
                          name="ending_time"
                          onChange={handleChange}
                          value={examInput.ending_time}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Total Marks</label>
                        <input
                          type="text"
                          name="total_marks"
                          onChange={handleChange}
                          value={examInput.total_marks}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Class Name</label>
                        <select
                          name="class_id"
                          className="form-control"
                          onChange={handleChange}
                          value={examInput.class_id}
                        >
                          <option>select class</option>
                          {classes?.map((classItem) => {
                            return (
                              <option key={classItem.id} value={classItem.id}>
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
                          value={examInput.section_id}
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
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
);
};

export default AddExam;
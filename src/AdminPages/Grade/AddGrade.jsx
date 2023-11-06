import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddGrade = () => {
  const navigate = useNavigate();
  const [gradeInput, setGradeInput] = useState({
    name: '',
    grade_point: '',
    mark_from: '',
    mark_upto: '',
  });

  const handleChange = (e) => {
    setGradeInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitGrade = (e) => {
    e.preventDefault();
    const data = {
      name: gradeInput.name,
      grade_point: gradeInput.grade_point,
      mark_from: gradeInput.mark_from,
      mark_upto: gradeInput.mark_upto,
    };
    fetch('http://127.0.0.1:8000/api/grades', {
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
        navigate('/admin/grades');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SUBJECT_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };
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
          <div className="container-fluid px-3">
            <form onSubmit={submitGrade} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Grade List
                    <Link
                      to="/admin/grades"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Grade
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
                          <label>Grade Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={gradeInput.name}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Grade Point</label>
                          <input
                            type="text"
                            name="grade_point"
                            onChange={handleChange}
                            value={gradeInput.grade_point}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Mark From</label>
                          <input
                            type="text"
                            name="mark_from"
                            onChange={handleChange}
                            value={gradeInput.mark_from}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Mark Upto</label>
                          <input
                            type="text"
                            name="mark_upto"
                            onChange={handleChange}
                            value={gradeInput.mark_upto}
                            className="form-control"
                          />
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

export default AddGrade;

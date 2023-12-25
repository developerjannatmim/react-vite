import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddSubject = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  const [subjectInput, setSubjectInput] = useState({
    name: '',
    class_id: ''
  });

  const handleChange = (e) => {
    setSubjectInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

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

  const submitSubject = (e) => {
    e.preventDefault();
    const data = {
      name: subjectInput.name,
      class_id: subjectInput.class_id
    };
    fetch('http://127.0.0.1:8000/api/subjects', {
      body: JSON.stringify({
        ...data
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin//subject/view');
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
        <div className="w-auto">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center mt-2">
          <div className="mt-5 container" style={{ marginLeft: '320px' }}>
            <form onSubmit={submitSubject} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Add Subject
                    <Link
                      to="/admin/subject/view"
                      className="btn btn-primary btn-sm float-end"
                      style={{ marginLeft: '620px' }}
                    >
                      View Subject
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
                          <label>Subject Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={subjectInput.name}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Name</label>
                          <select
                            name="class_id"
                            className="form-control"
                            onChange={handleChange}
                            value={subjectInput.class_id}
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

export default AddSubject;

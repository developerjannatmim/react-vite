import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AddClasses = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [sections, setSections] = useState();
  const [classesInput, setClassesInput] = useState({
    name: '',
    section_id: '',
  });

  const handleChange = (e) => {
    setClassesInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

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

  const submitClass = (e) => {
    e.preventDefault();
    const data = {
      name: classesInput.name,
      section_id: classesInput.section_id,
    };
    fetch('http://127.0.0.1:8000/api/classes', {
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
      navigate('/admin/classes');
      
    })
    .catch((error) => {
      console.error(error);
      Swal.fire('Warning', response?.message, 'warning');
      setErrors({});
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
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <form onSubmit={submitClass}>
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                  Add Class
                    <Link
                      to="/admin/classes"
                      className="btn btn-primary btn-sm float-end"
                      style={{ marginLeft: '620px' }}
                    >
                      View Class
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
                          <label>Class Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={classesInput.name}
                            className="form-control"
                          />
                          <small className="text-danger">{errors.name}</small>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Section Name</label>
                          <select
                            name="section_id"
                            className="form-control"
                            onChange={handleChange}
                            value={classesInput.section_id}
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
                          <small className="text-danger">{errors.section_id}</small>
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

export default AddClasses;

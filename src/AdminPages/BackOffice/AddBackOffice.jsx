import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddBackOffice = () => {
  const navigate = useNavigate();
  const [backOfficeInput, setBackOfficeInput] = useState({
    name: '',
    author: '',
    copies: '',
    availble_copies: '',
  });

  const handleChange = (e) => {
    setBackOfficeInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitBackOffice = (e) => {
    e.preventDefault();
    const data = {
      name: backOfficeInput.name,
      author: backOfficeInput.author,
      copies: backOfficeInput.copies,
      availble_copies: backOfficeInput.availble_copies,
    };
    fetch('http://127.0.0.1:8000/api/backOffice', {
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
        navigate('/admin/backOffice');
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
          <div className="mt-5 container-fluid px-3">
            <form onSubmit={submitBackOffice} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    BackOffice List
                    <Link
                      to="/admin/backOffice"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View BackOffice
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
                          <label>Back Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={backOfficeInput.name}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Author</label>
                          <input
                            type="text"
                            name="author"
                            onChange={handleChange}
                            value={backOfficeInput.author}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Copies</label>
                          <input
                            type="text"
                            name="copies"
                            onChange={handleChange}
                            value={backOfficeInput.copies}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Available Copies</label>
                          <input
                            type="text"
                            name="availble_copies"
                            onChange={handleChange}
                            value={backOfficeInput.availble_copies}
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

export default AddBackOffice;

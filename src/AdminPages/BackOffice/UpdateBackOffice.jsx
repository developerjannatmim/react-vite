import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const UpdateBackOffice = () => {
  const navigate = useNavigate();
  const [backOfficeInput, setBackOfficeInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setBackOfficeInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitBackOffice = (e) => {
    e.preventDefault();
    const data = backOfficeInput;
    console.log(backOfficeInput);
    fetch(`http://127.0.0.1:8000/api/backOffice/${id}`, {
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
        navigate('/admin/backOffice');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('GRADE_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/backOffice/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setBackOfficeInput(response.data?.backOffice);
      })
      .catch((error) => {
        console.error(error);
        setBackOfficeInput(null);
      });
  }, [id]);

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
          <div className="mt-5 container px-4" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Book Edit</h4>
                <Link
                  to="/admin/backOffice"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Book List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitBackOffice} id="GRADE_FORM">
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
                            <label>Book Name</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={backOfficeInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Author</label>
                            <input
                              type="text"
                              name="author"
                              onChange={handleChange}
                              value={backOfficeInput?.author || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Copies</label>
                            <input
                              type="text"
                              name="copies"
                              onChange={handleChange}
                              value={backOfficeInput?.copies || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Available Copies</label>
                            <input
                              type="text"
                              name="availble_copies"
                              onChange={handleChange}
                              value={backOfficeInput?.availble_copies || ''}
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

export default UpdateBackOffice;

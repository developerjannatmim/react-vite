import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AddEvent = () => {
  const navigate = useNavigate();
  const [eventInput, setEventInput] = useState({
    title: '',
    date: '',
    status: ''
  });

  const handleChange = (e) => {
    setEventInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const data = {
      title: eventInput.title,
      date: eventInput.date,
      status: eventInput.status
    };
    fetch('http://127.0.0.1:8000/api/event', {
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
        navigate('/admin/event');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('MARK_FORM').reset();
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
            <form onSubmit={submitEvent} id="MARK_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Add Event
                    <Link
                      to="/admin/event"
                      className="btn btn-primary btn-sm float-end"
                      style={{ marginLeft: '620px' }}
                    >
                      View Event
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
                          <label>Event Title</label>
                          <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={eventInput.title}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label>Date</label>
                          <input
                            type="date"
                            onChange={handleChange}
                            value={eventInput.date || ''}
                            name="date"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label>Status</label>
                          <select
                            onChange={handleChange}
                            value={eventInput.status || ''}
                            name="status"
                            className="form-control"
                          >
                            <option value="">Select status</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
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

export default AddEvent;

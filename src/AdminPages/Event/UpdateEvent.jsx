import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const UpdateEvent = () => {
  const navigate = useNavigate();
  const [eventInput, setEventInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setEventInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const data = eventInput;
    console.log(eventInput);
    fetch(`http://127.0.0.1:8000/api/event/${id}`, {
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
        navigate('/admin/event');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/event/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setEventInput(response.data?.event);
      })
      .catch((error) => {
        console.error(error);
        setEventInput(null);
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
        <div className="col overflow-hidden">
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Event Edit</h4>
                <Link
                  to="/admin/event"
                  className="btn btn-primary btn-sm float-end"
                >
                  Event List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitEvent} id="MARK_FORM">
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
                            <label>Event</label>
                            <input
                              type="text"
                              name="title"
                              onChange={handleChange}
                              value={eventInput?.title || ''}
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

export default UpdateEvent;

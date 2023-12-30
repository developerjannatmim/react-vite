import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AddNotice = () => {
  const navigate = useNavigate();
  const [noticeInput, setNoticeInput] = useState({
    publish_date: '',
    subject: '',
  });

  const handleChange = (e) => {
    setNoticeInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitNotice = (e) => {
    e.preventDefault();
    const data = {
      publish_date: noticeInput.publish_date,
      subject: noticeInput.subject,
    };
    fetch('http://127.0.0.1:8000/api/notice', {
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
        navigate('/admin/notice');
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
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '320px' }}>
            <form onSubmit={submitNotice} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                  Add Notice
                    <Link
                      to="/admin/notice"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Notice Board
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
                          <label>Publish Date</label>
                          <input
                            type="date"
                            name="publish_date"
                            onChange={handleChange}
                            value={noticeInput.publish_date}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            onChange={handleChange}
                            value={noticeInput.subject}
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

export default AddNotice;

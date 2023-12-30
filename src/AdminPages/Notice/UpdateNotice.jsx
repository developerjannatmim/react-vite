import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const UpdateNotice = () => {
  const navigate = useNavigate();
  const [noticeInput, setNoticeInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setNoticeInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitNotice = (e) => {
    e.preventDefault();
    const data = noticeInput;
    console.log(noticeInput);
    fetch(`http://127.0.0.1:8000/api/notice/${id}`, {
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
        navigate('/admin/notice');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('GRADE_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/notice/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setNoticeInput(response.data?.notice);
      })
      .catch((error) => {
        console.error(error);
        setNoticeInput(null);
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
                <h4>Notice Edit</h4>
                <Link
                  to="/admin/notice"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Notice List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitNotice} id="GRADE_FORM">
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
                            <label>Publish Date</label>
                            <input
                              type="date"
                              name="publish_date"
                              onChange={handleChange}
                              value={noticeInput?.publish_date || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Subject</label>
                            <input
                              type="text"
                              name="subject"
                              onChange={handleChange}
                              value={noticeInput?.subject || ''}
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

export default UpdateNotice;

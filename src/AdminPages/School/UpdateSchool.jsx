import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Switch from "react-switch";
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import './../../assets/css/style.css';

const UpdateSchool = () => {
  const navigate = useNavigate();
  const [schoolInput, setSchoolInput] = useState([]);
  const [classes, setClasses] = useState();
  const [checked, setChecked] = useState(true);
  const { id } = useParams();

  const handleChecked = () => {
    setChecked(checked);
  };


  const handleChange = (e) => {
    setSchoolInput({ ...schoolInput, [e.target.name]: e.target.value });
  };

  const submitSchool = (e) => {
    e.preventDefault();
    console.log(schoolInput);
    const data = schoolInput;
    fetch(
      `http://127.0.0.1:8000/api/schools/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/settings/school-info');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schools/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSchoolInput(response.data?.school);
      })
      .catch((error) => {
        console.error(error);
        setSchoolInput(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>School Information</h4>
                <Link
                  to="/admin/settings/school-info"
                  className="btn btn-primary btn-sm float-end"
                >
                  School Information
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitSchool}>
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
                            <label>School Name</label>
                            <input
                              type="text"
                              name="title"
                              onChange={handleChange}
                              value={schoolInput?.title || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>School Email</label>
                            <input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              value={schoolInput?.email || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              name="phone"
                              onChange={handleChange}
                              value={schoolInput?.phone || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>School Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleChange}
                              value={schoolInput?.address || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>School Information</label>
                            <textarea
                              type="text"
                              name="school_info"
                              onChange={handleChange}
                              value={schoolInput?.school_info || ''}
                              className="form-control"
                            />
                          </div>
                          <label>Status</label>
                          <div className="col-md-6 form-group mb-3">
                            <Switch onChange={handleChecked} checked={checked}/>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4">
                          Update Info
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

export default UpdateSchool;

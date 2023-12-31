import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddSection = () => {
  const navigate = useNavigate();
  const [sectionInput, setSectionInput] = useState({
    name: ''
  });

  const handleChange = (e) => {
    setSectionInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const submitSection = (e) => {
    e.preventDefault();
    const data = {
      name: sectionInput.name
    };
    fetch('http://127.0.0.1:8000/api/sections', {
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
        navigate('/admin/sections');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SECTION_FORM').reset();
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
            <form onSubmit={submitSection} id="SECTION_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Add Section 
                    <Link
                      to="/admin/sections"
                      className="btn btn-primary btn-sm float-end"
                      style={{ marginLeft: '620px' }}
                    >
                      View Section
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
                          <label>Section Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={sectionInput.name}
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

export default AddSection;

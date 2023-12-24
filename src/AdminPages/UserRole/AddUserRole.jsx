import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddUserRole = () => {
  const navigate = useNavigate();
  const [userRoleInput, setUserRoleInput] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setUserRoleInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitUserRole = (e) => {
    e.preventDefault();
    const data = {
      name: userRoleInput.name,
    };
    fetch('http://127.0.0.1:8000/api/userRoles', {
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
        navigate('/admin/userRoles');
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
          <AdminSidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container-fluid px-3">
            <form onSubmit={submitUserRole} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    User Role List
                    <Link
                      to="/admin/userRoles"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View User Role
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
                          <label>User Role Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={userRoleInput.name}
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

export default AddUserRole;

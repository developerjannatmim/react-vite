import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateUserRole = () => {
  const navigate = useNavigate();
  const [userRoleInput, setUserRoleInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setUserRoleInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const submitUserRole = (e) => {
    e.preventDefault();
    const data = userRoleInput;
    console.log(userRoleInput);
    fetch(`http://127.0.0.1:8000/api/userRoles/${id}`, {
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
        navigate('/admin/userRoles');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('GRADE_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/userRoles/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUserRoleInput(response.data?.userRole);
      })
      .catch((error) => {
        console.error(error);
        setUserRoleInput(null);
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
                <h4>User Role Edit</h4>
                <Link
                  to="/admin/userRoles"
                  className="btn btn-primary btn-sm float-end"
                >
                  User Role List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitUserRole} id="GRADE_FORM">
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
                          <div className="form-group mb-3">
                            <label>User Role</label>
                            <select
                              onChange={handleChange}
                              value={userRoleInput.name || ''}
                              name="name"
                              className="form-control"
                            >
                              <option value="">Select user role</option>
                              <option value="Admin">Admin</option>
                              <option value="Teacher">Teacher</option>
                              <option value="Student">Student</option>
                              <option value="Parent">Parent</option>
                              <option value="Accountant">Accountant</option>
                              <option value="Librarian">Librarian</option>
                              <option value="Driver">Driver</option>
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

export default UpdateUserRole;

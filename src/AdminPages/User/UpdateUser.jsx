import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateUser = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(null);
  const { id } = useParams();
  const [userRoles, setUserRoles] = useState();

  const handleChange = (e) => {
    setUserInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserInformationChange = (e) => {
    setUserInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.value
      }
    }));
  };

  const handleImage = (e) => {
    setUserInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.files[0]
      }
    }));
  };

  const submitUser = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', userInput.name);
    formData.append('email', userInput.email);
    formData.append('password', userInput.password);
    formData.append('role_id', userInput.role_id);
    formData.append('photo', userInput.user_information.photo);
    formData.append('address', userInput.user_information.address);
    formData.append('phone', userInput.user_information.phone);
    formData.append('birthday', userInput.user_information.birthday);
    formData.append('gender', userInput.user_information.gender);
    formData.append('blood_group', userInput.user_information.blood_group);

    console.log(userInput);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/users/${id}`, {
      body: formData,
      headers: {
        Accept: 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          navigate('/admin/users');
        } else {
          Swal.fire('Warning', response?.message, 'warning');
          navigate(`/admin/users/${id}/edit`);
        }
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/users/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUserInput(response.data?.user);
      })
      .catch((error) => {
        console.error(error);
        setUserInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ userRoles });
    fetch(`http://127.0.0.1:8000/api/userRoles`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUserRoles(response.data?.userRoles);
      })
      .catch((error) => {
        console.error(error);
        setUserRoles(null);
      });
  }, []);

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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>User Edit</h4>
                <Link
                  to="/admin/users"
                  className="btn btn-primary btn-sm float-end"
                >
                  User List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitUser} id="STUDENT_FORM">
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
                            <label>Name</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={userInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={userInput?.email || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              value={userInput?.password || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleUserInformationChange}
                              value={userInput?.user_information?.address || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              onChange={handleUserInformationChange}
                              value={userInput?.user_information?.phone || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Birthday</label>
                            <input
                              type="date"
                              name="birthday"
                              onChange={handleUserInformationChange}
                              value={
                                userInput?.user_information?.birthday || ''
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Photo</label>
                            <input
                              type="file"
                              name="photo"
                              onChange={handleImage}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Gender</label>
                            <select
                              name="gender"
                              onChange={handleUserInformationChange}
                              value={userInput?.user_information?.gender || ''}
                              className="form-control"
                            >
                              <option value="">Select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Blood Group</label>
                            <select
                              name="blood_group"
                              onChange={handleUserInformationChange}
                              value={
                                userInput?.user_information?.blood_group || ''
                              }
                              className="form-control"
                            >
                              <option value="">Select a blood group</option>
                              <option value="a+">A+</option>
                              <option value="a-">A-</option>
                              <option value="b+">B+</option>
                              <option value="b-">B-</option>
                              <option value="ab+">AB+</option>
                              <option value="ab-">AB-</option>
                              <option value="o+">O+</option>
                              <option value="o-">O-</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>User Role</label>
                            <select
                              name="role_id"
                              className="form-control"
                              onChange={handleChange}
                              value={userInput?.role_id || ''}
                            >
                              <option>select user role</option>
                              {userRoles?.map((userRoleItem) => {
                                return (
                                  <option
                                    key={userRoleItem.id}
                                    value={userRoleItem.id}
                                  >
                                    {userRoleItem.name}
                                  </option>
                                );
                              })}
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

export default UpdateUser;

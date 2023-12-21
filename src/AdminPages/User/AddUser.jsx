import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import { useEffect } from 'react';

const AddUser = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [userRoles, setUserRoles] = useState();

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    photo: '',
    birthday: '',
    gender: '',
    blood_group: '',
    role_id: ''
  });

  const handleChange = (e) => {
    setUserInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleImage = (e) => {
    setUserInput((values) => ({
      ...values,
      [e.target.name]: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', userInput.photo);
    formData.append('name', userInput.name);
    formData.append('email', userInput.email);
    formData.append('password', userInput.password);
    formData.append('address', userInput.address);
    formData.append('phone', userInput.phone);
    formData.append('birthday', userInput.birthday);
    formData.append('gender', userInput.gender);
    formData.append('blood_group', userInput.blood_group);
    formData.append('role_id', userInput.role_id);

    console.log(userInput);

    fetch('http://127.0.0.1:8000/api/users', {
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
          setErrors({});
        } else {
          Swal.fire('Warning', response?.message, 'warning');
          setErrors(response?.errors);
        }
      });
  };

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
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container-fluid px-4">
            <form onSubmit={handleSubmit}>
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    User List
                    <Link
                      to="/admin/users"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View User
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
                      <div className="form-group mb-3">
                        <label>Name</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userInput.name || ''}
                          name="name"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.name}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userInput.email || ''}
                          name="email"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.email}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Password</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userInput.password || ''}
                          name="password"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.password}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Address</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userInput.address || ''}
                          name="address"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.address}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Phone</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userInput.phone || ''}
                          name="phone"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.phone}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>BirthDay</label>
                        <input
                          type="date"
                          onChange={handleChange}
                          value={userInput.birthday || ''}
                          name="birthday"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.birthday}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Photo</label>
                        <input
                          type="file"
                          onChange={handleImage}
                          name="photo"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.photo}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Gender</label>
                        <select
                          onChange={handleChange}
                          value={userInput.gender || ''}
                          name="gender"
                          className="form-control"
                        >
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                        <small className="text-danger">{errors.gender}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Blood Group</label>
                        <select
                          onChange={handleChange}
                          value={userInput.blood_group || ''}
                          name="blood_group"
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
                        <small className="text-danger">
                          {errors.blood_group}
                        </small>
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>User Role</label>
                        <select
                          name="role_id"
                          className="form-control"
                          onChange={handleChange}
                          value={userInput.role_id}
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
                        <small className="text-danger">
                          {errors.role_id}
                        </small>
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

export default AddUser;

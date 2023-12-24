import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddStudent = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [studentInput, setStudentInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    photo: '',
    birthday: '',
    gender: '',
    blood_group: '',
  });

  const handleChange = (e) => {
    setStudentInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    setStudentInput((values) => ({
      ...values,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', studentInput.photo);
    formData.append('name', studentInput.name);
    formData.append('email', studentInput.email);
    formData.append('password', studentInput.password);
    formData.append('address', studentInput.address);
    formData.append('phone', studentInput.phone);
    formData.append('birthday', studentInput.birthday);
    formData.append('gender', studentInput.gender);
    formData.append('blood_group', studentInput.blood_group);

    console.log(studentInput);

    fetch('http://127.0.0.1:8000/api/students', {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          navigate('/admin/students');
          setErrors({});
        } else {
          Swal.fire('Warning', response?.message, 'warning');
          setErrors(response?.errors);
        }
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
          <div className="mt-5 container-fluid px-4">
            <form onSubmit={handleSubmit}>
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Student List
                    <Link
                      to="/admin/students"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Student
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
                          value={studentInput.name || ''}
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
                          value={studentInput.email || ''}
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
                          value={studentInput.password || ''}
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
                          value={studentInput.address || ''}
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
                          value={studentInput.phone || ''}
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
                          value={studentInput.birthday || ''}
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
                          value={studentInput.gender || ''}
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
                          value={studentInput.blood_group || ''}
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

export default AddStudent;

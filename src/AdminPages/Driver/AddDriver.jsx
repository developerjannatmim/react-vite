import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddDriver = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [driverInput, setDriverInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    birthday: '',
    gender: '',
    blood_group: '',
    photo: '',
  });

  const handleChange = (e) => {
    setDriverInput(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleImage = (e) => {
    setDriverInput(values => ({...values,  [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    console.log({ driverInput });
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', driverInput.photo);
    formData.append('name', driverInput.name);
    formData.append('email', driverInput.email);
    formData.append('password', driverInput.password);
    formData.append('address', driverInput.address);
    formData.append('phone', driverInput.phone);
    formData.append('birthday', driverInput.birthday);
    formData.append('gender', driverInput.gender);
    formData.append('blood_group', driverInput.blood_group);

    setDriverInput({
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      birthday: '',
      gender: '',
      blood_group: '',
      photo: '',
    });

    console.log({ formData });

    fetch(
      'http://127.0.0.1:8000/api/driver',
      {
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        method: 'POST',
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if(response?.status === 200){
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/driver');
        setErrors({});
      }else{
        Swal.fire('Warning', response?.message, 'warning');
        setErrors(response?.errors);
      }
    })
  };

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
            <form onSubmit={handleSubmit} >
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                   Driver List
                  <Link
                      to="/admin/driver"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Driver
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
                          value={driverInput.name || ''}
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
                          value={driverInput.email || ''}
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
                          value={driverInput.password || ''}
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
                          value={driverInput.address || ''}
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
                          value={driverInput.phone || ''}
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
                          value={driverInput.birthday || ''}
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
                          value={driverInput.gender || ''}
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
                          value={driverInput.blood_group || ''}
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
                        <small className="text-danger">{errors.blood_group}</small>
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

export default AddDriver;

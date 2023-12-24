import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AddAdmin = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [adminInput, setAdminInput] = useState({
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
    setAdminInput(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleImage = (e) => {
    setAdminInput(values => ({...values,  [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    console.log({ adminInput });
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', adminInput.photo);
    formData.append('name', adminInput.name);
    formData.append('email', adminInput.email);
    formData.append('password', adminInput.password);
    formData.append('address', adminInput.address);
    formData.append('phone', adminInput.phone);
    formData.append('birthday', adminInput.birthday);
    formData.append('gender', adminInput.gender);
    formData.append('blood_group', adminInput.blood_group);

    setAdminInput({
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
      'http://127.0.0.1:8000/api/admin',
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
        navigate('/admin/admin');
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
          <AdminSidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container-fluid px-4">
            <form onSubmit={handleSubmit} >
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Admin List
                    <Link
                      to="/admin/admin"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Admin
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
                          value={adminInput.name || ''}
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
                          value={adminInput.email || ''}
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
                          value={adminInput.password || ''}
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
                          value={adminInput.address || ''}
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
                          value={adminInput.phone || ''}
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
                          value={adminInput.birthday || ''}
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
                          value={adminInput.gender || ''}
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
                          value={adminInput.blood_group || ''}
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

export default AddAdmin;

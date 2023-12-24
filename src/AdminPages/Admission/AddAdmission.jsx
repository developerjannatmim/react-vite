import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AddAdmission = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [sections, setSections] = useState();
  const [classes, setClasses] = useState();
  const [admissionInput, setAdmissionInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    dob: '',
    gender: '',
    blood_group: '',
    image: '',
    class_id: '',
    section_id: '',
  });

  useEffect(() => {
    console.log({ sections });
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setSections(response.data?.sections);
    })
    .catch((error) => {
      console.error(error);
      setSections(null);
    });
  }, []);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setClasses(response.data?.classes);
    })
    .catch((error) => {
      console.error(error);
      setClasses(null);
    });
  }, []);

  const handleChange = (e) => {
    setAdmissionInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleImage = (e) => {
    setAdmissionInput((values) => ({
      ...values,
      [e.target.name]: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    console.log({ admissionInput });
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', admissionInput.image);
    formData.append('name', admissionInput.name);
    formData.append('email', admissionInput.email);
    formData.append('password', admissionInput.password);
    formData.append('address', admissionInput.address);
    formData.append('phone', admissionInput.phone);
    formData.append('dob', admissionInput.dob);
    formData.append('gender', admissionInput.gender);
    formData.append('blood_group', admissionInput.blood_group);
    formData.append('class_id', admissionInput.class_id);
    formData.append('section_id', admissionInput.section_id);

    setAdmissionInput({
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      dob: '',
      gender: '',
      blood_group: '',
      image: '',
      class_id: '',
      section_id: ''
    });

    console.log({ formData });

    fetch('http://127.0.0.1:8000/api/admission', {
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
          navigate('/admin/admission');
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
                    Admission List
                    <Link
                      to="/admin/admission"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Admission
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
                          value={admissionInput.name || ''}
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
                          value={admissionInput.email || ''}
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
                          value={admissionInput.password || ''}
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
                          value={admissionInput.address || ''}
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
                          value={admissionInput.phone || ''}
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
                          value={admissionInput.dob || ''}
                          name="dob"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.dob}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Select Student Image</label>
                        <input
                          type="file"
                          onChange={handleImage}
                          name="image"
                          className="form-control"
                        />
                        <small className="text-danger">{errors.image}</small>
                      </div>
                      <div className="form-group mb-3">
                        <label>Gender</label>
                        <select
                          onChange={handleChange}
                          value={admissionInput.gender || ''}
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
                          value={admissionInput.blood_group || ''}
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
                        <label>Section Name</label>
                        <select
                          name="section_id"
                          className="form-control"
                          onChange={handleChange}
                          value={admissionInput.section_id}
                        >
                          <option>select section</option>
                          {sections?.map((sectionItem) => {
                            return (
                              <option
                                key={sectionItem.id}
                                value={sectionItem.id}
                              >
                                {sectionItem.name}
                              </option>
                            );
                          })}
                        </select>
                        <small className="text-danger">
                          {errors.section_id}
                        </small>
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Class Name</label>
                        <select
                          name="class_id"
                          className="form-control"
                          onChange={handleChange}
                          value={admissionInput.class_id}
                        >
                          <option>select class</option>
                          {classes?.map((classItem) => {
                            return (
                              <option
                                key={classItem.id}
                                value={classItem.id}
                              >
                                {classItem.name}
                              </option>
                            );
                          })}
                        </select>
                        <small className="text-danger">
                          {errors.class_id}
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

export default AddAdmission;

import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateParent = () => {
  const navigate = useNavigate();
  const [parentInput, setParentInput] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    setParentInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserInformationChange = (e) => {
    setParentInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleImage = (e) => {
    setParentInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.files[0],
      },
    }));
  };

  const submitParent = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', parentInput.name);
    formData.append('email', parentInput.email);
    formData.append('photo', parentInput.user_information.photo);
    formData.append('address', parentInput.user_information.address);
    formData.append('phone', parentInput.user_information.phone);
    formData.append('birthday', parentInput.user_information.birthday);
    formData.append('gender', parentInput.user_information.gender);
    formData.append('blood_group', parentInput.user_information.blood_group);

    console.log(parentInput);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/parents/${id}`, {
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
          navigate('/admin/parents');
        } else {
          Swal.fire('Warning', response?.message, 'warning');
          navigate(`/admin/parents/${id}/edit`);
        }
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/parents/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setParentInput(response.data?.parent);
      })
      .catch((error) => {
        console.error(error);
        setParentInput(null);
      });
  }, [id]);

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
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Parent Edit</h4>
                <Link
                  to="/admin/parents"
                  className="btn btn-primary btn-sm float-end"
                >
                  Parent List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitParent} id="STUDENT_FORM">
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
                              value={parentInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={parentInput?.email || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleUserInformationChange}
                              value={
                                parentInput?.user_information?.address || ''
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              onChange={handleUserInformationChange}
                              value={parentInput?.user_information?.phone || ''}
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
                                parentInput?.user_information?.birthday || ''
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
                              value={
                                parentInput?.user_information?.gender || ''
                              }
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
                                parentInput?.user_information?.blood_group || ''
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

export default UpdateParent;

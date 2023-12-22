import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateAdmission = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState();
  const [classes, setClasses] = useState();
  const [admissionInput, setAdmissionInput] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${id}`, {
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
  }, [id]);

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

  const handleChange = (e) => {
    setAdmissionInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleChange = (e) => {
  //   setAdmissionInput((values) => ({
  //     ...values,
  //     user_information: {
  //       ...values.user_information,
  //       [e.target.name]: e.target.value,
  //     },
  //   }));
  // };

  const handleImage = (e) => {
    setAdmissionInput((values) => ({
      ...values,
        [e.target.name]: e.target.files[0],
    }));
  };

  const submitAdmission = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', admissionInput.name);
    formData.append('email', admissionInput.email);
    formData.append('image', admissionInput.image);
    formData.append('address', admissionInput.address);
    formData.append('phone', admissionInput.phone);
    formData.append('dob', admissionInput.dob);
    formData.append('gender', admissionInput.gender);
    formData.append('blood_group', admissionInput.blood_group);
    formData.append('class_id', admissionInput.class_id);
    formData.append('section_id', admissionInput.section_id);

    console.log(admissionInput);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/admission/${id}`, {
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
          navigate('/admin/admission');
        } else {
          Swal.fire('Warning', response?.message, 'warning');
          navigate(`/admin/admission/${id}/edit`);
        }
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admission/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdmissionInput(response.data?.admission);
      })
      .catch((error) => {
        console.error(error);
        setAdmissionInput(null);
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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>admission Edit</h4>
                <Link
                  to="/admin/admission"
                  className="btn btn-primary btn-sm float-end"
                >
                  admission List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitAdmission}>
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
                              value={admissionInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={admissionInput?.email || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleChange}
                              value={admissionInput?.address || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              onChange={handleChange}
                              value={admissionInput?.phone || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Birthday</label>
                            <input
                              type="date"
                              name="dob"
                              onChange={handleChange}
                              value={admissionInput?.dob || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Image</label>
                            <input
                              type="file"
                              name="image"
                              onChange={handleImage}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Gender</label>
                            <select
                              name="gender"
                              onChange={handleChange}
                              value={admissionInput?.user_information?.gender || ''}
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
                              onChange={handleChange}
                              value={admissionInput?.user_information?.blood_group || ''}
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
                            <label>Section Name</label>
                            <select
                              name="section_id"
                              className="form-control"
                              onChange={handleChange}
                              value={admissionInput?.section_id || ''}
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
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Class Name</label>
                            <select
                              name="class_id"
                              className="form-control"
                              onChange={handleChange}
                              value={admissionInput?.class_id || ''}
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

export default UpdateAdmission;

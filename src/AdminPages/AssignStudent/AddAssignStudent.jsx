import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddAssignStudent = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState();
  const [driver, setDriver] = useState();
  const [students, setStudents] = useState();
  const [classes, setClasses] = useState();
  const [assignStudentInput, setAssignStudentInput] = useState({
    vehicle_id: '',
    driver_id: '',
    student_id: '',
    class_id: '',
  });

  const handleChange = (e) => {
    setAssignStudentInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log({ driver });
    fetch(`http://127.0.0.1:8000/api/driver`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setDriver(response.data?.driver);
      })
      .catch((error) => {
        console.error(error);
        setDriver(null);
      });
  }, []);

  useEffect(() => {
  console.log({ vehicle });
  fetch(`http://127.0.0.1:8000/api/vehicles`, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setVehicle(response.data?.vehicle);
    })
    .catch((error) => {
      console.error(error);
      setVehicle(null);
    });
}, []);

useEffect(() => {
  console.log({ students });
  fetch(`http://127.0.0.1:8000/api/students`, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setStudents(response.data?.students);
    })
    .catch((error) => {
      console.error(error);
      setStudents(null);
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

const submitAssignStudent = (e) => {
  e.preventDefault();
  const data = {
    vehicle_id: assignStudentInput.vehicle_id,
    driver_id: assignStudentInput.driver_id,
    student_id: assignStudentInput.student_id,
    class_id: assignStudentInput.class_id,
  };

  fetch('http://127.0.0.1:8000/api/assignStudents', {
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
      navigate('/admin/assignStudents');
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('assignStudent_FORM').reset();
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
        <Sidebar />
      </div>
      <div className="col overflow-hidden">
        <div className="mt-5 container-fluid px-3">
          <form onSubmit={submitAssignStudent} id="assignStudent_FORM">
            <div className="card mt-4">
              <div className="card-header">
                <h4>
                  Assign Student List
                  <Link
                    to="/admin/assignStudents"
                    className="btn btn-primary btn-sm float-end"
                  >
                    View Assign Student
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
                        <label>Vehicle Model</label>
                        <select
                          name="vehicle_id"
                          className="form-control"
                          onChange={handleChange}
                          value={assignStudentInput.vehicle_id}
                        >
                          <option>select vehicle model</option>
                          {vehicle?.map((vehicleItem) => {
                            return (
                              <option key={vehicleItem.id} value={vehicleItem.id}>
                                {vehicleItem.vehicle_model}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Driver Name</label>
                        <select
                          name="driver_id"
                          className="form-control"
                          onChange={handleChange}
                          value={assignStudentInput.driver_id}
                        >
                          <option>select driver</option>
                          {driver?.map((driverItem) => {
                            return (
                              <option key={driverItem.id} value={driverItem.id}>
                                {driverItem.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-md-6 form-group mb-3">
                        <label>Student Name</label>
                        <select
                          name="student_id"
                          className="form-control"
                          onChange={handleChange}
                          value={assignStudentInput.student_id}
                        >
                          <option>select student</option>
                          {students?.map((studentsItem) => {
                            return (
                              <option key={studentsItem.id} value={studentsItem.id}>
                                {studentsItem.name}
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
                          value={assignStudentInput.class_id}
                        >
                          <option>select class</option>
                          {classes?.map((classItem) => {
                            return (
                              <option key={classItem.id} value={classItem.id}>
                                {classItem.name}
                              </option>
                            );
                          })}
                        </select>
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

export default AddAssignStudent;

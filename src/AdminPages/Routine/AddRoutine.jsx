import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const AddRoutine = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [subjects, setSubjects] = useState();
  const [routineCreator, setRoutineCreator] = useState();
  const [rooms, setRooms] = useState();
  const [routineInput, setRoutineInput] = useState({
    day: '',
    starting_hour: '',
    starting_minute: '',
    ending_hour: '',
    ending_minute: '',
    routine_creator: '',
    class_id: '',
    section_id: '',
    subject_id: '',
    room_id: ''
  });

  const handleChange = (e) => {
    setRoutineInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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

  useEffect(() => {
    console.log({ rooms });
    fetch(`http://127.0.0.1:8000/api/classRooms`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRooms(response.data?.classRooms);
      })
      .catch((error) => {
        console.error(error);
        setRooms(null);
      });
  }, []);

  useEffect(() => {
    console.log({ routineCreator });
    fetch(`http://127.0.0.1:8000/api/teachers`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRoutineCreator(response.data?.teachers);
      })
      .catch((error) => {
        console.error(error);
        setRoutineCreator(null);
      });
  }, []);

  useEffect(() => {
    console.log({ subjects });
    fetch(`http://127.0.0.1:8000/api/subjects`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubjects(response.data?.subjects);
      })
      .catch((error) => {
        console.error(error);
        setSubjects(null);
      });
  }, []);

  useEffect(() => {
    console.log({ sections });
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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

  const submitRoutine = (e) => {
    e.preventDefault();
    const data = {
      day: routineInput.day,
      starting_hour: routineInput.starting_hour,
      starting_minute: routineInput.starting_minute,
      ending_hour: routineInput.ending_hour,
      ending_minute: routineInput.ending_minute,
      routine_creator: routineInput.routine_creator,
      class_id: routineInput.class_id,
      section_id: routineInput.section_id,
      subject_id: routineInput.subject_id,
      room_id: routineInput.room_id
    };
    fetch('http://127.0.0.1:8000/api/routines', {
      body: JSON.stringify({
        ...data
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/routines');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('ROUTINE_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };
  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="col">
        <div className="w-auto">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center" style={{ marginTop: '-550px' }}>
          <div className="mt-5 container" style={{ marginLeft: '320px' }}>
            <form onSubmit={submitRoutine} id="ROUTINE_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Routine Create
                    <Link
                      to="/admin/routines"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Routine
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
                          <label>Week Day</label>
                          <input
                            type="text"
                            name="day"
                            onChange={handleChange}
                            value={routineInput.day}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Starting Hour</label>
                          <input
                            type="text"
                            name="starting_hour"
                            onChange={handleChange}
                            value={routineInput.starting_hour}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Starting Minute</label>
                          <input
                            type="text"
                            name="starting_minute"
                            onChange={handleChange}
                            value={routineInput.starting_minute}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Ending Hour</label>
                          <input
                            type="text"
                            name="ending_hour"
                            onChange={handleChange}
                            value={routineInput.ending_hour}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Ending Minute</label>
                          <input
                            type="text"
                            name="ending_minute"
                            onChange={handleChange}
                            value={routineInput.ending_minute}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Name</label>
                          <select
                            name="class_id"
                            className="form-control"
                            onChange={handleChange}
                            value={routineInput.class_id}
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
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Room Name</label>
                          <select
                            name="room_id"
                            className="form-control"
                            onChange={handleChange}
                            value={routineInput.room_id}
                          >
                            <option>select class room</option>
                            {rooms?.map((roomItem) => {
                              return (
                                <option key={roomItem.id} value={roomItem.id}>
                                  {roomItem.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Section Name</label>
                          <select
                            name="section_id"
                            className="form-control"
                            onChange={handleChange}
                            value={routineInput.section_id}
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
                          <label>routine_creator</label>
                          <select
                            name="routine_creator"
                            className="form-control"
                            onChange={handleChange}
                            value={routineInput.routine_creator}
                          >
                            <option>select routine creator</option>
                            {routineCreator?.map((singleRoutineCreator) => {
                              return (
                                <option
                                  key={singleRoutineCreator.id}
                                  value={singleRoutineCreator.id}
                                >
                                  {singleRoutineCreator.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Subject Name</label>
                          <select
                            name="subject_id"
                            className="form-control"
                            onChange={handleChange}
                            value={routineInput.subject_id}
                          >
                            <option>select subject</option>
                            {subjects?.map((subjectItem) => {
                              return (
                                <option
                                  key={subjectItem.id}
                                  value={subjectItem.id}
                                >
                                  {subjectItem.name}
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

export default AddRoutine;

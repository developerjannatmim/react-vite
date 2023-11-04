import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const UpdateRoutine = () => {
  const navigate = useNavigate();
  const [routineInput, setRoutineInput] = useState([]);
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [subjects, setSubjects] = useState();
  const [routineCreator, setRoutineCreator] = useState();
  const [rooms, setRooms] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setRoutineInput({ ...routineInput, [e.target.name]: e.target.value });
  };

  const submitRoutine = (e) => {
    e.preventDefault();
    console.log(routineInput);
    const data = routineInput;
    fetch(
      `http://127.0.0.1:8000/api/routines/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire("Success", response?.message, "success");
        navigate("/admin/routines");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("ROUTINE_FORM").reset();
        Swal.fire("Warning", response?.message, "warning");
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/routines/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRoutineInput(response.data?.routine);
      })
      .catch((error) => {
        console.error(error);
        setRoutineInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
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
        Accept: "application/json",
      },
      method: "GET",
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
        Accept: "application/json",
      },
      method: "GET",
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
        Accept: "application/json",
      },
      method: "GET",
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
        Accept: "application/json",
      },
      method: "GET",
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
                <h4>Routine List</h4>
                <Link
                  to="/admin/routines"
                  className="btn btn-primary btn-sm float-end"
                >
                  Routine List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitRoutine} id="ROUTINE_FORM">
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
                            <label>day</label>
                            <input
                              type="text"
                              name="day"
                              onChange={handleChange}
                              value={routineInput?.day || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>starting_hour</label>
                            <input
                              type="text"
                              name="starting_hour"
                              onChange={handleChange}
                              value={routineInput?.starting_hour || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>starting_minute</label>
                            <input
                              type="text"
                              name="starting_minute"
                              onChange={handleChange}
                              value={routineInput?.starting_minute || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>ending_hour</label>
                            <input
                              type="text"
                              name="ending_hour"
                              onChange={handleChange}
                              value={routineInput?.ending_hour || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>ending_minute</label>
                            <input
                              type="text"
                              name="ending_minute"
                              onChange={handleChange}
                              value={routineInput?.ending_minute || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Routine Creator</label>
                            <select
                              name="routine_creator"
                              className="form-control"
                              onChange={handleChange}
                              value={routineInput?.routine_creator || ""}
                            >
                              <option>select creator name</option>
                              {routineCreator?.map((creatorName) => {
                                return (
                                  <option
                                    key={creatorName.id}
                                    value={creatorName.id}
                                  >
                                    {creatorName.name}
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
                              value={routineInput?.class_id || ""}
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
                          <div className="col-md-6 form-group mb-3">
                            <label>Section Name</label>
                            <select
                              name="section_id"
                              className="form-control"
                              onChange={handleChange}
                              value={routineInput?.section_id || ""}
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
                            <label>Subject Name</label>
                            <select
                              name="subject_id"
                              className="form-control"
                              onChange={handleChange}
                              value={routineInput?.subject_id || ""}
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
                          <div className="col-md-6 form-group mb-3">
                            <label>Class Room Name</label>
                            <select
                              name="room_id"
                              className="form-control"
                              onChange={handleChange}
                              value={routineInput?.room_id || ""}
                            >
                              <option>select room</option>
                              {rooms?.map((roomItem) => {
                                return (
                                  <option key={roomItem.id} value={roomItem.id}>
                                    {roomItem.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {/* <div className="col-md-6 form-group mb-3">
                    <label>Routine Creator</label>
                    <select
                      name="routine_creator"
                      className="form-control"
                      onChange={handleChange}
                      value={routineInput?.routine_creator || ""}
                    >
                      <option>select routine creator</option>
                      {routineCreator?.map((routineCreatorItem) => {
                        return (
                          <option key={routineCreatorItem.id} value={routineCreatorItem.id}>
                            {routineCreatorItem.name}
                          </option>
                        );
                      })}
                    </select>
                  </div> */}
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

export default UpdateRoutine;

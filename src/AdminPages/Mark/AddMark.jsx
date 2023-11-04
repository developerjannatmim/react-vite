import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const AddMark = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [exams, setExams] = useState();
  const [subjects, setSubjects] = useState();
  const [users, setUsers] = useState();
  const [markInput, setMarkInput] = useState({
    marks: "",
    grade_point: "",
    comment: "",
    class_id: "",
    exam_id: "",
    section_id: "",
    subject_id: "",
    user_id: "",
  });

  const handleChange = (e) => {
    setMarkInput({ ...markInput, [e.target.name]: e.target.value });
  };

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
    console.log({ users });
    fetch(`http://127.0.0.1:8000/api/students`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUsers(response.data?.students);
      })
      .catch((error) => {
        console.error(error);
        setUsers(null);
      });
  }, []);

  useEffect(() => {
    console.log({ exams });
    fetch(`http://127.0.0.1:8000/api/exams`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExams(response.data?.exams);
      })
      .catch((error) => {
        console.error(error);
        setExams(null);
      });
  }, []);

  const submitMark = (e) => {
    e.preventDefault();
    const data = {
      name: markInput.name,
      class_id: markInput.class_id,
    };
    fetch(
      "http://127.0.0.1:8000/api/marks",
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire("Success", response?.message, "success");
        navigate("/admin/marks");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("MARK_FORM").reset();
        Swal.fire("Warning", response?.message, "warning");
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
          <div className="container-fluid px-3">
            <form onSubmit={submitMark} id="MARK_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Mark List
                    <Link
                      to="/admin/marks"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Mark
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
                          <label>Mark</label>
                          <input
                            type="text"
                            name="marks"
                            onChange={handleChange}
                            value={markInput.marks}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Grade Point</label>
                          <input
                            type="text"
                            name="grade_point"
                            onChange={handleChange}
                            value={markInput.grade_point}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Name</label>
                          <select
                            name="class_id"
                            className="form-control"
                            onChange={handleChange}
                            value={markInput.class_id}
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
                          <label>Section Name</label>
                          <select
                            name="section_id"
                            className="form-control"
                            onChange={handleChange}
                            value={markInput.section_id}
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
                          <label>Student Name</label>
                          <select
                            name="user_id"
                            className="form-control"
                            onChange={handleChange}
                            value={markInput.user_id}
                          >
                            <option>select student</option>
                            {users?.map((userItem) => {
                              return (
                                <option key={userItem.id} value={userItem.id}>
                                  {userItem.name}
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
                            value={markInput.subject_id}
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
                          <label>Exam</label>
                          <select
                            name="exam_id"
                            className="form-control"
                            onChange={handleChange}
                            value={markInput.exam_id}
                          >
                            <option>select exam</option>
                            {exams?.map((examItem) => {
                              return (
                                <option key={examItem.id} value={examItem.id}>
                                  {examItem.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Comment</label>
                          <input
                            type="text"
                            name="comment"
                            onChange={handleChange}
                            value={markInput.comment}
                            className="form-control"
                          />
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

export default AddMark;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const AddSyllabus = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  const [sections, setSections] = useState();
  const [subjects, setSubjects] = useState();
  const [syllabusInput, setSyllabusInput] = useState({
    title: "",
    class_id: "",
    subject_id: "",
    section_id: "",
    file: "",
  });

  const handleChange = (e) => {
    setSyllabusInput({ ...syllabusInput, [e.target.name]: e.target.value });
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

  const submitSyllabus = (e) => {
    e.preventDefault();
    const data = {
      title: syllabusInput.title,
      class_id: syllabusInput.class_id,
      subject_id: syllabusInput.subject_id,
      section_id: syllabusInput.section_id,
      file: syllabusInput.file,
    };
    fetch(
      "http://127.0.0.1:8000/api/syllabuses",
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
        navigate("/admin/syllabuses");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("SYLLABUS_FORM").reset();
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
            <form onSubmit={submitSyllabus} id="SYLLABUS_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Syllabus List
                    <Link
                      to="/admin/syllabuses"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Syllabus
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
                          <label>Syllabus</label>
                          <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={syllabusInput.title}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label>Class Name</label>
                          <select
                            name="class_id"
                            className="form-control"
                            onChange={handleChange}
                            value={syllabusInput.class_id}
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
                            value={syllabusInput.section_id}
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
                            value={syllabusInput.subject_id}
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
                          <label>File Name</label>
                          <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                            value={syllabusInput.file}
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

export default AddSyllabus;

import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const UpdateGrade = () => {
  const navigate = useNavigate();
  const [gradeInput, setGradeInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setGradeInput({ ...gradeInput, [e.target.name]: e.target.value });
  };

  const submitGrade = (e) => {
    e.preventDefault();
    const data = gradeInput;
    console.log(gradeInput);
    fetch(
      `http://127.0.0.1:8000/api/grades/${id}`,
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
        navigate("/admin/grades");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("GRADE_FORM").reset();
        Swal.fire("Warning", response?.message, "warning");
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grades/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGradeInput(response.data?.grade);
      })
      .catch((error) => {
        console.error(error);
        setGradeInput(null);
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
                <h4>Grade List</h4>
                <Link
                  to="/admin/grades"
                  className="btn btn-primary btn-sm float-end"
                >
                  Grade List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitGrade} id="GRADE_FORM">
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
                            <label>Grade</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={gradeInput?.name || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Grade</label>
                            <input
                              type="text"
                              name="grade_point"
                              onChange={handleChange}
                              value={gradeInput?.grade_point || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Grade</label>
                            <input
                              type="text"
                              name="mark_from"
                              onChange={handleChange}
                              value={gradeInput?.mark_from || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Grade</label>
                            <input
                              type="text"
                              name="mark_upto"
                              onChange={handleChange}
                              value={gradeInput?.mark_upto || ""}
                              className="form-control"
                            />
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

export default UpdateGrade;

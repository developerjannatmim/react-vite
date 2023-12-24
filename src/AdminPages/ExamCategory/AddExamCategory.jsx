import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from './../../components/AdminSidebar';

const AddExamCategory = () => {
  const navigate = useNavigate();
  const [exam_categoryInput, setExamCategoryInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setExamCategoryInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const submitExamCategory = (e) => {
    e.preventDefault();
    const data = {
      name: exam_categoryInput.name,
    };
    fetch("http://127.0.0.1:8000/api/exam_category", {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire("Success", response?.message, "success");
        navigate("/admin/exam-category");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("SUBJECT_FORM").reset();
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
          <AdminSidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container-fluid px-3">
            <form onSubmit={submitExamCategory} id="SUBJECT_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Exam Category List
                    <Link
                      to="/admin/exam-category"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Exam Category
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
                          <label>Exam Category</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={exam_categoryInput.name}
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

export default AddExamCategory;

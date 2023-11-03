import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const AddClassRoom = () => {
  const navigate = useNavigate();
  const [classroomInput, setClassroomInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setClassroomInput({ ...classroomInput, [e.target.name]: e.target.value });
  };

  const submitClassRoom = (e) => {
    e.preventDefault();
    const data = {
      name: classroomInput.name,
    };
    fetch(
      "http://127.0.0.1:8000/api/classRooms",
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
        navigate("/admin/classroom");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("CLASSROOM_FORM").reset();
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
            <form onSubmit={submitClassRoom} id="CLASSROOM_FORM">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Class Room List
                    <Link
                      to="/admin/classroom"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Class Room
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
                          <label>Class Room Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={classroomInput.name}
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

export default AddClassRoom;

import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const UpdateTeacher = () => {
  const navigate = useNavigate();
  const [teacherInput, setTeacherInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setTeacherInput({ ...teacherInput, [e.target.name]: e.target.value });
  };

  const submitTeacher = (e) => {
    e.preventDefault();
    console.log(teacherInput);
    const data = { teacherInput };
    fetch(
      `http://127.0.0.1:8000/api/teachers/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire("Success", response?.message, "success");
        navigate("/admin/students");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("STUDENT_FORM").reset();
        Swal.fire("Warning", response?.message, "warning");
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachers/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTeacherInput(response.data?.teacher);
      })
      .catch((error) => {
        console.error(error);
        setTeacherInput(null);
      });
  }, [id]);

  // const [userInformation, setUserInfo] = useState([]);

  // const handleInfo = (e) => {
  //   setUserInfo({ ...userInformation, [e.target.name]: e.target.value });
  // };

  let userInformation;
  try {
    userInformation = JSON.parse(teacherInput?.user_information);
  } catch (error) {
    /**/
  }

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
                <h4>Teacher List</h4>
                <Link
                  to="/admin/teachers"
                  className="btn btn-primary btn-sm float-end"
                >
                  Teacher List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitTeacher} id="STUDENT_FORM">
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
                              value={teacherInput?.name || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={teacherInput?.email || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleChange}
                              value={userInformation?.address || ""}
                              className="form-control"
                            />
                          </div>
                          {/* <div className="col-md-6 form-group mb-3">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={userInformation?.phone || ""}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Photo</label>
                      <input
                        type="text"
                        name="photo"
                        onChange={handleChange}
                        value={userInformation?.photo || ""}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Gender</label>
                      <select
                        name="gender"
                        onChange={handleChange}
                        value={userInformation?.gender || ""}
                        className="form-control"
                        required
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
                        value={userInformation?.blood_group || ""}
                        className="form-control"
                        required
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

export default UpdateTeacher;

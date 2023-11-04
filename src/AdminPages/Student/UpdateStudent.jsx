import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const UpdateStudent = () => {
  const navigate = useNavigate();
  const [studentInput, setStudentInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setStudentInput(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitStudent = (e) => {
    e.preventDefault();
    console.log(studentInput);
    const data = { studentInput };
    fetch(
      `http://127.0.0.1:8000/api/students/${id}`,
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
        navigate("/admin/students");
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("STUDENT_FORM").reset();
        Swal.fire("Warning", response?.message, "warning");
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/students/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setStudentInput(response.data?.student);
      })
      .catch((error) => {
        console.error(error);
        setStudentInput(null);
      });
  }, [id]);

  // const [userInformation, setUserInfo] = useState([]);

  // const handleInfo = (e) => {
  //   setUserInfo({ ...userInformation, [e.target.name]: e.target.value });
  // };

  let userInformation;
  try {
    userInformation = JSON.parse(studentInput?.user_information);
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
                <h4>Student List</h4>
                <Link
                  to="/admin/students"
                  className="btn btn-primary btn-sm float-end"
                >
                  Student List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitStudent} id="STUDENT_FORM">
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
                              value={studentInput?.name || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={studentInput?.email || ""}
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

export default UpdateStudent;
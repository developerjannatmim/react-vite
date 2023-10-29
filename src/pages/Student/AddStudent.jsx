import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

const AddStudent = () => {
  const navigate = useNavigate();
  //const [picture, setPicture] = useState('');

  // const handleImage = (e) => {
  //   console.log(e.target.files);
  //   setPicture({ photo: e.target.files[0] });
  // };

  const [studentInput, setStudentInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    photo: "",
    birthday: "",
    gender: "",
    blood_group: "",
  });

  const handleChange = (e) => {
    setStudentInput({ ...studentInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      //photo: picture.photo,
      name: studentInput.name,
      photo: studentInput.photo,
      email: studentInput.email,
      password: studentInput.password,
      address: studentInput.address,
      phone: studentInput.phone,
      birthday: studentInput.birthday,
      gender: studentInput.gender,
      blood_group: studentInput.blood_group,
    };

    console.log({
      data,
    });

    fetch(
      "http://127.0.0.1:8000/api/students",
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
      Swal.fire('Success', response?.message, 'success');
      navigate('/students');
    })
    .catch((error) => {
      console.error(error);
      Swal.fire('Warning', response?.message, 'warning');
      //document.getElementById("ADMIN_FORM").reset();
    });
  };

  return (
    <div className="container-fluid px-4">
      <form onSubmit={handleSubmit} id="ADMIN_FORM">
        <div className="card mt-4">
          <div className="card-header">
            <h4>
            Student List
              <Link to="/students" className="btn btn-primary btn-sm float-end">
                View Student
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
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={studentInput.name || ""}
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={studentInput.email || ""}
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={studentInput.password || ""}
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={studentInput.address || ""}
                    name="address"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Phone</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={studentInput.phone || ""}
                    name="phone"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>BirthDay</label>
                  <input
                    type="date"
                    onChange={handleChange}
                    value={studentInput.birthday || ""}
                    name="birthday"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Photo</label>
                  <input
                    type="file"
                    onChange={handleChange}
                    value={studentInput.photo || ""}
                    name="photo"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Gender</label>
                  <select
                    onChange={handleChange}
                    value={studentInput.gender || ""}
                    name="gender"
                    className="form-control"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Blood Group</label>
                  <select
                    onChange={handleChange}
                    value={studentInput.blood_group || ""}
                    name="blood_group"
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
  );
};

export default AddStudent;

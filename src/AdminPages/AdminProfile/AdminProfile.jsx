import React from "react";
import "./../../assets/css/profile.css";
import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const AdminProfile = () => {
  const userName = localStorage.getItem("auth_name");
  const userEmail = localStorage.getItem("email");
  const userPhone = localStorage.getItem("phone");
  const userAddress = localStorage.getItem("address");
  const userBlood = localStorage.getItem("blood");
  const userGender = localStorage.getItem("gender");
  const userBirthday = localStorage.getItem("birthday");
  const userPhoto = localStorage.getItem("photo");
  //let userDesignation = localStorage.getItem('designation');

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
          <div className="container">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                        <img
                          src={`http://127.0.0.1:8000/admin-images/${userPhoto}`}
                          width="200"
                          height="200"
                          style={{ borderRadius: "100px" }}
                          alt="admin-image"
                        />
                        </div>
                        <h5 className="user-name">{userName}</h5>
                        <h6 className="user-email">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="344d415f5d7479554c435158581a575b59"
                          >
                            {userEmail}
                          </a>
                        </h6>
                      </div>
                      <div className="about">
                        <h5>About</h5>
                        <p>
                          I'm Yuki. Full Stack Designer I enjoy creating
                          user-centric, delightful and human experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={userName}
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="eMail"
                            value={userEmail}
                            placeholder="Enter email ID"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={userPhone}
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="url"
                            className="form-control"
                            id="address"
                            value={userAddress}
                            placeholder="Enter address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mt-3 mb-2 text-primary">
                          Extra Information
                        </h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Blood Group</label>
                          <input
                            type="name"
                            className="form-control"
                            id="blood group"
                            value={userBlood}
                            placeholder="Enter blood group"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Gender</label>
                          <input
                            type="name"
                            className="form-control"
                            id="gender"
                            value={userGender}
                            placeholder="Enter gender"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Birthday</label>
                          <input
                            type="text"
                            className="form-control"
                            id="birthday"
                            value={userBirthday}
                            placeholder="Enter birthday"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Designation</label>
                          <input
                            type="text"
                            className="form-control"
                            id="designation"
                            // value={userDesignation}
                            placeholder="Enter designation"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-secondary"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
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

export default AdminProfile;

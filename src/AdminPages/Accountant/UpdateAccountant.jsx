import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AccountantHeader from "../../components/AccountantHeader";
import AdminSidebar from './../../components/AdminSidebar';

const UpdateAccountant = () => {
  const navigate = useNavigate();
  const [accountantInput, setAccountantInput] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    setAccountantInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserInformationChange = (e) => {
    setAccountantInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleImage = (e) => {
    setAccountantInput((values) => ({
      ...values,
      user_information: {
        ...values.user_information,
        [e.target.name]: e.target.files[0],
      },
    }));
  };

  const submitAccountant = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", accountantInput.name);
    formData.append("email", accountantInput.email);
    formData.append("photo", accountantInput.user_information.photo);
    formData.append("address", accountantInput.user_information.address);
    formData.append("phone", accountantInput.user_information.phone);
    formData.append("birthday", accountantInput.user_information.birthday);
    formData.append("gender", accountantInput.user_information.gender);
    formData.append("blood_group", accountantInput.user_information.blood_group);

    console.log(accountantInput);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/accountant/${id}`, {
      body: formData,
      headers: {
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          console.info(response);
          Swal.fire("Success", response?.message, "success");
          navigate("/admin/accountant");
        } else {
          Swal.fire("Warning", response?.message, "warning");
          navigate(`/admin/accountant/${id}/edit`);
        }
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accountant/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAccountantInput(response.data?.accountant);
      })
      .catch((error) => {
        console.error(error);
        setAccountantInput(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <AccountantHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container"  style={{ marginLeft: '270px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Accountant Edit</h4>
                <Link
                  to="/admin/accountant"
                  className="btn btn-primary btn-sm float-end"
                >
                  Accountant List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitAccountant}>
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
                              value={accountantInput?.name || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={accountantInput?.email || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleUserInformationChange}
                              value={
                                accountantInput?.user_information?.address || ""
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              onChange={handleUserInformationChange}
                              value={accountantInput?.user_information?.phone || ""}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Birthday</label>
                            <input
                              type="date"
                              name="birthday"
                              onChange={handleUserInformationChange}
                              value={
                                accountantInput?.user_information?.birthday || ""
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Photo</label>
                            <input
                              type="file"
                              name="photo"
                              onChange={handleImage}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Gender</label>
                            <select
                              name="gender"
                              onChange={handleUserInformationChange}
                              value={accountantInput?.user_information?.gender || ""}
                              className="form-control"
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
                              onChange={handleUserInformationChange}
                              value={
                                accountantInput?.user_information?.blood_group || ""
                              }
                              className="form-control"
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

export default UpdateAccountant;

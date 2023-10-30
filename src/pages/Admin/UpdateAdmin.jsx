import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const UpdateAdmin = () => {
  const navigate = useNavigate();
  const [adminInput, setAdminInput] = useState([]);
  const { id } = useParams();
  //console.log(id);

  let userInformation;
  try {
    userInformation = JSON.parse(adminInput?.user_information);
  } catch (error) {
    /**/
  }

  const handleChange = (e) => {
    setAdminInput({
      ...adminInput,
      user_information: {
        ...userInformation,
        [e.target.name]: e.target.value,
      },
      [e.target.name]: e.target.value,
    });
  };

  const submitAdmin = (e) => {
    e.preventDefault();
    console.log(adminInput);
    const data = { adminInput };
    fetch(
      `http://127.0.0.1:8000/api/admin/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        if (response === 200) {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          navigate('/dashboard/admin');
        } else {
          //document.getElementById("ADMIN_FORM").reset();
          Swal.fire('Warning', 'Unprocessable Content');
          navigate(`/dashboard/admin/${id}/edit`);
        }
      });
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admin/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdminInput(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdminInput(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Admin List</h4>
                <Link to="/dashboard/admin" className="btn btn-primary btn-sm float-end">
                  Admin List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitAdmin} id="ADMIN_FORM">
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
                              value={adminInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={adminInput?.email || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              onChange={handleChange}
                              value={userInformation?.address || ''}
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

export default UpdateAdmin;

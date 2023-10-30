import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const AddParent = () => {
  const navigate = useNavigate();
  //const [picture, setPicture] = useState('');

  // const handleImage = (e) => {
  //   console.log(e.target.files);
  //   setPicture({ photo: e.target.files[0] });
  // };

  const [parentInput, setParentInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    photo: '',
    birthday: '',
    gender: '',
    blood_group: '',
  });

  const handleChange = (e) => {
    setParentInput({ ...parentInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      //photo: picture.photo,
      name: parentInput.name,
      photo: parentInput.photo,
      email: parentInput.email,
      password: parentInput.password,
      address: parentInput.address,
      phone: parentInput.phone,
      birthday: parentInput.birthday,
      gender: parentInput.gender,
      blood_group: parentInput.blood_group,
    };

    console.log({
      data,
    });

    fetch(
      'http://127.0.0.1:8000/api/parents',
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/dashboard/parents');
      })
      .catch((error) => {
        console.error(error);
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

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
          <div className="container-fluid px-4">
            <form onSubmit={handleSubmit}>
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Parent List
                    <Link
                      to="/dashboard/parents"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Parent
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
                          value={parentInput.name || ''}
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
                          value={parentInput.email || ''}
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
                          value={parentInput.password || ''}
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
                          value={parentInput.address || ''}
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
                          value={parentInput.phone || ''}
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
                          value={parentInput.birthday || ''}
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
                          value={parentInput.photo || ''}
                          name="photo"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Gender</label>
                        <select
                          onChange={handleChange}
                          value={parentInput.gender || ''}
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
                          value={parentInput.blood_group || ''}
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AddParent;

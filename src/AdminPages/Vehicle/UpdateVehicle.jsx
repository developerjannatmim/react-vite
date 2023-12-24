import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateVehicle = () => {
  const navigate = useNavigate();
  const [vehicleInput, setVehicleInput] = useState([]);
  const [driver, setDriver] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setVehicleInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitVehicle = (e) => {
    e.preventDefault();
    console.log(vehicleInput);
    const data = vehicleInput;
    fetch(`http://127.0.0.1:8000/api/vehicles/${id}`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/vehicles');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SUBJECT_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/vehicles/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setVehicleInput(response.data?.vehicle);
      })
      .catch((error) => {
        console.error(error);
        setVehicleInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ driver });
    fetch(`http://127.0.0.1:8000/api/driver`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setDriver(response.data?.driver);
      })
      .catch((error) => {
        console.error(error);
        setDriver(null);
      });
  }, []);

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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Vehicle Edit</h4>
                <Link
                  to="/admin/vehicles"
                  className="btn btn-primary btn-sm float-end"
                >
                  Vehicle List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitVehicle} id="SUBJECT_FORM">
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
                            <label>Driver Name</label>
                            <select
                              name="driver_id"
                              className="form-control"
                              onChange={handleChange}
                              value={vehicleInput?.driver_id || ''}
                            >
                              <option>select vehicle category</option>
                              {driver?.map((driverItem) => {
                                return (
                                  <option
                                    key={driverItem.id}
                                    value={driverItem.id}
                                  >
                                    {driverItem.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Driver Email</label>
                            <select
                              name="driver_id"
                              className="form-control"
                              onChange={handleChange}
                              value={vehicleInput?.driver_id || ''}
                            >
                              <option>select driver email</option>
                              {driver?.map((driverItem) => {
                                return (
                                  <option
                                    key={driverItem.id}
                                    value={driverItem.id}
                                  >
                                    {driverItem.email}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Vehicle Model</label>
                            <input
                              type="text"
                              name="vehicle_model"
                              onChange={handleChange}
                              value={vehicleInput?.vehicle_model || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Vehicle Info</label>
                            <input
                              type="text"
                              name="vehicle_info"
                              onChange={handleChange}
                              value={vehicleInput?.vehicle_info || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Capacity</label>
                            <input
                              type="text"
                              name="capacity"
                              onChange={handleChange}
                              value={vehicleInput?.capacity || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Route</label>
                            <input
                              type="text"
                              name="route"
                              onChange={handleChange}
                              value={vehicleInput?.route || ''}
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

export default UpdateVehicle;

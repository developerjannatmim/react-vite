import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TeacherSidebar from './../../components/TeacherSidebar';
import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';
import './../../assets/css/exam.css';

const ShowVehicle = () => {
  const [vehicleItem, setVehicleItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/vehicles/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setVehicleItem(response.data?.vehicle);
      })
      .catch((error) => {
        console.error(error);
        setVehicleItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <TeacherHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <TeacherSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Vehicle Details</h4>
                <Link
                  to="/teacher/vehicles"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Vehicle List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Vehicle Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{vehicleItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Vehicle Model</label>
                        </div>
                        <div class="col-md-6">
                          <p>{vehicleItem?.vehicle_model}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Vehicle Info</label>
                        </div>
                        <div class="col-md-6">
                          <p>{vehicleItem?.vehicle_info}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Driver Info</label>
                        </div>
                        <div class="col-md-6">
                          <p>
                            <span style={{ color: 'gray' }}>Name: </span>
                            {vehicleItem?.driver?.name}
                          </p>
                          <p>
                            <span style={{ color: 'gray' }}>Email: </span>
                            {vehicleItem?.driver?.email}
                          </p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Capacity</label>
                        </div>
                        <div class="col-md-6">
                          <p>{vehicleItem?.capacity}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Route</label>
                        </div>
                        <div class="col-md-6">
                          <p>{vehicleItem?.route}</p>
                        </div>
                      </li>
                    </ol>
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

export default ShowVehicle;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';
import './../../assets/css/userdetail.css';
import StudentSidebar from './../../components/StudentSidebar';

const ShowDriver = () => {
  const [driverItem, setDriverItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/driver/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setDriverItem(response.data?.driver);
      })
      .catch((error) => {
        console.error(error);
        setDriverItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <StudentSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Driver Information</h4>
                <Link
                  to="/student/driver"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Driver List
                </Link>
              </div>
              <section className="section about-section gray-bg" id="about">
                <div className="container">
                  <div
                    className="row align-items-center flex-row-reverse"
                    style={{ marginTop: '-60px' }}
                  >
                    <div className="col-lg-8">
                      <div className="about-text go-to">
                        <h3 className="dark-color">Driver Details</h3>
                        <h6 className="theme-color lead">{driverItem?.name}</h6>
                        <div className="row about-list">
                          <div className="col-md-6">
                            <div className="media">
                              <label>Birthday</label>
                              <p>{driverItem?.user_information?.birthday}</p>
                            </div>
                            <div className="media">
                              <label>Gender</label>
                              <p>{driverItem?.user_information?.gender}</p>
                            </div>
                            <div className="media">
                              <label>Address</label>
                              <p>{driverItem?.user_information?.address}</p>
                            </div>
                          </div>
                          <div
                            className="col-md-6"
                            style={{ marginRight: '600px' }}
                          >
                            <div className="media">
                              <label>E-mail</label>
                              <p>{driverItem?.email}</p>
                            </div>
                            <div className="media">
                              <label>Phone</label>
                              <p>{driverItem?.user_information?.phone}</p>
                            </div>
                            <div className="media">
                              <label>Blood Group</label>
                              <p>{driverItem?.user_information?.blood_group}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="about-avatar">
                        <img
                          src={`http://127.0.0.1:8000/driver-images/${driverItem?.user_information?.photo}`}
                          width="200"
                          height="200"
                          style={{ marginLeft: '30px', borderRadius: '100px' }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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

export default ShowDriver;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import './../../assets/css/userdetail.css';
import AdminSidebar from './../../components/AdminSidebar';

const ShowAdmin = () => {
  const [adminItem, setAdminItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admin/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdminItem(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdminItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '290px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Admin Information</h4>
                <Link
                  to="/admin/admin"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Admin List
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
                        <h3 className="dark-color">Admin Details</h3>
                        <h6 className="theme-color lead">{adminItem?.name}</h6>
                        <div className="row about-list">
                          <div className="col-md-6">
                            <div className="media">
                              <label>Birthday</label>
                              <p>{adminItem?.user_information?.birthday}</p>
                            </div>
                            <div className="media">
                              <label>Gender</label>
                              <p>{adminItem?.user_information?.gender}</p>
                            </div>
                            <div className="media">
                              <label>Address</label>
                              <p>{adminItem?.user_information?.address}</p>
                            </div>
                          </div>
                          <div
                            className="col-md-6"
                            style={{ marginRight: '600px' }}
                          >
                            <div className="media">
                              <label>E-mail</label>
                              <p>{adminItem?.email}</p>
                            </div>
                            <div className="media">
                              <label>Phone</label>
                              <p>{adminItem?.user_information?.phone}</p>
                            </div>
                            <div className="media">
                              <label>Blood Group</label>
                              <p>{adminItem?.user_information?.blood_group}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="about-avatar">
                        <img
                          src={`http://127.0.0.1:8000/admin-images/${adminItem?.user_information?.photo}`}
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

export default ShowAdmin;

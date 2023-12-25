import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

import '../../assets/css/new.css';

const ShowUserRole = () => {
  const [userRoleItem, setUserRoleItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/userRoles/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUserRoleItem(response.data?.userRole);
      })
      .catch((error) => {
        console.error(error);
        setUserRoleItem(null);
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
          <div className="mt-5 container">
            <div className="card">
              <div className="card-header">
                <h4>User Role Details</h4>
                <Link
                  to="/admin/userRoles"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px' }}
                >
                  User Role List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Id</strong>
                        <p>{userRoleItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>User Role</strong>
                        <p>{userRoleItem?.name}</p>
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

export default ShowUserRole;

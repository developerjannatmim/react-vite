import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const ShowAdmin = () => {
  const [adminItem, setAdminItem] = useState(null);
  const { id } = useParams();
  console.log(id);

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
        setAdminItem(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdminItem(null);
      });
  }, [id]);

  let userInformation;
  try {
    userInformation = JSON.parse(adminItem?.user_information);
  } catch (error) {
    /**/
  }

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
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Admin Information</h4>
                <Link to="/dashboard/admin" className="btn btn-primary btn-sm float-end">
                  Admin List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Photo</th>
                      <th>Gender</th>
                      <th>Birthday</th>
                      <th>Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{adminItem?.id}</td>
                      <td>{adminItem?.name}</td>
                      <td>{adminItem?.email}</td>
                      <td>{userInformation?.address}</td>
                      <td>{userInformation?.phone}</td>
                      <td>{userInformation?.photo}</td>
                      <td>{userInformation?.gender}</td>
                      <td>{userInformation?.birthday}</td>
                      <td>{userInformation?.blood_group}</td>
                    </tr>
                  </tbody>
                </table>
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

export default ShowAdmin;

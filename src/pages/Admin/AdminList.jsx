import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminList = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const deleteAdminData = (e, id) => {
      e.preventDefault();
      const Clicked = e.currentTarget;
      Clicked.innerText = 'deleting';
  
      fetch(`http://127.0.0.1:8000/api/admin/${id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Clicked.closest('tr').remove();
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/admin?', {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          setAdmin(response.data?.admin);
        })
        .catch((error) => {
          console.error(error);
          setAdmin(null);
          setLoading(false);
        });
    }, [loading]);

    return (
        <div className="container px-4">
        <div className="card">
          <div className="card-header">
            <h4>Admin List</h4>
            <Link
              to="/admin/create"
              className="btn btn-primary btn-sm float-end"
            >
              Add Admin
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Photo</th>
                <th scope="col">BirthDay</th>
                <th scope="col">Gender</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {admin?.map((adminData) => {
                    let userInformation;
                    try{
                        userInformation = JSON.parse(adminData?.user_information);
                    }catch (error) {/**/}
                  return (
                    <tr key={adminData?.id}>
                      <td>{adminData?.id}</td>
                      <td>{adminData?.name}</td>
                      <td>{adminData?.email}</td>
                      <td>{userInformation?.address}</td>
                      <td>{userInformation?.phone}</td>
                      <td>{userInformation?.photo}</td>
                      <td>{userInformation?.birthday}</td>
                      <td>{userInformation?.gender}</td>
                      <td>{userInformation?.blood_group}</td>
                      <td>
                        <Link
                          to={`/admin/${adminData.id}/show`}
                          className="btn btn-primary btn-sm"
                        >
                          Show
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/admin/${adminData.id}/edit`}
                          className="btn btn-success btn-sm"
                        >
                          Edit
                        </Link>
                      </td>
                      <td
                        type="button"
                        onClick={(e) => deleteAdminData(e, adminData.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AdminList;
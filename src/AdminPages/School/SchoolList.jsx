import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const SchoolList = () => {
  const navigate = useNavigate();
  const [schoolList, setSchoolList] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteSchool = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete school id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/schools/${id}`, {
        headers: {
          Accept: 'application/json'
        },
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          Clicked.closest('tr').remove();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/schools?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSchoolList(response.data?.school);
      })
      .catch((error) => {
        console.error(error);
        setSchoolList(null);
        setLoading(false);
      });
  }, [loading]);

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
          <div className="mt-5 container px-4" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>School Information</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">School Name</th>
                      <th scope="col">School Email</th>
                      <th scope="col">School Phone</th>
                      <th scope="col">School Address</th>
                      <th scope="col">School Information</th>
                      <th scope="col">Status</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schoolList?.map((schoolItem) => {
                      return (
                        <tr key={schoolItem?.id}>
                          <td>{schoolItem?.id}</td>
                          <td>{schoolItem?.title}</td>
                          <td>{schoolItem?.email}</td>
                          <td>{schoolItem?.phone}</td>
                          <td>{schoolItem?.address}</td>
                          <td>{schoolItem?.school_info}</td>
                          {schoolItem?.status === 1 && (
                            <td>
                              <button
                                style={{
                                  backgroundColor: '#65B741',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '14px'
                                }}
                              >
                                active
                              </button>
                            </td>
                          )}
                          {schoolItem?.status === 0 && (
                            <td>
                              <button
                                style={{
                                  backgroundColor: '#EF4040',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '14px'
                                }}
                              >
                                inactive
                              </button>
                            </td>
                          )}
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-warning dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Actions
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/admin/settings/school-info/${schoolItem?.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) =>
                                      deleteSchool(e, schoolItem?.id)
                                    }
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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

export default SchoolList;

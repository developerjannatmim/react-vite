import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/style.css';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AdmissionList = () => {
  const [admission, setAdmission] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteAdmissionData = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete admission id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/admission/${id}`, {
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
          Swal.fire('Warning', response?.message, 'warning');
        });
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/admission?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdmission(response.data?.admission);
      })
      .catch((error) => {
        console.error(error);
        setAdmission(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = admission?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(admission?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
          {/* <StudentSidebar/> */}
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Admission List</h4>
                <Link
                  to="/admin/admission/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Admission
                </Link>
              </div>
              <div className="page-system mt-3 mb-3" style={{ marginLeft: '660px' }}>
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={prePage}>
                        Prev
                      </a>
                    </li>
                    {numbers.map((n, i) => {
                      return (
                        <li
                          className={`page-item ${
                            currentPage === n ? 'active' : ''
                          }`}
                          key={i}
                        >
                          <Link
                            to="#"
                            className="page-link"
                            onClick={() => changeCurrentPage(n)}
                          >
                            {n}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <Link to="#" className="page-link" onClick={nextPage}>
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="content">
                <div class="container">
                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col"></th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">User Info</th>
                          <th scope="col">Class</th>
                          <th scope="col">Section</th>
                          <th scope="col">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records?.map((admissionData) => {
                          return (
                            <tr scope="row" key={admissionData?.id}>
                              <td>{admissionData?.id}</td>
                              <td>
                                <img
                                  src={`http://127.0.0.1:8000/admission-images/${admissionData?.image}`}
                                  alt="admission-image"
                                  width="40"
                                  height="40"
                                  style={{ borderRadius: '50px' }}
                                />
                              </td>
                              <td>
                                <span>{admissionData?.name}</span>
                              </td>
                              <td>
                                <small class="d-block mt-2">
                                  {admissionData?.email}
                                </small>
                              </td>
                              <td>
                                <small>
                                  <b>Phone: </b>+{admissionData?.phone}
                                </small>
                                <br />
                                <small>
                                  <b>Address: </b>
                                  {admissionData?.address}
                                </small>
                              </td>
                              <td>{admissionData?.class?.name}</td>
                              <td>{admissionData?.section?.name}</td>
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
                                        to={`/admin/admission/${admissionData?.id}/show`}
                                      >
                                        Show
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to={`/admin/admission/${admissionData?.id}/edit`}
                                      >
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        onClick={(e) =>
                                          deleteAdmissionData(e, admissionData?.id)
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );

  function prePage(e) {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  function nextPage(e) {
    if (currentPage !== npage) {
      e.preventDefault();
      setCurrentPage(currentPage + 1);
    }
  }
};

export default AdmissionList;

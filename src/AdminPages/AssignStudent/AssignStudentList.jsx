import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AssignStudentList = () => {
  const [assignStudentList, setAssignStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteAssignStudent = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete assignStudent id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/assignStudents/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/assignStudents?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAssignStudentList(response.data?.assignStudent);
      })
      .catch((error) => {
        console.error(error);
        setAssignStudentList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = assignStudentList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(assignStudentList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Assign Student List</h4>
                <Link
                  to="/admin/assignStudents/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Assign Student
                </Link>
              </div>
              <div className="page-system mt-4">
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
                          <a
                            href="#"
                            className="page-link"
                            onClick={() => changeCurrentPage(n)}
                          >
                            {n}
                          </a>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={nextPage}>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Vehicle Model</th>
                      <th scope="col">Driver Name</th>
                      <th scope="col">Student Info</th>
                      <th scope="col">Class</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((assignStudent) => {
                      let userInformation;
                      //let driverInformation;
                      try {
                        userInformation = JSON.parse(
                          assignStudent?.student?.user_information);
                        {/*
                          driverInformation = JSON.parse(
                          assignStudent?.driver?.user_information); */}
                      } catch (error) {
                        /**/
                      }
                      return (
                        <tr key={assignStudent.id}>
                          <td>{assignStudent.id}</td>
                          <td>{assignStudent?.vehicle?.vehicle_model}</td>
                          <td>{assignStudent?.driver?.name}</td>
                          <td className="d-flex align-items-center">
                            <div>
                              <img
                                src={`http://127.0.0.1:8000/student-images/${userInformation?.photo}`}
                                alt="student-image"
                                width="40"
                                height="40"
                                style={{ borderRadius: '50px' }}
                              />
                            </div>
                            <div className="pl-3">
                              <small><b>ID:</b> {assignStudent?.student?.id}</small><br/>
                              <small><b>Name:</b> {assignStudent?.student?.name}</small>
                            </div>
                          </td>
                          <td>{assignStudent?.class?.name}</td>
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
                                    to={`/admin/assignStudents/${assignStudent.id}/show`}
                                  >
                                    Show
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/admin/assignStudents/${assignStudent.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) =>
                                      deleteAssignStudent(e, assignStudent.id)
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

export default AssignStudentList;

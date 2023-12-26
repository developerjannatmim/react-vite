import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/style.css';

import StudentSidebar from './../../components/StudentSidebar';
import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteStudentData = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete student id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/students/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/students?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setStudents(response.data?.students);
      })
      .catch((error) => {
        console.error(error);
        setStudents(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = students?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(students?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
          <div className="mt-5 container px-4" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Student List</h4>
                <Link
                  to="/student/students/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
                </Link>
              </div>
              <div
                className="page-system mt-4 mb-3"
                style={{ marginLeft: '690px' }}
              >
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
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">User Info</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((studentData) => {
                      let userInformation;
                      try {
                        userInformation = JSON.parse(
                          studentData?.user_information
                        );
                      } catch (error) {
                        /**/
                      }
                      return (
                        <tr scope="row" key={studentData?.id}>
                          <td>{studentData?.id}</td>
                          <td>
                            <img
                              src={`http://127.0.0.1:8000/student-images/${userInformation?.photo}`}
                              alt="student-image"
                              width="40"
                              height="40"
                              style={{ borderRadius: '50px' }}
                            />
                          </td>
                          <td>
                            <span>{studentData?.name}</span>
                          </td>
                          <td>
                            <small class="d-block mt-2">
                              {studentData?.email}
                            </small>
                          </td>
                          <td>
                            <small>
                              <b>Phone: </b>+{userInformation?.phone}
                            </small>
                            <br />
                            <small>
                              <b>Address: </b>
                              {userInformation?.address}
                            </small>
                          </td>
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
                                    to={`/student/students/${studentData?.id}/show`}
                                  >
                                    Show
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

export default StudentList;

import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/style.css';

import TeacherSidebar from './../../components/TeacherSidebar';
import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

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
        <TeacherHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <TeacherSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Student List</h4>
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
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Photo</th>
                      <th scope="col">BirthDay</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Show</th>
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
                        <tr key={studentData?.id}>
                          <td>{studentData?.id}</td>
                          <td>{studentData?.name}</td>
                          <td>{studentData?.email}</td>
                          <td>{userInformation?.address}</td>
                          <td>{userInformation?.phone}</td>
                          <td>
                            <img
                              src={`http://127.0.0.1:8000/student-images/${userInformation?.photo}`}
                              width="40"
                              height="40"
                              alt="student-image"
                            />
                          </td>
                          <td>{userInformation?.birthday}</td>
                          <td>{userInformation?.gender}</td>
                          <td>{userInformation?.blood_group}</td>
                          <td>
                            <Link
                              to={`/teacher/students/${studentData.id}/show`}
                              className="btn btn-primary btn-sm"
                            >
                              Show
                            </Link>
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

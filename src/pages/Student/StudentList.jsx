import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/style.css';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    let role = localStorage.getItem('role');
    setUserRole(role);
  })

  const deleteStudentData = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if(confirm(`Are you sure you want to delete student id ${id}?`)){
    fetch(`http://127.0.0.1:8000/api/students/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'DELETE',
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
        Accept: 'application/json',
      },
      method: 'GET',
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

  if(userRole === '1'){
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
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Student List</h4>
                <Link
                  to="/dashboard/students/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
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
                          <td>{userInformation?.photo}</td>
                          <td>{userInformation?.birthday}</td>
                          <td>{userInformation?.gender}</td>
                          <td>{userInformation?.blood_group}</td>
                          <td>
                            <Link
                              to={`/dashboard/students/${studentData.id}/show`}
                              className="btn btn-primary btn-sm"
                            >
                              Show
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/dashboard/students/${studentData.id}/edit`}
                              className="btn btn-success btn-sm"
                            >
                              Edit
                            </Link>
                          </td>
                          <td
                            type="button"
                            onClick={(e) =>
                              deleteStudentData(e, studentData.id)
                            }
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
}else if(userRole === '2' || userRole === '3' || userRole === '4'){
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
                          <td>{userInformation?.photo}</td>
                          <td>{userInformation?.birthday}</td>
                          <td>{userInformation?.gender}</td>
                          <td>{userInformation?.blood_group}</td>
                          <td>
                            <Link
                              to={`/dashboard/students/${studentData.id}/show`}
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
}

};

export default StudentList;

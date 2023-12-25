import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const ClassesList = () => {
  const [classList, setClassList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteClass = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete class id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/classes/${id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          Clicked.closest("tr").remove();
        })
        .catch((error) => {
          console.error(error);
          Swal.fire('Warning', response?.message, 'warning');
        });
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/classes?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassList(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClassList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = classList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(classList?.length / dataPerPage);
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
        <div className="mt-5 d-flex align-items-center">
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Class List</h4>
                <Link
                  to="/admin/classes/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Class
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
                      <th scope="col">Class Name</th>
                      <th scope="col">Section Name</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((classItem) => {
                      return (
                        <tr key={classItem.id}>
                          <td>{classItem.id}</td>
                          <td>{classItem.name}</td>
                          <td>{classItem.section?.name}</td>
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
                                    to={`/admin/classes/${classItem.id}/show`}
                                  >
                                    Show
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/admin/classes/${classItem.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) => deleteClass(e, classItem.id)}
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

export default ClassesList;

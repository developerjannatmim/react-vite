import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';
import TeacherSidebar from './../../components/TeacherSidebar';

const MarkList = () => {
  const [markList, setMarkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteMark = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete mark id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/marks/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/marks?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMarkList(response.data?.marks);
      })
      .catch((error) => {
        console.error(error);
        setMarkList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = markList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(markList?.length / dataPerPage);
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
        <div className="d-flex align-items-center" style={{ marginLeft: '300px' }}>
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Mark List</h4>
                <Link
                  to="/teacher/marks/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Mark
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
                      <th scope="col">Mark</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Class</th>
                      <th scope="col">Student</th>
                      <th scope="col">Exam</th>
                      <th scope="col">Section</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Comment</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((mark) => {
                      return (
                        <tr key={mark?.id}>
                          <td>{mark?.id}</td>
                          <td>{mark?.marks}</td>
                          <td>{mark?.grade_point}</td>
                          <td>{mark?.class?.name}</td>
                          <td>{mark?.user?.name}</td>
                          <td>{mark?.exam_category?.name}</td>
                          <td>{mark?.section?.name}</td>
                          <td>{mark?.subject?.name}</td>
                          <td>{mark?.comment}</td>
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
                                    to={`/teacher/marks/${mark?.id}/show`}
                                  >
                                    Show
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/teacher/marks/${mark?.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) => deleteMark(e, mark?.id)}
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

export default MarkList;

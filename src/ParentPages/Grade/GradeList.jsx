import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import ParentHeader from '../../components/ParentHeader';

const GradeList = () => {
  const [gradeList, setGradeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/grades?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGradeList(response.data?.grades);
      })
      .catch((error) => {
        console.error(error);
        setGradeList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = gradeList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(gradeList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <ParentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Grade List</h4>
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
                      <th scope="col">Grade</th>
                      <th scope="col">Grade Point</th>
                      <th scope="col">Mark From</th>
                      <th scope="col">Mark Upto</th>
                      <th scope="col">Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((grade) => {
                      return (
                        <tr key={grade.id}>
                          <td>{grade.id}</td>
                          <td>{grade.name}</td>
                          <td>{grade.grade_point}</td>
                          <td>{grade.mark_from}</td>
                          <td>{grade.mark_upto}</td>
                          <td>
                            <Link
                              to={`/parent/grades/${grade.id}/show`}
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

export default GradeList;

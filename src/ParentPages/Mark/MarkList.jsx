import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import ParentHeader from '../../components/ParentHeader';

const MarkList = () => {
  const [markList, setMarkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

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
                <h4>Mark List</h4>
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
                      <th scope="col">Grade Point</th>
                      <th scope="col">Class Name</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Exam</th>
                      <th scope="col">Section Name</th>
                      <th scope="col">Subject Name</th>
                      <th scope="col">Comment</th>
                      <th scope="col">Show</th>
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
                          <td>{mark?.exam?.name}</td>
                          <td>{mark?.section?.name}</td>
                          <td>{mark?.subject?.name}</td>
                          <td>{mark?.comment}</td>
                          <td>
                            <Link
                              to={`/parent/marks/${mark?.id}/show`}
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

export default MarkList;

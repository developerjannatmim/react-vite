import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import StudentHeader from "../../components/StudentHeader";

const ExamList = () => {
  const [examList, setExamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/exams?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamList(response.data?.exams);
      })
      .catch((error) => {
        console.error(error);
        setExamList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = examList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(examList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Exam List</h4>
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
                            currentPage === n ? "active" : ""
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
                      <th scope="col">Exam Name</th>
                      <th scope="col">Class Name</th>
                      <th scope="col">Section Name</th>
                      <th scope="col">Exam Type</th>
                      <th scope="col">Starting Time</th>
                      <th scope="col">Ending Time</th>
                      <th scope="col">Total Marks</th>
                      <th scope="col">Status</th>
                      <th scope="col">Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((exam) => {
                      return (
                        <tr key={exam.id}>
                          <td>{exam.id}</td>
                          <td>{exam.name}</td>
                          <td>{exam.exam_type}</td>
                          <td>{exam.starting_time}</td>
                          <td>{exam.ending_time}</td>
                          <td>{exam.total_marks}</td>
                          <td>{exam.status}</td>
                          <td>{exam.section?.name}</td>
                          <td>{exam.class?.name}</td>
                          <td>
                            <Link
                              to={`/student/exams/${exam.id}/show`}
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

export default ExamList;

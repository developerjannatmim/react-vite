import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import ParentHeader from "../../components/ParentHeader";

const RoutineList = () => {
  const [routineList, setRoutineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/routines?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRoutineList(response.data?.routines);
      })
      .catch((error) => {
        console.error(error);
        setRoutineList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = routineList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(routineList?.length / dataPerPage);
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
          <div className="col overflow-hidden">
            <div className="container px-4">
              <div className="card">
                <div className="card-header">
                  <h4>Routine List</h4>
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
                        <th scope="col">day</th>
                        <th scope="col">s_h</th>
                        <th scope="col">s_m</th>
                        <th scope="col">e_h</th>
                        <th scope="col">e_m</th>
                        <th scope="col">r_c</th>
                        <th scope="col">C</th>
                        <th scope="col">Section</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Class Room</th>
                        <th scope="col">Show</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((routineItem) => {
                        return (
                          <tr key={routineItem.id}>
                            <td>{routineItem.id}</td>
                            <td>{routineItem.day}</td>
                            <td>{routineItem.starting_hour}</td>
                            <td>{routineItem.starting_minute}</td>
                            <td>{routineItem.ending_hour}</td>
                            <td>{routineItem.ending_minute}</td>
                            <td>{routineItem.creator?.name}</td>
                            <td>{routineItem.class?.name}</td>
                            <td>{routineItem.section?.name}</td>
                            <td>{routineItem.subject?.name}</td>
                            <td>{routineItem.room?.name}</td>
                            <td>
                              <Link
                                to={`/parent/routines/${routineItem.id}/show`}
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

export default RoutineList;

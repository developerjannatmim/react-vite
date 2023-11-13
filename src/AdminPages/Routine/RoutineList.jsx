import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const RoutineList = () => {
  const [routineList, setRoutineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteRoutine = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete routine id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/routines/${id}`, {
        headers: {
          Accept: "application/json",
        },
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Swal.fire("Success", response?.message, "success");
          Clicked.closest("tr").remove();
        })
        .catch((error) => {
          console.error(error);
          Swal.fire("Warning", response?.message, "warning");
        });
    }
  };

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
        <AdminHeader />
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
                <Link
                  to="/admin/routines/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Routine
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
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
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
                              to={`/admin/routines/${routineItem.id}/show`}
                              className="btn btn-primary btn-sm"
                            >
                              Show
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/admin/routines/${routineItem.id}/edit`}
                              className="btn btn-success btn-sm"
                            >
                              Edit
                            </Link>
                          </td>
                          <td
                            type="button"
                            onClick={(e) => deleteRoutine(e, routineItem.id)}
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
};

export default RoutineList;

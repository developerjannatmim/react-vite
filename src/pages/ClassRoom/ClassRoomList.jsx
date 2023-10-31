import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./../../components/Header";
import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";

const ClassRoomList = () => {
  const [userRole, setUserRole] = useState("");
  const [classRoomList, setClassRoomList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    let role = localStorage.getItem("role");
    setUserRole(role);
  });

  const deleteClassRoom = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete class room id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/classRooms/${id}`, {
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
        });
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/classRooms?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassRoomList(response.data?.classRooms);
      })
      .catch((error) => {
        console.error(error);
        setClassRoomList(null);
        setLoading(false);
      });
  }, [loading]);

  if (userRole === "1") {
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
                  <h4>Class Room List</h4>
                  <Link
                    to="/dashboard/classroom/create"
                    className="btn btn-primary btn-sm float-end"
                  >
                    Add Class Room
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
                        <th scope="col">Class Room No.</th>
                        <th scope="col">Show</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classRoomList?.map((classRoom) => {
                        return (
                          <tr key={classRoom.id}>
                            <td>{classRoom.id}</td>
                            <td>{classRoom.name}</td>
                            <td>
                              <Link
                                to={`/dashboard/classroom/${classRoom.id}/show`}
                                className="btn btn-primary btn-sm"
                              >
                                Show
                              </Link>
                            </td>
                            <td>
                              <Link
                                to={`/dashboard/classroom/${classRoom.id}/edit`}
                                className="btn btn-success btn-sm"
                              >
                                Edit
                              </Link>
                            </td>
                            <td
                              type="button"
                              onClick={(e) => deleteClassRoom(e, classRoom.id)}
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
  } else if (userRole === '2' || userRole === '3' || userRole === '4') {
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
                  <h4>Class Room List</h4>
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
                        <th scope="col">Class Room No.</th>
                        <th scope="col">Show</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classRoomList?.map((classRoom) => {
                        return (
                          <tr key={classRoom.id}>
                            <td>{classRoom.id}</td>
                            <td>{classRoom.name}</td>
                            <td>
                              <Link
                                to={`/dashboard/classroom/${classRoom.id}/show`}
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

export default ClassRoomList;

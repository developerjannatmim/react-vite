import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../../assets/css/style.css";

import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import LibrarianHeader from "../../components/LibrarianHeader";

const LibrarianList = () => {
  const [librarian, setLibrarian] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteLibrarianData = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete librarian id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/librarian/${id}`, {
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
    fetch("http://127.0.0.1:8000/api/librarian?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setLibrarian(response.data?.librarian);
      })
      .catch((error) => {
        console.error(error);
        setLibrarian(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = librarian?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(librarian?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <LibrarianHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Librarian List</h4>
                <Link
                  to="/admin/librarian/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Librarian
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
              <div className="content">
                <div className="container">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col"></th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">User Info</th>
                          <th scope="col">Show</th>
                          <th scope="col">Edit</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records?.map((librarianData) => {
                          let userInformation;
                          try {
                            userInformation = JSON.parse(
                              librarianData?.user_information
                            );
                          } catch (error) {
                            /**/
                          }
                          return (
                            <tr scope="row" key={librarianData?.id}>
                              <td>{librarianData?.id}</td>
                              <td>
                                <img
                                  src={`http://127.0.0.1:8000/librarian-images/${userInformation?.photo}`}
                                  alt="librarian-image"
                                  width="40"
                                  height="40"
                                  style={{ borderRadius: "50px" }}
                                />
                              </td>
                              <td>
                                <span>{librarianData?.name}</span>
                              </td>
                              <td>
                                <small className="d-block mt-2">
                                  {librarianData?.email}
                                </small>
                              </td>
                              <td>
                                <small>
                                  <b>Phone: </b>088+{userInformation?.phone}
                                </small>
                                <br />
                                <small>
                                  <b>Address: </b>
                                  {userInformation?.address}
                                </small>
                              </td>
                              <td>
                                <Link
                                  to={`/admin/librarian/${librarianData?.id}/show`}
                                  className="btn btn-primary "
                                >
                                  Show
                                </Link>
                              </td>
                              <td>
                                <Link
                                  to={`/admin/librarian/${librarianData?.id}/edit`}
                                  className="btn btn-success"
                                >
                                  Edit
                                </Link>
                              </td>
                              <td
                                type="button"
                                onClick={(e) =>
                                  deleteLibrarianData(e, librarianData?.id)
                                }
                                className="btn btn-danger btn-sm mt-2"
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

export default LibrarianList;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const UserRoleList = () => {
  const [userRoleList, setUserRoleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteUserRole = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete userRole id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/userRoles/${id}`, {
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
    fetch("http://127.0.0.1:8000/api/userRoles?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setUserRoleList(response.data?.userRoles);
      })
      .catch((error) => {
        console.error(error);
        setUserRoleList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = userRoleList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(userRoleList?.length / dataPerPage);
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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>User Role List</h4>
                <Link
                  to="/admin/userRoles/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add User Role
                </Link>
              </div>
              <div className="page-system mt-3" style={{ marginLeft: '670px' }}>
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
                      <th scope="col">User Role</th>
                      <th scope="col">Show</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((userRole) => {
                      return (
                        <tr key={userRole.id}>
                          <td>{userRole.id}</td>
                          <td>{userRole.name}</td>
                          <td>
                            <Link
                              to={`/admin/userRoles/${userRole.id}/show`}
                              className="btn btn-primary btn-sm"
                            >
                              Show
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/admin/userRoles/${userRole.id}/edit`}
                              className="btn btn-success btn-sm"
                            >
                              Edit
                            </Link>
                          </td>
                          <td
                            type="button"
                            onClick={(e) => deleteUserRole(e, userRole.id)}
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

export default UserRoleList;

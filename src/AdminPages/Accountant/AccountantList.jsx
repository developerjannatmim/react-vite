import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/style.css';

import Footer from '../../components/Footer';
import AccountantHeader from '../../components/AccountantHeader';
import AdminSidebar from './../../components/AdminSidebar';

const AccountantList = () => {
  const [accountant, setAccountant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteAccountantData = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete accountant id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/accountant/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/accountant?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAccountant(response.data?.accountant);
      })
      .catch((error) => {
        console.error(error);
        setAccountant(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = accountant?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(accountant?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <AccountantHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container px-4" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Accountant List</h4>
                <Link
                  to="/admin/accountant/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Accountant
                </Link>
              </div>
              <div
                className="page-system mt-4 mb-3"
              >
                <nav>
                  <ul className="pagination" >
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
              <div class="content">
                <div class="container">
                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col"></th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">User Info</th>
                          <th scope="col">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records?.map((accountantData) => {
                          let userInformation;
                          try {
                            userInformation = JSON.parse(
                              accountantData?.user_information
                            );
                          } catch (error) {
                            /**/
                          }
                          return (
                            <tr scope="row" key={accountantData?.id}>
                              <td>{accountantData?.id}</td>
                              <td>
                                <img
                                  src={`http://127.0.0.1:8000/accountant-images/${userInformation?.photo}`}
                                  alt="accountant-image"
                                  width="40"
                                  height="40"
                                  style={{ borderRadius: '50px' }}
                                />
                              </td>
                              <td>
                                <span>{accountantData?.name}</span>
                              </td>
                              <td>
                                <small class="d-block mt-2">
                                  {accountantData?.email}
                                </small>
                              </td>
                              <td>
                                <small>
                                  <b>Phone: </b>+{userInformation?.phone}
                                </small>
                                <br />
                                <small>
                                  <b>Address: </b>
                                  {userInformation?.address}
                                </small>
                              </td>
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
                                        to={`/admin/accountant/${accountantData?.id}/show`}
                                      >
                                        Show
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to={`/admin/accountant/${accountantData?.id}/edit`}
                                      >
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        onClick={(e) =>
                                          deleteAccountantData(
                                            e,
                                            accountantData?.id
                                          )
                                        }
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

export default AccountantList;

import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';
import StudentSidebar from './../../components/StudentSidebar';
import pdf from './../../assets/pdf/Secondary-Physics-Book.pdf';

const BackOfficeList = () => {
  const [backOfficeList, setBackOfficeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteBackOffice = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete backOffice id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/backOffice/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/backOffice?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setBackOfficeList(response.data?.backOffice);
      })
      .catch((error) => {
        console.error(error);
        setBackOfficeList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = backOfficeList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(backOfficeList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onButtonClick = () => {
    window.open(pdf);
  };

  const onDownloadButtonClick = () => {
    const pdfUrl =
      'http://localhost:5173/src/assets/pdf/Secondary-Physics-Book.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Book.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <StudentSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container px-4" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Book List</h4>
                <Link
                  to="/student/backOffice/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add New Book
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
                      <th scope="col">Book Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Copies</th>
                      <th scope="col">PDF</th>
                      <th scope="col">Available Copies</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((backOffice) => {
                      return (
                        <tr key={backOffice?.id}>
                          <td>{backOffice?.id}</td>
                          <td>{backOffice?.name}</td>
                          <td>{backOffice?.author}</td>
                          <td>{backOffice?.copies}</td>
                          <td>
                            <div className="App">
                              <button
                                className="btn btn-info btn-sm"
                                onClick={onButtonClick}
                                style={{ marginLeft: '5px', marginTop: '5px' }}
                              >
                                View
                              </button>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={onDownloadButtonClick}
                                style={{ marginLeft: '5px', marginTop: '5px' }}
                              >
                                Download
                              </button>
                            </div>
                          </td>
                          <td>{backOffice?.availble_copies}</td>
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
                                    to={`/student/backOffice/${backOffice.id}/show`}
                                  >
                                    Show
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

export default BackOfficeList;

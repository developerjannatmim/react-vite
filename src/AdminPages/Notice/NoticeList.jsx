import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';
import pdf from './../../assets/pdf/notice.pdf';

const NoticeList = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteNotice = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete notice id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/notice/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/notice?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setNoticeList(response.data?.notice);
      })
      .catch((error) => {
        console.error(error);
        setNoticeList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = noticeList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(noticeList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onButtonClick = () => {
    window.open(pdf);
  };

  const onDownloadButtonClick = () => {
    const pdfUrl =
      'http://localhost:5173/src/assets/pdf/notice.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'notice.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container px-4" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>All Notices</h4>
                <Link
                  to="/admin/notice/create"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add New Notice
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
                      <th scope="col">SI No.</th>
                      <th scope="col">Publish Date</th>
                      <th scope="col">Subject</th>
                      <th scope="col">PDF</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((notice) => {
                      return (
                        <tr key={notice?.id}>
                          <td>{notice?.id}</td>
                          <td>{notice?.publish_date}</td>
                          <td>{notice?.subject}</td>
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
                                    to={`/admin/notice/${notice.id}/show`}
                                  >
                                    Show
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/admin/notice/${notice.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) => deleteNotice(e, notice.id)}
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

export default NoticeList;

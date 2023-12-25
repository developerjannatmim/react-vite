import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import pdf from './../../assets/pdf/routine.pdf';
import AdminSidebar from './../../components/AdminSidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const RoutineList = () => {
  const [routineList, setRoutineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const deleteRoutine = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = 'deleting';

    if (confirm(`Are you sure you want to delete routine id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/routines/${id}`, {
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
    fetch('http://127.0.0.1:8000/api/routines?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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

  // const MyDoc = () => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Section #1</Text>
  //       </View>
  //     </Page>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View>
  //     </Page>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Section #3</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );

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
          <div className="mt-5 container px-4" style={{ marginLeft: '300px' }}>
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
                      <th scope="col">Week Day</th>
                      <th scope="col">Starting Time</th>
                      <th scope="col">Ending Time</th>
                      <th scope="col">Routine Creator</th>
                      <th scope="col">Class</th>
                      <th scope="col">Section</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Class Room</th>
                      <th scope="col">PDF</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((routineItem) => {
                      return (
                        <tr key={routineItem.id}>
                          <td>{routineItem.id}</td>
                          <td>{routineItem.day}</td>
                          <td>{`${routineItem.starting_hour}:${routineItem.starting_minute} AM`}</td>
                          <td>{`${routineItem.ending_hour}:${routineItem.ending_minute} PM`}</td>
                          <td>{routineItem.creator?.name}</td>
                          <td>{routineItem.class?.name}</td>
                          <td>{routineItem.section?.name}</td>
                          <td>{routineItem.subject?.name}</td>
                          <td>{routineItem.room?.name}</td>
                          <td>
                          <td>
                            <div className="App">
                              <button
                                className="btn btn-info btn-sm"
                                onClick={onButtonClick}
                              >
                                View
                              </button>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={onDownloadButtonClick}
                                style={{ marginTop: '5px' }}
                              >
                                Download
                              </button>
                            </div>
                          </td>
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
                                    to={`/admin/routines/${routineItem.id}/show`}
                                  >
                                    Show
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to={`/admin/routines/${routineItem.id}/edit`}
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) =>
                                      deleteRoutine(e, routineItem.id)
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

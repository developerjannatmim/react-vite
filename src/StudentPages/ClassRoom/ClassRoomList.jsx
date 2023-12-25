import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import StudentSidebar from './../../components/StudentSidebar';
import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';

const ClassRoomList = () => {
  const [classRoomList, setClassRoomList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/classRooms?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = classRoomList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(classRoomList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
                      <th scope="col">Class Room No.</th>
                      <th scope="col">Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((classRoom) => {
                      return (
                        <tr key={classRoom.id}>
                          <td>{classRoom.id}</td>
                          <td>{classRoom.name}</td>
                          <td>
                            <Link
                              to={`/student/classroom/${classRoom.id}/show`}
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

export default ClassRoomList;

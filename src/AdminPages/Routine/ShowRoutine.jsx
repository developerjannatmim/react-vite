import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const ShowRoutine = () => {
  const [routineItem, setRoutineItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/routines/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRoutineItem(response.data?.routine);
      })
      .catch((error) => {
        console.error(error);
        setRoutineItem(null);
      });
  }, [id]);

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
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Routine List</h4>
                <Link
                  to="/admin/routines"
                  className="btn btn-primary btn-sm float-end"
                >
                  Routine List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Day</th>
                      <th>s_h</th>
                      <th>s_m</th>
                      <th>e_h</th>
                      <th>e_m</th>
                      <th>r_c</th>
                      <th>C</th>
                      <th>Section</th>
                      <th>Subject</th>
                      <th>Class Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{routineItem?.id}</td>
                      <td>{routineItem?.day}</td>
                      <td>{routineItem?.starting_hour}</td>
                      <td>{routineItem?.starting_minute}</td>
                      <td>{routineItem?.ending_hour}</td>
                      <td>{routineItem?.ending_minute}</td>
                      <td>{routineItem?.creator?.name}</td>
                      <td>{routineItem?.class?.name}</td>
                      <td>{routineItem?.subject?.name}</td>
                      <td>{routineItem?.section?.name}</td>
                      <td>{routineItem?.room?.name}</td>
                    </tr>
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
};

export default ShowRoutine;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import StudentSidebar from './../../components/StudentSidebar';
import Footer from './../../components/Footer';
import StudentHeader from '../../components/StudentHeader';
import pdf from './../../assets/pdf/routine.pdf';

const ShowRoutine = () => {
  const [routineItem, setRoutineItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/routines/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Routine Details</h4>
                <Link
                  to="/student/routines"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Routine List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.id}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Day</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.day}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Starting Time</label>
                        </div>
                        <div class="col-md-6">
                          <p>{`${routineItem?.starting_hour}:${routineItem?.starting_minute} AM`}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Ending Time</label>
                        </div>
                        <div class="col-md-6">
                          <p>{`${routineItem?.ending_hour}:${routineItem?.ending_minute} PM`}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Routine Creator</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.creator?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.class?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Section</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.section?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Subject</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.subject?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Class Room</label>
                        </div>
                        <div class="col-md-6">
                          <p>{routineItem?.room?.name}</p>
                        </div>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>Routine PDF</label>
                        </div>
                        <div className="App">
                          <button
                            className="btn btn-info btn-sm"
                            onClick={onButtonClick}
                            style={{ marginLeft: '5px' }}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={onDownloadButtonClick}
                            style={{ marginLeft: '5px' }}
                          >
                            Download
                          </button>
                        </div>
                      </li>
                    </ol>
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
};

export default ShowRoutine;

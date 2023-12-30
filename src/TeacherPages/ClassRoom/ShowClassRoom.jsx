import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import TeacherHeader from '../../components/TeacherHeader';
import TeacherSidebar from './../../components/TeacherSidebar';

const ShowClassRoom = () => {
  const [classRoomItem, setClassRoomItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRooms/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassRoomItem(response.data?.classRoom);
      })
      .catch((error) => {
        console.error(error);
        setClassRoomItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <TeacherHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <TeacherSidebar />
        </div>
        <div className="mt-5 d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Class Room Details</h4>
                <Link
                  to="/teacher/classroom"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Class Room List
                </Link>
              </div>
              <div className="col-md-8 p-4">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <div className="col-md-6">
                          <label>Class Room Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>{classRoomItem?.id}</p>
                        </div>
                      </li>
                      <li className="element-list">
                        <div className="col-md-6">
                          <label>Class Room No.</label>
                        </div>
                        <div className="col-md-6">
                          <p>{classRoomItem?.name}</p>
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

export default ShowClassRoom;

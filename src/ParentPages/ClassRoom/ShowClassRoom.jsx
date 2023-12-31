import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import ParentHeader from '../../components/ParentHeader';

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
        <ParentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Class Room Details</h4>
                <Link
                  to="/parent/classroom"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Class Room List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class Room Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{classRoomItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class Room No.</label>
                      </div>
                      <div class="col-md-6">
                        <p>{classRoomItem?.name}</p>
                      </div>
                    </div>
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

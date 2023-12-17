import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

const UpdateClassRoom = () => {
  const navigate = useNavigate();
  const [classRoomInput, setClassRoomInput] = useState([]);
  const [classes, setClasses] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setClassRoomInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const submitClassRoom = (e) => {
    e.preventDefault();
    console.log(classRoomInput);
    const data = classRoomInput;
    fetch(`http://127.0.0.1:8000/api/classRooms/${id}`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/classroom');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRooms/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassRoomInput(response.data?.classRoom);
      })
      .catch((error) => {
        console.error(error);
        setClassRoomInput(null);
      });
  }, [id]);

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
                <h4>Class Room Edit</h4>
                <Link
                  to="/admin/classroom"
                  className="btn btn-primary btn-sm float-end"
                >
                  Class Room List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitClassRoom}>
                <div className="card mt-4">
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active card-body border"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6 form-group mb-3">
                            <label>Class Room Name</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={classRoomInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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

export default UpdateClassRoom;

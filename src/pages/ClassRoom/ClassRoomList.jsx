import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  Swal  from 'sweetalert2'

const ClassRoomList = () => {
    const navigate = useNavigate();
    const [classRoomList, setClassRoomList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const deleteClassRoom = (e, id) => {
      e.preventDefault();
      const Clicked = e.currentTarget;
      Clicked.innerText = 'deleting';
  
      fetch(`http://127.0.0.1:8000/api/classRooms/${id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          Clicked.closest('tr').remove();
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/classRooms?', {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
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

    return (
    <div className="container px-4">
      <div className="card">
        <div className="card-header">
          <h4>Class Room List</h4>
          <Link
            to="/classroom/create"
            className="btn btn-primary btn-sm float-end"
          >
            Add Class Room
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
              <th scope="col">ID</th>
                  <th scope="col">Class Room No.</th>
                  <th scope="col">Show</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {classRoomList?.map((classRoom) => {
                return (
                  <tr key={classRoom.id}>
                    <td>{classRoom.id}</td>
                    <td>{classRoom.name}</td>
                    <td>
                      <Link
                        to={`/classroom/${classRoom.id}/show`}
                        className="btn btn-primary btn-sm"
                      >
                        Show
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/classroom/${classRoom.id}/edit`}
                        className="btn btn-success btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                    <td
                      type="button"
                      onClick={(e) => deleteClassRoom(e, classRoom.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ClassRoomList;
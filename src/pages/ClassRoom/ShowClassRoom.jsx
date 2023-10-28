import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShowClassRoom = () => {
    const [classRoomItem, setClassRoomItem] = useState(null);
    const { id } = useParams();
    console.log(id);
  
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
          setClassRoomItem(response.data?.classRoom);
        })
        .catch((error) => {
          console.error(error);
          setClassRoomItem(null);
        });
    }, [id]);

    return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Class Room List</h4>
          <Link to="/classroom" className="btn btn-primary btn-sm float-end">
            Class Room List
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Class Room No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{classRoomItem?.id}</td>
                <td>{classRoomItem?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ShowClassRoom;
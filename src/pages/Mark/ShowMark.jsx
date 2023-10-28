import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShowMark = () => {
  const [markItem, setMarkItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMarkItem(response.data?.mark);
      })
      .catch((error) => {
        console.error(error);
        setMarkItem(null);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Mark List</h4>
          <Link to="/marks" className="btn btn-primary btn-sm float-end">
          Mark List
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Mark</th>
                <th>Grade Point</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Section</th>
                <th>Student</th>
                <th>Exam</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{markItem?.id}</td>
                <td>{markItem?.marks}</td>
                <td>{markItem?.grade_point}</td>
                <td>{markItem?.class?.name}</td>
                <td>{markItem?.subject?.name}</td>
                <td>{markItem?.section?.name}</td>
                <td>{markItem?.user?.name}</td>
                <td>{markItem?.exam?.name}</td>
                <td>{markItem?.comment}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowMark;

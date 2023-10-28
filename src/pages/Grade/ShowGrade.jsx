import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShowGrade = () => {
  const [gradeItem, setGradeItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grades/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGradeItem(response.data?.grade);
      })
      .catch((error) => {
        console.error(error);
        setGradeItem(null);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Grade List</h4>
          <Link to="/grades" className="btn btn-primary btn-sm float-end">
          Grade List
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Grade</th>
                <th>Grade Point</th>
                <th>Mark From</th>
                <th>Mark Upto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{gradeItem?.id}</td>
                <td>{gradeItem?.name}</td>
                <td>{gradeItem?.grade_point}</td>
                <td>{gradeItem?.mark_from}</td>
                <td>{gradeItem?.mark_upto}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowGrade;
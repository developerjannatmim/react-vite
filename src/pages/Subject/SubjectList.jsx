import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SubjectList = () => {
    const [subjectList, setSubjectList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/subjects?', {
            headers: {
              Accept: 'application/json',
            },
            method: 'GET',
          })
            .then((response) => response.json())
            .then((response) => {
              console.info(response);
              setSubjectList(response.data?.subjects);
            })
            .catch((error) => {
              console.error(error);
              setSubjectList(null);
              setLoading(false);
            });
    }, [loading]);

  return (
    <div className="container px-4">
      <div className="card">
        <div className="card-header">
          <h4>Subject List</h4>
          <Link
            to="/subject/create"
            className="btn btn-primary btn-sm float-end"
          >
            Add Subject
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Class Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
             
              {
                    subjectList?.map((subject) => {
                        return(
                            <tr key={subject.id}>
                            <td>{subject.id}</td>
                            <td>{subject.name}</td>
                            <td>{subject.class?.name}</td>
                            <td><Link to={`/edit-subject/${subject.id}`} className='btn btn-success btn-sm'>Edit</Link></td>
                            <td type='button' className='btn btn-danger btn-sm'>Delete</td>
                            </tr>
                        )
                    })
                }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
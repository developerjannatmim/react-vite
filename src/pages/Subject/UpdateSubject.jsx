import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import  Swal  from 'sweetalert2'

const UpdateSubject = () => {
  const navigate = useNavigate();
  const [subjectInput, setSubjectInput] = useState([]);
  const [classes, setClasses] = useState();
  const { id } = useParams();


  const handleChange = (e) => {
    setSubjectInput({ ...subjectInput, [e.target.name]: e.target.value });
  };

  const submitSubject = (e) => {
    e.preventDefault();
    console.log(subjectInput);
    const data = subjectInput;
    fetch(
      `http://127.0.0.1:8000/api/subjects/${id}`,
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/subject/view');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SUBJECT_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/subjects/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubjectInput(response.data?.subject);
      })
      .catch((error) => {
        console.error(error);
        setSubjectInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ classes });
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClasses(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClasses(null);
      });
  }, []);

  return (
    <div className="container px-4">
      <div className="card">
        <div className="card-header">
          <h4>Subject List</h4>
          <Link to="/subject/view" className="btn btn-primary btn-sm float-end">
            Subject List
          </Link>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitSubject} id="SUBJECT_FORM">
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
                      <label>Subject Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={subjectInput?.name || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Class Name</label>
                      <select
                        name="class_id"
                        className="form-control"
                        onChange={handleChange}
                        value={subjectInput?.class_id || ''}
                      >
                        <option>select class</option>
                        {classes?.map((classItem) => {
                          return (
                            <option key={classItem.id} value={classItem.id}>
                              {classItem.name}
                            </option>
                          );
                        })}
                      </select>
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
  );
};

export default UpdateSubject;

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateSubject = () => {
  const [subjectInput, setSubjectInput] = useState([]);
  const [classes, setClasses] = useState();

  const handleChange = (e) => {
    e.persist();
    setSubjectInput({ ...subjectInput, [e.target.name]: e.target.value });
  };

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

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/api/subjects`, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.info(response);
  //       setSubjectInput(response.data?.subject);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setSubjectInput(null);
  //     });
  // }, []);

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
        <form>
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
                        value={subjectInput.name}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Class Name</label>
                      <select
                        name="class_id"
                        className="form-control"
                        onChange={handleChange}
                        value={subjectInput.class_id}
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

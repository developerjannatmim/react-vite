import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AddSubject = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  //const [picture, setPicture] = useState();
  const [subjectInput, setSubjectInput] = useState({
    name: '',
    class_id: '',
  });

  const handleChange = (e) => {
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

  const submitSubject = (e) => {
    e.preventDefault();
    //console.log(subjectInput);
    const data = {
      name: subjectInput.name,
      class_id: subjectInput.class_id,
    };
    fetch(
      'http://127.0.0.1:8000/api/subjects',
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        alert('data store successful.');
        navigate('/subject/view');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SUBJECT_FORM').reset();
        alert('somthig is wrong!');
      });
  };

  return (
    <div className="container-fluid px-3">
      <form onSubmit={submitSubject} id="SUBJECT_FORM">
        <div className="card mt-4">
          <div className="card-header">
            <h4>
              Subject List
              <Link
                to="/subject/view"
                className="btn btn-primary btn-sm float-end"
              >
                View Subject
              </Link>
            </h4>
          </div>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubject;

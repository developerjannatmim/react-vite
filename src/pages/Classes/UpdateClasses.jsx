import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';

const UpdateClasses = () => {
  const navigate = useNavigate();
  const [classInput, setClassInput] = useState([]);
  const [sections, setSections] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    setClassInput({ ...classInput, [e.target.name]: e.target.value });
  };

  const submitClass = (e) => {
    e.preventDefault();
    console.log(classInput);
    const data = classInput;
    fetch(
      `http://127.0.0.1:8000/api/classes/${id}`,
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
        navigate('/dashboard/classes');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassInput(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClassInput(null);
      });
  }, [id]);

  useEffect(() => {
    console.log({ sections });
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSections(response.data?.sections);
      })
      .catch((error) => {
        console.error(error);
        setSections(null);
      });
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Class List</h4>
                <Link
                  to="/dashboard/classes"
                  className="btn btn-primary btn-sm float-end"
                >
                  Class List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitClass}>
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
                            <label>Class Name</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={classInput?.name || ''}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 form-group mb-3">
                            <label>Section Name</label>
                            <select
                              name="section_id"
                              className="form-control"
                              onChange={handleChange}
                              value={classInput?.section_id || ''}
                            >
                              <option>select class</option>
                              {sections?.map((sectionItem) => {
                                return (
                                  <option
                                    key={sectionItem.id}
                                    value={sectionItem.id}
                                  >
                                    {sectionItem.name}
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UpdateClasses;

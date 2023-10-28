import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import  Swal  from 'sweetalert2'

const UpdateSection = () => {
  const navigate = useNavigate();
  const [sectionInput, setSectionInput] = useState([]);
  const { id } = useParams();


  const handleChange = (e) => {
    setSectionInput({ ...sectionInput, [e.target.name]: e.target.value });
  };

  const submitSection = (e) => {
    e.preventDefault();
    const data = sectionInput;
    console.log(sectionInput);
    fetch(
      `http://127.0.0.1:8000/api/sections/${id}`,
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
        navigate('/sections');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('SECTION_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/sections/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSectionInput(response.data?.section);
      })
      .catch((error) => {
        console.error(error);
        setSectionInput(null);
      });
  }, [id]);

  return (
    <div className="container px-4">
      <div className="card">
        <div className="card-header">
          <h4>Section List</h4>
          <Link to="/sections" className="btn btn-primary btn-sm float-end">
          Section List
          </Link>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitSection} id="SECTION_FORM">
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
                      <label>Section Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={sectionInput?.name || ''}
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
  );
};

export default UpdateSection;

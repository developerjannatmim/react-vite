import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { swal } from "sweetalert";

const UpdateAdmin = () => {
  const navigate = useNavigate();
  const [adminInput, setAdminInput] = useState([]);
  const [classes, setClasses] = useState();
  const { id } = useParams();
  //console.log(id);

  const handleChange = (e) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const submitAdmin = (e) => {
    e.preventDefault();
    console.log(adminInput);
    const data = adminInput;
    fetch(
      `http://127.0.0.1:8000/api/admin/${id}`,
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
        alert('data update successful.');
        navigate('/subject/view');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('ADMIN_FORM').reset();
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admin/${id}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdminInput(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdminInput(null);
      });
  }, [id]);

  return (
    <div className="container px-4">
      <div className="card">
        <div className="card-header">
          <h4>Subject List</h4>
          <Link to="/admin" className="btn btn-primary btn-sm float-end">
            Admin List
          </Link>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitAdmin} id="ADMIN_FORM">
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
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.name || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Email</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.email || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Address</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.address || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.name || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Photo</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.name || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Gender</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.name || ''}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>Blood Group</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={adminInput?.name || ''}
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

export default UpdateAdmin;

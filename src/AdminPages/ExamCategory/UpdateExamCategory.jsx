import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const UpdateExamCategory = () => {
  const navigate = useNavigate();
  const [exam_categoryInput, setExamCategoryInput] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setExamCategoryInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const submitExamCategory = (e) => {
    e.preventDefault();
    const data = exam_categoryInput;
    console.log(exam_categoryInput);
    fetch(`http://127.0.0.1:8000/api/exam_category/${id}`, {
      body: JSON.stringify({
        ...data
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        Swal.fire('Success', response?.message, 'success');
        navigate('/admin/exam-category');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('exam_category_FORM').reset();
        Swal.fire('Warning', response?.message, 'warning');
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exam_category/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamCategoryInput(response.data?.exam_category);
      })
      .catch((error) => {
        console.error(error);
        setExamCategoryInput(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Exam Category Edit</h4>
                <Link
                  to="/admin/exam-category"
                  className="btn btn-primary btn-sm float-end"
                >
                  Exam Category List
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={submitExamCategory} id="exam_category_FORM">
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
                            <label>Exam Category</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={exam_categoryInput?.name || ''}
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UpdateExamCategory;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';

import '../../assets/css/new.css';
import AdminSidebar from './../../components/AdminSidebar';

const ShowGrade = () => {
  const [gradeItem, setGradeItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grades/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
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
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Grade Details</h4>
                <Link
                  to="/admin/grades"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Grade List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Grade Id</strong>
                        <p>{gradeItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Grade Letter</strong>
                        <p>{gradeItem?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Grade Point</strong>
                        <p>{gradeItem?.grade_point}</p>
                      </li>
                      <li className="element-list">
                        <strong>Mark From</strong>
                        <p>{gradeItem?.mark_from}</p>
                      </li>
                      <li className="element-list">
                        <strong>Mark Upto</strong>
                        <p>{gradeItem?.mark_upto}</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
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

export default ShowGrade;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const ShowExamCategory = () => {
  const [exam_categoryItem, setExamCategoryItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exam_category/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamCategoryItem(response.data?.exam_category);
      })
      .catch((error) => {
        console.error(error);
        setExamCategoryItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="mt-5 container">
            <div className="card">
              <div className="card-header">
                <h4>Exam Category Details</h4>
                <Link
                  to="/admin/exam-category"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Exam Category List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent" >
                  <div >
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Id</strong>
                        <p>{exam_categoryItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Exam Category</strong>
                        <p>{exam_categoryItem?.name}</p>
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

export default ShowExamCategory;

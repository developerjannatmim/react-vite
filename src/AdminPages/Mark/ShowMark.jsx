import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminSidebar from "./../../components/AdminSidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const ShowMark = () => {
  const [markItem, setMarkItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMarkItem(response.data?.mark);
      })
      .catch((error) => {
        console.error(error);
        setMarkItem(null);
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
        <div className="col overflow-hidden">
          <div className="mt-5 container">
            <div className="card">
              <div className="card-header">
                <h4>Mark Details</h4>
                <Link
                  to="/admin/marks"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Mark List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Mark Id</strong>
                        <p>{markItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Mark</strong>
                        <p>{markItem?.marks}</p>
                      </li>
                      <li className="element-list">
                        <strong>Grade Point</strong>
                        <p>{markItem?.grade_point}</p>
                      </li>
                      <li className="element-list">
                        <strong>Class</strong>
                        <p>{markItem?.class?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Subject</strong>
                        <p>{markItem?.subject?.name}</p>
                      </li>
                      <li className="element-list">
                        <label>Section</label>
                        <p>{markItem?.section?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Student</strong>
                        <p>{markItem?.user?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Exam</strong>
                        <p>{markItem?.exam_category?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Comment</strong>
                        <p>{markItem?.comment}</p>
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

export default ShowMark;

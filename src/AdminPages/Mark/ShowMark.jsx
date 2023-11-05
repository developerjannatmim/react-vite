import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
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
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container">
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
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Mark Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Mark</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.marks}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Grade Point</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.grade_point}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.class?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Subject</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.subject?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Section</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.section?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Student</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.user?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Exam</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.exam?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Comment</label>
                      </div>
                      <div class="col-md-6">
                        <p>{markItem?.comment}</p>
                      </div>
                    </div>
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

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import ParentHeader from "../../components/ParentHeader";

const ShowExam = () => {
  const [examItem, setExamItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exams/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamItem(response.data?.exam);
      })
      .catch((error) => {
        console.error(error);
        setExamItem(null);
      });
  }, [id]);

  return (
    <>
      <div>
        <ParentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Exam Details</h4>
                <Link
                  to="/parent/exams"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Exam List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent" >
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Exam Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Exam Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Exam Type</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.exam_type}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Starting Time</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.starting_time}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Ending Time</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.ending_time}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Marks</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.total_marks}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Status</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.status}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.class?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Section No.</label>
                      </div>
                      <div class="col-md-6">
                        <p>{examItem?.section?.name}</p>
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

export default ShowExam;

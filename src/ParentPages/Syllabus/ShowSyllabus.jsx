import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import ParentHeader from "../../components/ParentHeader";

const ShowSyllabus = () => {
  const [syllabusItem, setSyllabusItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/syllabuses/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabusItem(response.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
        setSyllabusItem(null);
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
                <h4>Syllabus Details</h4>
                <Link
                  to="/parent/syllabuses"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Syllabus List
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
                        <label>Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Syllabus</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.title}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.class?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Subject</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.subject?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Section</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.section?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>File</label>
                      </div>
                      <div class="col-md-6">
                        <p>{syllabusItem?.file}</p>
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

export default ShowSyllabus;

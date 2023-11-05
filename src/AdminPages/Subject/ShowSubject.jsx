import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const ShowSubject = () => {
  const [subjectItem, setSubjectItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/subjects/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubjectItem(response.data?.subject);
      })
      .catch((error) => {
        console.error(error);
        setSubjectItem(null);
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
                <h4>Subject Details</h4>
                <Link
                  to="/admin/subject/view"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Subject List
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
                        <p>{subjectItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class</label>
                      </div>
                      <div class="col-md-6">
                        <p>{subjectItem?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Subject</label>
                      </div>
                      <div class="col-md-6">
                        <p>{subjectItem?.class?.name}</p>
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

export default ShowSubject;

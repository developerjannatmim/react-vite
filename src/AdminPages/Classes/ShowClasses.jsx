import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const ShowClasses = () => {
  const [classItem, setClassItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClassItem(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClassItem(null);
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
                <h4>Class Details</h4>
                <Link
                  to="/admin/classes"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Class List
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
                        <label>Class Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{classItem?.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Class Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{classItem?.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Section Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{classItem?.section?.name}</p>
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

export default ShowClasses;

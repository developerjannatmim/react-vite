import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

import "../../assets/css/new.css";

const ShowBackOffice = () => {
  const [backOfficeItem, setBackOfficeItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/backOffice/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setBackOfficeItem(response.data?.backOffice);
      })
      .catch((error) => {
        console.error(error);
        setBackOfficeItem(null);
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
                <h4>Back Office Details</h4>
                <Link
                  to="/admin/backOffice"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Back Office List
                </Link>
              </div>
              <div className="col-md-8 p-4">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Back Office Id</strong>
                        <p>{backOfficeItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Book Name</strong>
                        <p>{backOfficeItem?.name}</p>
                      </li>
                      <li className="element-list">
                        <strong>Author</strong>
                        <p>{backOfficeItem?.author}</p>
                      </li>
                      <li className="element-list">
                        <strong>Copies</strong>
                        <p>{backOfficeItem?.copies}</p>
                      </li>
                      <li className="element-list">
                        <strong>Available Copies</strong>
                        <p>{backOfficeItem?.availble_copies}</p>
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

export default ShowBackOffice;

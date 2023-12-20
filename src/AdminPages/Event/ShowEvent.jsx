import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const ShowEvent = () => {
  const [eventItem, setEventItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/event/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setEventItem(response.data?.event);
      })
      .catch((error) => {
        console.error(error);
        setEventItem(null);
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
                <h4>Event Details</h4>
                <Link
                  to="/admin/event"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: "-30px" }}
                >
                  Event List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Event Id</strong>
                        <p>{eventItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Event Title</strong>
                        <p>{eventItem?.title}</p>
                      </li>
                      <li className="element-list">
                        <strong>Date</strong>
                        <p>{eventItem?.date}</p>
                      </li>
                      <li className="element-list">
                        <strong>Status</strong>
                        <p>{eventItem?.status}</p>
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

export default ShowEvent;

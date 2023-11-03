import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import ParentHeader from "../../components/ParentHeader";

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
                <h4>Subject List</h4>
                <Link
                  to="/parent/subject/view"
                  className="btn btn-primary btn-sm float-end"
                >
                  Subject List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Subject Name</th>
                      <th>Class Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{subjectItem?.id}</td>
                      <td>{subjectItem?.name}</td>
                      <td>{subjectItem?.class?.name}</td>
                    </tr>
                  </tbody>
                </table>
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

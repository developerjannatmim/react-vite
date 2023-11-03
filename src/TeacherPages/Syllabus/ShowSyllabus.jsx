import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import TeacherHeader from "../../components/TeacherHeader";

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
        <TeacherHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Syllabus List</h4>
                <Link
                  to="/teacher/syllabuses"
                  className="btn btn-primary btn-sm float-end"
                >
                  Syllabus List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Syllabus</th>
                      <th>Class Name</th>
                      <th>Subject Name</th>
                      <th>Section Name</th>
                      <th>File Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{syllabusItem?.id}</td>
                      <td>{syllabusItem?.title}</td>
                      <td>{syllabusItem?.class?.name}</td>
                      <td>{syllabusItem?.subject?.name}</td>
                      <td>{syllabusItem?.section?.name}</td>
                      <td>{syllabusItem?.file}</td>
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

export default ShowSyllabus;

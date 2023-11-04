import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import TeacherHeader from "../../components/TeacherHeader";

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
                <h4>Exam List</h4>
                <Link
                  to="/teacher/exams"
                  className="btn btn-primary btn-sm float-end"
                >
                  Exam List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Exam Name</th>
                      <th>Exam Type</th>
                      <th>Starting Time</th>
                      <th>Ending Time</th>
                      <th>Total Marks</th>
                      <th>Status</th>
                      <th>Class Name</th>
                      <th>Section No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{examItem?.id}</td>
                      <td>{examItem?.name}</td>
                      <td>{examItem?.exam_type}</td>
                      <td>{examItem?.starting_time}</td>
                      <td>{examItem?.ending_time}</td>
                      <td>{examItem?.total_marks}</td>
                      <td>{examItem?.status}</td>
                      <td>{examItem?.class?.name}</td>
                      <td>{examItem?.section?.name}</td>
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

export default ShowExam;

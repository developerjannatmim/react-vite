import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import StudentHeader from "../../components/StudentHeader";

const ShowTeacher = () => {
  const [teacherItem, setTeacherItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachers/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTeacherItem(response.data?.teacher);
      })
      .catch((error) => {
        console.error(error);
        setTeacherItem(null);
      });
  }, [id]);

  let userInformation;
  try {
    userInformation = JSON.parse(teacherItem?.user_information);
  } catch (error) {
    /**/
  }

  return (
    <>
      <div>
        <StudentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="col overflow-hidden">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Teacher Information</h4>
                <Link
                  to="/student/teachers"
                  className="btn btn-primary btn-sm float-end"
                >
                  Teacher List
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Photo</th>
                      <th>Gender</th>
                      <th>Birthday</th>
                      <th>Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{teacherItem?.id}</td>
                      <td>{teacherItem?.name}</td>
                      <td>{teacherItem?.email}</td>
                      <td>{userInformation?.address}</td>
                      <td>{userInformation?.phone}</td>
                      <td>{userInformation?.photo}</td>
                      <td>{userInformation?.gender}</td>
                      <td>{userInformation?.birthday}</td>
                      <td>{userInformation?.blood_group}</td>
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

export default ShowTeacher;

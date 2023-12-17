import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Sidebar from "./../../components/Sidebar";
import Footer from "./../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

const SchoolList = () => {
  const navigate = useNavigate();
  const [schoolList, setSchoolList] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteSchool = (e, id) => {
    e.preventDefault();
    const Clicked = e.currentTarget;
    Clicked.innerText = "deleting";

    if (confirm(`Are you sure you want to delete school id ${id}?`)) {
      fetch(`http://127.0.0.1:8000/api/schools/${id}`, {
        headers: {
          Accept: "application/json",
        },
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          Swal.fire("Success", response?.message, "success");
          Clicked.closest("tr").remove();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/schools?", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSchoolList(response.data?.school);
      })
      .catch((error) => {
        console.error(error);
        setSchoolList(null);
        setLoading(false);
      });
  }, [loading]);

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
          <div className="mt-5 container px-4">
            <div className="card">
              <div className="card-header">
                <h4>School Information</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">School Name</th>
                      <th scope="col">School Email</th>
                      <th scope="col">School Phone</th>
                      <th scope="col">School Address</th>
                      <th scope="col">School Information</th>
                      <th scope="col">Status</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schoolList?.map((schoolItem) => {
                      return (
                        <tr key={schoolItem?.id}>
                          <td>{schoolItem?.id}</td>
                          <td>{schoolItem?.title}</td>
                          <td>{schoolItem?.email}</td>
                          <td>{schoolItem?.phone}</td>
                          <td>{schoolItem?.address}</td>
                          <td>{schoolItem?.school_info}</td>
                          <td>{schoolItem?.status}</td>
                          <td>
                            <Link
                              to={`/admin/settings/school-info/${schoolItem?.id}/edit`}
                              className="btn btn-success btn-sm"
                            >
                              Edit
                            </Link>
                          </td>
                          <td
                            type="button"
                            onClick={(e) => deleteSchool(e, schoolItem?.id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </td>
                        </tr>
                      );
                    })}
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

export default SchoolList;

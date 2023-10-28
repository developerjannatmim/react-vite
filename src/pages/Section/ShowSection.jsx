import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ShowSection = () => {
  const [sectionItem, setSectionItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/sections/${id}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSectionItem(response.data?.section);
      })
      .catch((error) => {
        console.error(error);
        setSectionItem(null);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Section List</h4>
          <Link to="/sections" className="btn btn-primary btn-sm float-end">
            Section List
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{sectionItem?.id}</td>
                <td>{sectionItem?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowSection;
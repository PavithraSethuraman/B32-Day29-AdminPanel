import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserView() {
  const navigate = useNavigate();
  let params = useParams();
  const [user, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://6242aa41b6734894c1540621.mockapi.io/employee/${params.id}`
      );
      setUserData(user.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>User View</div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing="0"
      >
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Office</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.position}</td>
            <td>{user.office}</td>
            <td>{user.startdate}</td>
            <td>{user.salary}</td>
          </tr>
        </tbody>
      </table>
      <div className="col-lg-6 mt-3">
        <input
          type={"submit"}
          value="Close"
          onClick={() => navigate("/users", { replace: true })}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default UserView;

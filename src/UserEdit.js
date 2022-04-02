import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `https://6242aa41b6734894c1540621.mockapi.io/employee/${params.id}`
        );
        formik.setValues(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startdate: "",
      salary: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name should not be blank";
      }
      if (!values.position) {
        errors.position = "Position should not be blank";
      }
      if (!values.office) {
        errors.office = "Office should not be blank";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age should not be blank and should be greater than 18";
      }
      if (!values.startdate) {
        errors.startdate = "Date should not be blank";
      }
      if (!values.salary) {
        errors.salary = "Salary should not be blank";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://6242aa41b6734894c1540621.mockapi.io/employee/${params.id}`,
        values
      );
      navigate("/users", { replace: true });
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Edit User Details</h1>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={"text"}
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              style={{ border: formik.errors.name ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              type={"text"}
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              className="form-control"
              style={{ border: formik.errors.position ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.position}</span>
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              type={"text"}
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              className="form-control"
              style={{ border: formik.errors.office ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.office}</span>
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type={"number"}
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
              style={{ border: formik.errors.age ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6">
            <label>Start Date</label>
            <input
              type={"date"}
              name="startdate"
              onChange={formik.handleChange}
              value={formik.values.startdate}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              type={"number"}
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              className="form-control"
              style={{ border: formik.errors.salary ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.salary}</span>
          </div>
          <div className="col-lg-6 mt-3">
            <input type={"submit"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;

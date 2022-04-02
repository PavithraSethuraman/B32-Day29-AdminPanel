import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function CreateProfile() {
  //redirect fron currect page
  let navigate = useNavigate();
  const userContext = useContext(UserContext);

  // validation for form using formik
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: 0,
      dateofbirth: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = "First Name should not be blank";
      }
      if (!values.lastname) {
        errors.lastname = "Last Name should not be blank";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age should not be blank and should be greater than 18";
      }
      if (!values.dateofbirth) {
        errors.dateofbirth = "Date of Birth should not be blank";
      }
      if (!values.email) {
        errors.email = "Email ID should not be blank";
      }
      if (!values.password) {
        errors.password = "Password should not be blank";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://6242aa41b6734894c1540621.mockapi.io/employee",
          values
        );
        userContext.setUsers([...userContext.users, values]);
        navigate("/profile", { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    // form for create profile

    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Create Profile Details</h1>
        <div className="row">
          <div className="col-lg-6">
            <label>Fist Name</label>
            <input
              type={"text"}
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              className="form-control"
              style={{ border: formik.errors.firstname ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.firstname}</span>
          </div>
          <div className="col-lg-6">
            <label>Last Name</label>
            <input
              type={"text"}
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              className="form-control"
              style={{ border: formik.errors.lastname ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.lastname}</span>
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
            <label>Date of Birth</label>
            <input
              type={"date"}
              name="dateofbirth"
              onChange={formik.handleChange}
              value={formik.values.dateofbirth}
              className="form-control"
              style={{
                border: formik.errors.dateofbirth ? "1px solid red" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.dateofbirth}</span>
          </div>
          <div className="col-lg-6">
            <label>Email ID</label>
            <input
              type={"email"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
              style={{ border: formik.errors.email ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          </div>
          <div className="col-lg-6">
            <label>Password</label>
            <input
              type={"password"}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
              style={{ border: formik.errors.password ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          </div>
          <div className="col-lg-6 mt-3">
            <input
              disabled={Object.keys(formik.errors).length !== 0}
              type={"submit"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProfile;

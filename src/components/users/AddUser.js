import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container border shadow w-50 p-5 ">
      <h1 className="text-center">Add user</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your User Name"
            name="username"
            value={user.username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput3"
            placeholder="Enter Your Email Address"
            name="email"
            value={user.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput4"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={user.phonenumber}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput5"
            placeholder="Enter Your Website Name"
            name="website"
            value={user.website}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="w-40 d-flex justify-content-center">
          <button className="btn btn-primary text-center align-center w-100  ">
            Add user
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

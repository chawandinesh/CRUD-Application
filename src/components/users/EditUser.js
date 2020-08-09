import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`, user);
    setUser(result.data);
  };

  return (
    <div className="container border shadow w-50 p-5 ">
      <h1 className="text-center">Edit user</h1>
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
            value={user.phone}
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
          <button className="btn btn-warning text-center align-center w-100  ">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;

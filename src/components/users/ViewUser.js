import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    userName: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await axios.get(`http://localhost:3003/users/${id}`);
    setUserDetails(response.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary " to="/">
        back to Home
      </Link>
      <h1 className="display-4"> User id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {userDetails.name}</li>
        <li className="list-group-item">User Name: {userDetails.name}</li>
        <li className="list-group-item">Email: {userDetails.email}</li>
        <li className="list-group-item">Phone: {userDetails.phone}</li>
        <li className="list-group-item">Website: {userDetails.website}</li>
      </ul>
    </div>
  );
}

export default ViewUser;

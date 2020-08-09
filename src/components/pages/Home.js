import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await axios
      .get("http://localhost:3003/users")
      .then((res) => {
        setUsers(res.data.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteUser = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3003/users/${id}`).then((res) => {
      console.log(res);
    });
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/users/${user.id}`}
                    >
                      {" "}
                      View{" "}
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/users/edit/${user.id}`}
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={(e) => deleteUser(user.id)}
                    >
                      {" "}
                      Delete{" "}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

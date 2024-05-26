import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
      <p>Here</p>
    </div>
  );
}

export default Users;

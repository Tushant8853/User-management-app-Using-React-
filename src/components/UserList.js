import React from 'react';
import '../style/UserList.css';

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button className="submit-btn-delete" onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;

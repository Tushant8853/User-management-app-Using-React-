import React, { useState } from 'react';
import '../style/EditUserForm.css';

const EditUserForm = ({ users, updateUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser && selectedUser.name && selectedUser.email && selectedUser.phone) {
      updateUser(selectedUser);
      setSelectedUser(null);
    }
  };

  return (
    <div className="edit-user-form">
      {selectedUser && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <h2>Edit User</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={selectedUser.name}
            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={selectedUser.email}
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={selectedUser.phone}
            onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
          />

          <button className="submit-btn-save" type="submit">Save</button>
        </form>
      )}

      <h2>Edit List</h2>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button className="submit-btn" onClick={() => handleEdit(user)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default EditUserForm;

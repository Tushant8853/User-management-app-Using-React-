import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';
import './style/App.css';

const App = () => {
  // State variable for storing the list of users
  const [users, setUsers] = useState([]);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to update a user
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className='page-center'>
      <div className='container'>
        <h1 className='h1-div'>User Management Application</h1>
        <div className='row-div'>
          <div className='addUser-div'>
            <AddUserForm addUser={addUser} />
          </div>
          <div className='editUser-div'>
            <div className='centered-div'>
              <div className='deleteUser-div'>
                <UserList users={users} deleteUser={deleteUser} />
              </div>
              <div className='updateUser-div'>
                <EditUserForm users={users} updateUser={updateUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;

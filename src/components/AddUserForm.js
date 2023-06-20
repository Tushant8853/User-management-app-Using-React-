import React, { useState } from 'react';
import '../style/AddUserForm.js.css';


const AddUserForm = ({ addUser }) => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (name && email && phone) {
      const newUser = {
        id: new Date().getTime().toString(), // Generate a unique ID
        name,
        email,
        phone,
      };

      // Call the addUser function passed from the parent component
      addUser(newUser);

      // Reset form inputs
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input-name"
        />

        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input-email"
        />

        <label htmlFor="phone">Phone:</label>
        <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input-phone"
        />

        <button type="submit" className="submit-btn">Add User</button>
    </form>
  );
};

export default AddUserForm;

import React from 'react';

function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Dashboard;

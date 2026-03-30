import React from "react";

export default function Show({ finalUserData }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Users</h2>
      <div className="row">
        {finalUserData.map((user, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card text-center h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Age: {user.age}</p>
                <p className="card-text">Job: {user.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Email:</label>
          <input
            placeholder="Enter Your Email"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Password:</label>
          <input
            placeholder="Enter Your Password"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

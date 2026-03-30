import React from 'react'

export default function SignUp() {
  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            id="firstName"
            placeholder="Enter Your First Name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            id="lastName"
            placeholder="Enter Your Last Name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            placeholder="Enter Your Email"
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            id="password"
            placeholder="Enter Your Password"
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input
            id="confirmPassword"
            placeholder="Confirm Your Password"
            type="password"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

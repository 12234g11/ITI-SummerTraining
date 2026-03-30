import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form({ setDataFromFormToRoot }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    job: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    let updated = { ...formData };
    updated[name] = value;
    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataFromFormToRoot(formData);
    setFormData({ name: "", age: "", job: "" });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">User Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            value={formData.name}
            name="name"
            placeholder="Enter Your Name"
            type="text"
            onChange={handleChangeInput}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            id="age"
            value={formData.age}
            name="age"
            placeholder="Enter Your Age"
            type="text"
            onChange={handleChangeInput}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="job" className="form-label">Job:</label>
          <input
            id="job"
            value={formData.job}
            name="job"
            placeholder="Enter Your Job"
            type="text"
            onChange={handleChangeInput}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

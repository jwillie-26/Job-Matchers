import React, { useState } from "react";
import "./AddJob.css";

export default function AddJob({user}) {
  const [company_name, setCompanyName] = useState("");
  const [company_logo, setCompanyLogo] = useState("");
  const [job_type, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [job_mode, setJobMode] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState([]);

  let id = 1;

  {user ? id=user.id: id = 1}
 
  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it

    {user ? id = user.id : id = 1}


    const formData = {
      company_name,
      company_logo,
      job_type,
      salary,
      description,
      job_mode,
      location,
      user_id : id,
    };

    const response = await fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      // console.log(data);
      window.location = '/jobs-page';
    } else {
      setErrors(data.errors);
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">POST JOB</h3>
          <div className="form-group mt-3">
            <label>Company Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Google inc."
              value={company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Company logo</label>
            <input
              type="url"
              className="form-control mt-1"
              placeholder="Company Logo"
              value={company_logo}
              onChange={(e) => setCompanyLogo(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg Nairobi Or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Type</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg Manager"
              value={job_type}
              onChange={(e) => setJobType(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Salary</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="20000"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Mode</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="fulltime OR parttime"
              value={job_mode}
              onChange={(e) => setJobMode(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              rows="4"
              cols="30"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

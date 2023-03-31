import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

export default function ({}) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((data) => {
        setJobs(data);

        // console.log(data);
      });
  }, []);

  const job = jobs.map((job) => {
    return (
      <Card
        key={job.id}
        id={job.id}
        jobname={job.job_type}
        logo={job.company_logo}
        company={job.company}
        location={job.location}
        salary={job.salary}
        url={job.url}
      />
    );
  });

  return (
    <div className="text-dark">
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h4 className="text-black">Available Jobs :</h4>
        </div>
        <div className="row mt-4 g-1">{job}</div>
      </div>
    </div>
  );
}

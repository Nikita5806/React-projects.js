import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.length === 0 ? (
        <p>No job applications added yet!</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="border p-4 rounded">
              <h3 className="font-bold">{job.company}</h3>
              <p>{job.role}</p>
              <p>Status: {job.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;

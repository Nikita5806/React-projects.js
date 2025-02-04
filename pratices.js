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
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

import React, { useState } from 'react';
import './App.css';
import { AddJobForm, JobList } from './components';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center text-2xl">
        Job Application Tracker
      </header>
      <main className="p-4">
        <AddJobForm onAddJob={addJob} />
        <JobList jobs={jobs} />
      </main>
    </div>
  );
}

export default App;


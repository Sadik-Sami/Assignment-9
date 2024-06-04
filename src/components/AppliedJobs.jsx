import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from './AppliedJobsCard';

const AppliedJobs = () => {
  const jobData = useLoaderData();
  const [jobs, setJobs] = useState(jobData);
  const [selectedFilter, setSelectedFilter] = useState('All'); // 'All', 'Remote', 'Part-time', 'Full-time', 'On-site'

  // Filter function
  const filterJobs = (filter) => {
    if (filter === 'All') {
      setJobs(jobData);
    } else {
      const filteredJobs = jobData.filter((job) =>
        job.job_type.includes(filter)
      );
      setJobs(filteredJobs);
    }
    setSelectedFilter(filter);
  };
  return (
    <div>
      <div className='bg-header-texture bg-auto h-56 bg-no-repeat flex justify-center items-center'>
        <h1 className='text-4xl font-manrope font-bold'>Applied Jobs</h1>
      </div>
      <div>
        <div className='filter-dropdown flex justify-end'>
          <select
            className='p-4 rounded-md btn-outlined !text-black outline-none'
            value={selectedFilter}
            onChange={(e) => filterJobs(e.target.value)}>
            <option value='All'>All</option>
            <option value='Remote'>Remote</option>
            <option value='On-site'>On-site</option>
          </select>
        </div>

        <div className='job-list my-container space-y-8'>
          {jobs.map((job) => (
            <AppliedJobsCard
              job={job}
              key={job.id}></AppliedJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

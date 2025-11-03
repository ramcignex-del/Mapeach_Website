import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Example: replace with actual API later (Zoho Recruit, etc.)
    const fetchJobs = async () => {
      const data = [
        {
          id: 1,
          title: 'Frontend Developer',
          location: 'Bangalore, India',
          type: 'Full-Time',
          description: 'React and Tailwind developer with strong UI/UX understanding.',
        },
        {
          id: 2,
          title: 'Backend Engineer',
          location: 'Remote',
          type: 'Full-Time',
          description: 'Experience with Node.js, Express, and MongoDB required.',
        },
        {
          id: 3,
          title: 'Product Designer',
          location: 'Hyderabad, India',
          type: 'Contract',
          description: 'Looking for a creative designer proficient with Figma and design systems.',
        },
      ];
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div
      className="min-h-screen bg-white pt-28 px-4 sm:px-8 lg:px-16 font-poppins text-slate-800"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-left mb-8">
        Current Openings
      </h1>

      <div className="space-y-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2
                className="text-left text-xl sm:text-2xl font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, #1C3F68, #0B2A4A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {job.title}
              </h2>

              <div className="mt-2 text-sm text-slate-500">
                {job.location} • {job.type}
              </div>

              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                {job.description}
              </p>

              <button
                className="mt-5 inline-block px-5 py-2 text-white text-sm font-semibold uppercase rounded-md shadow-md
                bg-gradient-to-r from-[#00CFFF] via-[#00E5FF] to-[#33EFFF]
                hover:from-[#00E5FF] hover:via-[#33EFFF] hover:to-[#00F0FF]
                transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-slate-600 text-left">No current openings.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;

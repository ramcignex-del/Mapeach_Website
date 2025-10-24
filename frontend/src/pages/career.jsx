import React from 'react';

const ExternalPage = () => {
  const externalUrl = 'https://mapeach.zohorecruit.com/jobs/Jobs'; // 👈 Replace with your target URL

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',       // Fill the screen height
        overflow: 'hidden',    // Hide scrollbars from the container
      }}
    >
      <iframe
        src={externalUrl}
        title="External Page"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
      />
    </div>
  );
};

export default ExternalPage;

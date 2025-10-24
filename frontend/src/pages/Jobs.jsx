import React, { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    // --- Load Zoho Recruit CSS ---
    const cssId = 'zoho-embed-jobs-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
      document.head.appendChild(link);
    }

    // --- Load Zoho Recruit JS ---
    const scriptId = 'zoho-embed-jobs-js';
    const existingScript = document.getElementById(scriptId);

    const initializeZohoWidget = () => {
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: 'rec_job_listing_div',
          page_name: 'Jobs',
          source: 'CareerSite',
          site: 'https://mapeach.zohorecruit.com', // <-- your Zoho Recruit site
          brand_color: '#6875E2',
          empty_job_msg: 'No current Openings',
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
      script.onload = initializeZohoWidget;
      document.body.appendChild(script);
    } else {
      initializeZohoWidget();
    }

    // Cleanup not required (Zoho manages widget globally)
  }, []);

  return (
    <div
      className="embed_jobs_head embed_jobs_with_style_3"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

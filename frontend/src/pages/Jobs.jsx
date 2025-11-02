import React, { useEffect } from 'react';

const ZohoRecruitCareers = () => {
  useEffect(() => {
    // --- Load Zoho Recruit CSS (only once) ---
    const cssId = 'zoho-embed-jobs-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href =
        'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
      document.head.appendChild(link);
    }

    // --- Function to initialize Zoho widget ---
    const initializeZohoWidget = () => {
      if (window.rec_embed_js && typeof window.rec_embed_js.load === 'function') {
        window.rec_embed_js.load({
          widget_id: 'rec_job_listing_div',
          page_name: 'Careers',
          source: 'CareerSite',
          site: 'https://mapeach.zohorecruit.com', // ✅ must match your Recruit site domain
          brand_color: '#6875E2',
          empty_job_msg: 'No current Openings',
          page_limit: 10, // ✅ shows 10 jobs per page
          enable_pagination: true, // ✅ force pagination bar to render
        });
      } else {
        // Retry in case Zoho script isn't ready yet
        setTimeout(initializeZohoWidget, 500);
      }
    };

    // --- Load Zoho Recruit JS (only once) ---
    const scriptId = 'zoho-embed-jobs-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src =
        'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
      script.onload = initializeZohoWidget;
      document.body.appendChild(script);
    } else {
      initializeZohoWidget();
    }
  }, []);

  return (
    <div
      className="embed_jobs_head embed_jobs_with_style_3"
      style={{
        width: '100%',
        minHeight: '100vh', // 👈 lets the container grow with content
        overflow: 'visible', // 👈 ensures pagination isn't hidden
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

export default ZohoRecruitCareers;

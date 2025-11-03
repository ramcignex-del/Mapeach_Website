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

    // --- Load Zoho Recruit JS ---
    const scriptId = 'zoho-embed-jobs-js';
    const existingScript = document.getElementById(scriptId);

    const initializeZohoWidget = () => {
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: 'rec_job_listing_div',
          page_name: 'Careers',
          source: 'CareerSite',
          site: 'https://mapeach.zohorecruit.com',
          brand_color: '#00E5FF', // 💠 Updated to glossy cyan blue
          empty_job_msg: 'No current Openings',
          page_limit: 10, // ✅ Enables pagination (10 jobs per page)
        });
      }
    };

    if (!existingScript) {
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
        minHeight: '100vh',
        overflow: 'visible',
        margin: 0,
        padding: '40px 0',
        boxSizing: 'border-box',
        background: 'linear-gradient(180deg, #F7F9FC 0%, #EFFFFF 100%)', // ✨ Subtle gradient backdrop
      }}
    >
      <div className="embed_jobs_head2" style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#00204A', // deep navy from logo
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}
        >
          Join Our Team
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#6C7A89',
            marginBottom: '2rem',
          }}
        >
          Explore exciting opportunities with Mapeach
        </p>
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
};

export default ZohoRecruitCareers;

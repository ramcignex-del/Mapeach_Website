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
          brand_color: '#00CFFF', // glossy cyan blue for brand consistency
          empty_job_msg: 'No current Openings',
          page_limit: 10,
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
      className="embed_jobs_head embed_jobs_with_style_3 font-poppins"
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'visible',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        textAlign: 'left',
      }}
    >
      <style>{`
        /* ✅ Custom job title style */
        .embed_jobs_head .jobtitle,
        .embed_jobs_head .jobtitle a {
          font-weight: 600 !important;
          background: linear-gradient(to bottom, #1C3F68, #0B2A4A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none !important;
        }

        .embed_jobs_head .jobtitle a:hover {
          opacity: 0.85;
          text-decoration: underline;
        }

        /* ✅ Ensure consistent font */
        .embed_jobs_head {
          font-family: 'Poppins', sans-serif !important;
        }

        /* ✅ Keep layout left-aligned */
        .embed_jobs_head3 {
          text-align: left !important;
        }
      `}</style>

      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
};

export default ZohoRecruitCareers;

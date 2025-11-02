import React, { useEffect } from 'react';

const ZohoRecruitCareers = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div id="rec_job_listing_div"></div>
          <script>
            window.rec_embed_js = window.rec_embed_js || {};
            rec_embed_js.load({
              widget_id: "rec_job_listing_div",
              page_name: "Careers",
              source: "CareerSite",
              site: "https://mapeach.zohorecruit.com"
            });
          </script>
        `,
      }}
    />
  );
};

export default ZohoRecruitCareers;

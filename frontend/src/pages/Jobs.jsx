import React, { useEffect } from "react";

const ZohoRecruitCareers = () => {
  useEffect(() => {
    // --- Step 1: Load Zoho CSS ---
    const cssId = "zoho-embed-jobs-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href =
        "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
      document.head.appendChild(link);
    }

    // --- Step 2: Inject Zoho Embed HTML & Script ---
    const container = document.getElementById("zoho-embed-container");
    if (container) {
      container.innerHTML = `
        <div id="rec_job_listing_div"></div>
        <script type="text/javascript">
          if (window.rec_embed_js) {
            window.rec_embed_js.load({
              widget_id: "rec_job_listing_div",
              page_name: "Careers",
              source: "CareerSite",
              site: "https://mapeach.zohorecruit.com"
            });
          } else {
            var s = document.createElement("script");
            s.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
            s.onload = function() {
              window.rec_embed_js.load({
                widget_id: "rec_job_listing_div",
                page_name: "Careers",
                source: "CareerSite",
                site: "https://mapeach.zohorecruit.com"
              });
            };
            document.body.appendChild(s);
          }
        </script>
      `;
    }
  }, []);

  return (
    <div
      id="zoho-embed-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "visible",
        margin: 0,
        padding: 0,
      }}
    />
  );
};

export default ZohoRecruitCareers;

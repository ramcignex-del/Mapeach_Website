import React from "react";

const ZohoRecruitCareers = () => {
  return (
    <div
      className="careers-container"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#ffffff", // Match your site background
      }}
    >
      <iframe
        src="https://mapeach.zohorecruit.com/careers"
        title="Careers at Mapeach"
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          minHeight: "100vh",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ZohoRecruitCareers;

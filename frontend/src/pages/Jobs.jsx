import React from "react";

const ZohoRecruitCareers = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#111827",
        fontFamily: "Inter, sans-serif",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Join Our Team at Mapeach
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px" }}>
        Explore exciting career opportunities and apply directly through our Zoho Recruit portal.
      </p>

      <a
        href="https://mapeach.zohorecruit.com/careers"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#6875E2",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
          transition: "background 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a66d4")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6875E2")}
      >
        View Current Openings →
      </a>
    </section>
  );
};

export default ZohoRecruitCareers;

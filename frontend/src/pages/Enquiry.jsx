import React from "react";

const StaffingEnquiryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-xl rounded-3xl border border-gray-100 w-full max-w-3xl p-8 sm:p-10">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Staffing Enquiry
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Submit your staffing requirements — we’ll get in touch to tailor a
            plan that fits your business needs.
          </p>
        </div>

        {/* Zoho CRM Form (iframe embed) */}
        <div className="flex justify-center">
          <iframe
            title="Zoho CRM Staffing Enquiry Form"
            src="https://crm.zoho.com/crm/WebToLeadForm?formLink=f141cef449221d23b2bd9aaafdafe90a5e3baa14f6530396bd832d664249305887f85c993b05631f5bee43ecbdf2659c"
            width="100%"
            height="850"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "1rem",
              backgroundColor: "white",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StaffingEnquiryPage;

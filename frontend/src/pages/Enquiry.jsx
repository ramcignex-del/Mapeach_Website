import React, { useEffect } from "react";

const StaffingEnquiryPage = () => {
  useEffect(() => {
    // Inject Zoho form script dynamically when the component mounts
    const formContainer = document.getElementById("zoho-form-container");
    if (formContainer && !formContainer.hasChildNodes()) {
      const parser = new DOMParser();
      const html = `
        <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm custom-zoho-form'>
          <form id='webform2271888000001020071' 
            action='https://crm.zoho.com/crm/WebToLeadForm' 
            name='WebToLeads2271888000001020071' 
            method='POST' 
            accept-charset='UTF-8'>

            <div class='form-title'>Staffing Enquiry</div>

            <!-- Company -->
            <div class='form-row'>
              <label>Company <span class='required'>*</span></label>
              <input type='text' name='Company' required />
            </div>

            <!-- First Name -->
            <div class='form-row'>
              <label>First Name <span class='required'>*</span></label>
              <input type='text' name='First Name' required />
            </div>

            <!-- Last Name -->
            <div class='form-row'>
              <label>Last Name <span class='required'>*</span></label>
              <input type='text' name='Last Name' required />
            </div>

            <!-- Title -->
            <div class='form-row'>
              <label>Title <span class='required'>*</span></label>
              <input type='text' name='Designation' required />
            </div>

            <!-- Email -->
            <div class='form-row'>
              <label>Email <span class='required'>*</span></label>
              <input type='email' name='Email' required />
            </div>

            <!-- Country -->
            <div class='form-row'>
              <label>Country <span class='required'>*</span></label>
              <input type='text' name='Country' required />
            </div>

            <!-- Description -->
            <div class='form-row'>
              <label>Description</label>
              <textarea name='Description' rows='3'></textarea>
            </div>

            <div class='form-actions'>
              <button type='submit' class='submit-btn'>Submit</button>
              <button type='reset' class='reset-btn'>Reset</button>
            </div>
          </form>
        </div>
      `;
      const fragment = parser.parseFromString(html, "text/html");
      formContainer.appendChild(fragment.body.firstChild);
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 min-h-screen flex justify-center items-center">
      <div
        id="zoho-form-container"
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-100"
      ></div>

      <style>{`
        .custom-zoho-form {
          font-family: 'Inter', sans-serif;
          width: 100%;
        }

        .form-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .form-row label {
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 0.3rem;
        }

        .form-row .required {
          color: red;
          margin-left: 3px;
        }

        .form-row input,
        .form-row textarea {
          padding: 10px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.95rem;
          background-color: white;
          color: #0f172a;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-row input:focus,
        .form-row textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .form-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .submit-btn {
          background: linear-gradient(to right, #0ea5e9, #3b82f6);
          color: white;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          background: linear-gradient(to right, #0284c7, #2563eb);
        }

        .reset-btn {
          background-color: #e2e8f0;
          color: #1e293b;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .reset-btn:hover {
          background-color: #cbd5e1;
        }
      `}</style>
    </div>
  );
};

export default StaffingEnquiryPage;

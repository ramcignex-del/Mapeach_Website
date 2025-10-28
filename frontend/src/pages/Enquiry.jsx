import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const formHTML = `
      <div id='crmWebToEntityForm'
        style='background-color:white;color:#000;max-width:800px;margin:40px auto;
               border-radius:10px;padding:30px;box-shadow:0 2px 10px rgba(0,0,0,0.1);'>

        <h2 style='text-align:center;font-size:24px;color:#132C14;margin-bottom:25px;'>
          Enquiry Form
        </h2>

        <form id='zohoForm' method='POST' target='hidden_iframe'
              action='https://crm.zoho.com/crm/WebToLeadForm'
              accept-charset='UTF-8'>

          <input type='hidden' name='xnQsjsdp' value='ab472152c57f462f9afee3c159c7924190d288ffc7a7cc26cce0667aa5363476'>
          <input type='hidden' name='xmIwtLD' value='0d0e64b949e96a991f581820104f38c6c6cb85f6d08d777fa626cae0f4472f6439ec6a0079128bc425cf1598feb7becd'>
          <input type='hidden' name='actionType' value='TGVhZHM='>
          <input type='hidden' name='returnURL' value=''>
          <input type='hidden' id='ldeskuid' name='ldeskuid'>
          <input type='hidden' id='LDTuvid' name='LDTuvid'>

          <div style='display:flex;flex-direction:column;gap:15px;'>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Company<span style='color:red;'>*</span></label>
              <input type='text' name='Company' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>First Name<span style='color:red;'>*</span></label>
              <input type='text' name='First Name' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Last Name<span style='color:red;'>*</span></label>
              <input type='text' name='Last Name' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Title<span style='color:red;'>*</span></label>
              <input type='text' name='Designation' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Email<span style='color:red;'>*</span></label>
              <input type='email' name='Email' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:center;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Country<span style='color:red;'>*</span></label>
              <input type='text' name='Country' required 
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'/>
            </div>

            <div style='display:flex;align-items:flex-start;gap:15px;'>
              <label style='width:30%;font-weight:500;'>Description</label>
              <textarea name='Description' rows='3'
                style='flex:1;padding:8px;border:1px solid #ccc;border-radius:5px;'></textarea>
            </div>

          </div>

          <div style='text-align:center;margin-top:25px;'>
            <button type='submit'
              style='background:linear-gradient(0deg,#0279FF 0%,#00A3F3 100%);
                     color:#fff;border:none;border-radius:6px;padding:10px 25px;
                     font-size:15px;cursor:pointer;'>
              Submit
            </button>
            <button type='reset'
              style='margin-left:10px;background:#f5f5f5;color:#333;
                     border:1px solid #ccc;border-radius:6px;padding:10px 25px;
                     font-size:15px;cursor:pointer;'>
              Reset
            </button>
          </div>
        </form>
      </div>
      <iframe name='hidden_iframe' id='hidden_iframe' style='display:none;'></iframe>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    const form = document.getElementById("zohoForm");
    const iframe = document.getElementById("hidden_iframe");

    // When the form submits, watch for iframe load (Zoho response)
    if (iframe) {
      iframe.onload = () => {
        // Hide the form container after submission
        const formDiv = document.getElementById("zoho-form-container");
        if (formDiv) formDiv.style.display = "none";
        setSubmitted(true);
      };
    }

    // Also add event listener to prevent double submit
    if (form) {
      form.addEventListener("submit", () => {
        setTimeout(() => {
          const formDiv = document.getElementById("zoho-form-container");
          if (formDiv) formDiv.style.opacity = "0.3";
        }, 100);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div id="zoho-form-container" />
      {submitted && (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="text-5xl text-green-600 mb-4">✔️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Your response has been submitted successfully. We’ll reach out to you soon.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Enquiry;

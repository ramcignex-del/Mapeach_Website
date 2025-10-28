import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Enquiry.jsx
 * - Embeds Zoho WebToLead form (via hidden iframe)
 * - Keeps form styling consistent with site
 * - Hides form after submit, shows brand-colored Thank You area
 * - Scrolls to top when submission completes
 */

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // NOTE: Update hidden fields (xnQsjsdp / xmIwtLD / actionType / returnURL) if Zoho gives new values.
    const formHTML = `
      <div id='crmWebToEntityForm'
           style='background-color:white;color:#000;max-width:920px;margin:28px auto;border-radius:10px;padding:28px;box-shadow:0 6px 24px rgba(15,23,42,0.06);'>
        <h2 style='text-align:center;font-size:22px;color:#064e3b;margin-bottom:18px;font-weight:700;font-family:Inter, Arial, sans-serif;'>
          Enquiry Form
        </h2>

        <form id='zohoForm' method='POST' target='hidden_iframe'
              action='https://crm.zoho.com/crm/WebToLeadForm'
              accept-charset='UTF-8'>

          <!-- Required Zoho fields (do not remove) -->
          <input type='hidden' name='xnQsjsdp' value='ab472152c57f462f9afee3c159c7924190d288ffc7a7cc26cce0667aa5363476' />
          <input type='hidden' name='xmIwtLD' value='0d0e64b949e96a991f581820104f38c6c6cb85f6d08d777fa626cae0f4472f6439ec6a0079128bc425cf1598feb7becd' />
          <input type='hidden' name='actionType' value='TGVhZHM=' />
          <input type='hidden' name='returnURL' value='' />
          <input type='hidden' id='ldeskuid' name='ldeskuid' />
          <input type='hidden' id='LDTuvid' name='LDTuvid' />

          <!-- Form fields: layout using flex for alignment -->
          <div style='display:flex;flex-direction:column;gap:14px;font-family:Inter, Arial, sans-serif;'>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>Company<span style='color:#dc2626'>*</span></label>
              <input name='Company' type='text' maxlength='200' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>First Name<span style='color:#dc2626'>*</span></label>
              <input name='First Name' type='text' maxlength='40' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>Last Name<span style='color:#dc2626'>*</span></label>
              <input name='Last Name' type='text' maxlength='80' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>Title<span style='color:#dc2626'>*</span></label>
              <input name='Designation' type='text' maxlength='100' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>Email<span style='color:#dc2626'>*</span></label>
              <input name='Email' type='email' maxlength='100' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:center;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;'>Country<span style='color:#dc2626'>*</span></label>
              <input name='Country' type='text' maxlength='100' required
                     style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;' />
            </div>

            <div style='display:flex;align-items:flex-start;gap:14px;'>
              <label style='width:28%;font-size:14px;color:#064e3b;font-weight:600;margin-top:6px;'>Description</label>
              <textarea name='Description' rows='4'
                        style='flex:1;padding:10px;border:1px solid #e6f2ea;border-radius:8px;background:#ffffff;font-size:14px;color:#0f172a;resize:vertical;'></textarea>
            </div>

          </div>

          <!-- Buttons -->
          <div style='text-align:center;margin-top:20px;'>
            <button type='submit'
              style='background:linear-gradient(180deg,#059669 0%,#10B981 100%);border:none;color:#fff;border-radius:8px;padding:10px 26px;font-size:15px;cursor:pointer;font-weight:600;'>
              Submit
            </button>
            <button type='reset'
              style='margin-left:10px;background:#f8faf8;border:1px solid #e6f2ea;color:#065f46;border-radius:8px;padding:10px 22px;font-size:15px;cursor:pointer;'>
              Reset
            </button>
          </div>
        </form>
      </div>

      <!-- hidden iframe used to capture Zoho response without leaving the site -->
      <iframe name='hidden_iframe' id='hidden_iframe' style='display:none;'></iframe>
    `;

    // Inject form HTML into the page
    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    // Find iframe and observe its load event to detect submission completion
    const iframe = document.getElementById("hidden_iframe");
    if (iframe) {
      iframe.onload = () => {
        // hide the form container and show thank you
        const formDiv = document.getElementById("zoho-form-container");
        if (formDiv) formDiv.style.display = "none";

        // scroll to page top so thank-you is visible
        window.scrollTo({ top: 0, behavior: "smooth" });

        setSubmitted(true);
      };
    }

    // Accessibility: when user presses submit, slightly dim the form so UX shows action
    const formEl = document.getElementById("zohoForm");
    if (formEl) {
      formEl.addEventListener("submit", () => {
        const wrapper = document.getElementById("zoho-form-container");
        if (wrapper) wrapper.style.opacity = "0.45";
      });
    }

    // cleanup not strictly needed here but kept for safety
    return () => {
      if (iframe) iframe.onload = null;
      if (formEl) formEl.onsubmit = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div id="zoho-form-container" />

      {submitted && (
        <div className="flex flex-col items-center justify-center text-center py-20">
          {/* emerald gradient circular icon */}
          <div
            className="mb-6 rounded-full p-4 text-white"
            style={{
              background: "linear-gradient(180deg,#059669 0%,#10B981 100%)",
            }}
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-2" style={{ color: "#065f46" }}>
            Thank You!
          </h2>

          <p className="text-slate-600 mb-6 max-w-xl px-4">
            Your response has been submitted successfully. We’ll reach out to you soon.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg text-white transition"
            style={{
              background: "linear-gradient(180deg,#059669 0%,#10B981 100%)",
            }}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Enquiry;

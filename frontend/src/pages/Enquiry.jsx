import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Zoho form dynamically
    const formHTML = `
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' 
        style='background-color:white; color:black; max-width:800px; margin:30px auto; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1); padding:30px;'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>

        <form id='webform2271888000001038009' 
              action='https://crm.zoho.com/crm/WebToLeadForm'
              name='WebToLeads2271888000001038009' 
              method='POST'
              onsubmit='javascript:document.charset="UTF-8"; return checkMandatory2271888000001038009()'
              accept-charset='UTF-8'>

          <input type='text' style='display:none;' name='xnQsjsdp' value='ab472152c57f462f9afee3c159c7924190d288ffc7a7cc26cce0667aa5363476'>
          <input type='hidden' name='zc_gad' id='zc_gad' value=''>
          <input type='text' style='display:none;' name='xmIwtLD' value='0d0e64b949e96a991f581820104f38c6c6cb85f6d08d777fa626cae0f4472f6439ec6a0079128bc425cf1598feb7becd'>
          <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
          <input type='text' style='display:none;' name='returnURL' value=''>
          <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'>
          <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'>

          <div class='zcwf_title' style='text-align:center; font-size:22px; font-weight:600; color:#132C14; margin-bottom:20px;'>Enquiry Form</div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Company<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Company' maxlength='200' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>First Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='First Name' maxlength='40' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Last Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Last Name' maxlength='80' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Title<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Designation' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Email<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='email' name='Email' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Country<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Country' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Description</label></div>
            <div class='zcwf_col_fld'><textarea name='Description' rows='3'></textarea></div>
          </div>

          <div class='zcwf_row' style='text-align:center; margin-top:20px;'>
            <input type='submit' class='formsubmit zcwf_button' value='Submit' 
              style='background:linear-gradient(0deg,#0279FF 0%,#00A3F3 100%);color:#fff;border:none;border-radius:5px;padding:10px 20px;cursor:pointer;font-size:14px;' />
            <input type='reset' class='zcwf_button' value='Reset' 
              style='margin-left:10px;background:#f5f5f5;border:1px solid #ccc;border-radius:5px;padding:10px 20px;cursor:pointer;font-size:14px;' />
          </div>

        </form>
      </div>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    // Intercept Zoho’s thank-you message
    const observer = new MutationObserver(() => {
      const bodyText = document.body.innerText;
      if (bodyText.includes("Thank you for submitting your response")) {
        setIsSubmitted(true);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {!isSubmitted ? (
        <div id="zoho-form-container" className="px-4" />
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="text-5xl text-green-600 mb-4">✔️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
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

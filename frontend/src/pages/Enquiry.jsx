import React, { useEffect } from "react";

const Enquiry = () => {
  useEffect(() => {
    // --- Inject Zoho Webform Script dynamically ---
    const formContainer = document.getElementById("zoho-form-container");

    // Prevent multiple injections
    if (!formContainer || formContainer.innerHTML.trim() !== "") return;

    formContainer.innerHTML = `
      <!-- Zoho CRM WebToLead Form -->
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color:white;color:black;max-width: 800px;margin:auto;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);padding:30px;'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>

        <form id='webform2271888000001038009'
              action='https://crm.zoho.com/crm/WebToLeadForm'
              name='WebToLeads2271888000001038009'
              method='POST'
              onSubmit='javascript:document.charset="UTF-8"; return checkMandatory2271888000001038009()'
              accept-charset='UTF-8'>
              
          <!-- Required hidden Zoho fields -->
          <input type='hidden' name='xnQsjsdp' value='ab472152c57f462f9afee3c159c7924190d288ffc7a7cc26cce0667aa5363476'/>
          <input type='hidden' name='xmIwtLD' value='0d0e64b949e96a991f581820104f38c6c6cb85f6d08d777fa626cae0f4472f6439ec6a0079128bc425cf1598feb7becd'/>
          <input type='hidden' name='actionType' value='TGVhZHM='/>
          <input type='hidden' name='returnURL' value='https://www.mapeach.com'/>
          <input type='hidden' id='ldeskuid' name='ldeskuid'/>
          <input type='hidden' id='LDTuvid' name='LDTuvid'/>

          <h2 style='text-align:center;font-size:1.8rem;font-weight:700;margin-bottom:1.5rem;color:#0b3558;'>Enquiry Form</h2>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Company'>Company<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='First_Name'>First Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Last_Name'>Last Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Designation'>Title<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Designation' name='Designation' maxlength='100' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Email'>Email<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='email' id='Email' name='Email' maxlength='100' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Country'>Country<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Country' name='Country' maxlength='100' required/></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Description'>Description<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><textarea id='Description' name='Description' rows='4' style='width:100%;font-family:Arial,sans-serif;' required></textarea></div>
          </div>

          <div style='text-align:center;margin-top:30px;'>
            <input type='submit' class='formsubmit zcwf_button' value='Submit' style='background:linear-gradient(90deg,#0279FF,#00A3F3);color:white;padding:10px 24px;border:none;border-radius:6px;font-size:15px;cursor:pointer;'/>
            <input type='reset' class='zcwf_button' value='Reset' style='margin-left:15px;padding:10px 24px;border-radius:6px;border:1px solid #ccc;font-size:15px;cursor:pointer;'/>
          </div>
        </form>
      </div>
    `;
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start py-16 bg-gray-50">
      <div id="zoho-form-container" className="w-full flex justify-center"></div>
    </div>
  );
};

export default Enquiry;

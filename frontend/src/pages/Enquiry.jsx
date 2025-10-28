import React, { useEffect } from "react";

const Enquiry = () => {
  useEffect(() => {
    // Inject Zoho CRM Webform HTML (verbatim from Zoho)
    const formHTML = `
      <!-- Zoho CRM Web-To-Lead Form -->
      ${`<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color:white;color:black;max-width:800px;margin:0 auto;'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
        <form id='webform2271888000001020071' 
              action='https://crm.zoho.com/crm/WebToLeadForm'
              name='WebToLeads2271888000001020071'
              method='POST'
              onSubmit='javascript:document.charset="UTF-8"; return checkMandatory2271888000001020071()'
              accept-charset='UTF-8'>

          <input type='text' style='display:none;' name='xnQsjsdp' value='e844bfe1236e8556e49690530f145ff78e4c80eb3364a48f2c09077502e74cc2' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='text' style='display:none;' name='xmIwtLD' value='d0dd4d0f5140577bb062cc71bc28e2fab3b20a96723c5d9c92ce66b17c4cf5d629818adff7d879e88e1f47b4b5de09ce' />
          <input type='text' style='display:none;' name='actionType' value='TGVhZHM=' />
          <input type='text' style='display:none;' name='returnURL' value='https://www.mapeach.com' />
          <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid' />
          <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid' />

          <div class='zcwf_title' style='text-align:center;font-size:22px;font-weight:bold;color:#132C14;margin-bottom:25px;'>
            Enquiry Form
          </div>

          <style>
            .zcwf_row { display:flex; flex-wrap:wrap; margin-bottom:14px; align-items:center; }
            .zcwf_col_lab { width:30%; font-size:14px; font-weight:500; color:#333; }
            .zcwf_col_fld { width:65%; }
            .zcwf_col_fld input, .zcwf_col_fld textarea {
              width:100%; padding:8px; border:1px solid #ccc; border-radius:5px; font-size:14px;
              background:white; color:black;
            }
            .zcwf_col_fld input:focus, .zcwf_col_fld textarea:focus {
              border-color:#007bff; outline:none;
            }
            .btn-container { text-align:center; margin-top:25px; }
            .zcwf_button {
              background:linear-gradient(0deg,#0279FF 0%,#00A3F3 100%);
              color:white; border:none; border-radius:6px; padding:10px 20px;
              font-size:14px; cursor:pointer;
            }
            .zcwf_button:hover { opacity:0.9; }
          </style>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Company<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>First Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Last Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Title<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Designation' name='Designation' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Email<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='email' id='Email' name='Email' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Country<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' id='Country' name='Country' maxlength='100' required /></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Description</label></div>
            <div class='zcwf_col_fld'><textarea id='Description' name='Description' rows='3'></textarea></div>
          </div>

          <div class='btn-container'>
            <input type='submit' id='formsubmit' role='button' class='zcwf_button' value='Submit' />
            <input type='reset' class='zcwf_button' role='button' name='reset' value='Reset' style='margin-left:10px;' />
          </div>

          <script type='text/javascript' id='VisitorTracking'>
            var $zoho = $zoho || {}; 
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode:'siq76236e9b8b2d1e31ecabacf7b59bfd9dc5da105961016d51b753c982bef2a367',
              values:{}, ready:function(){}
            };
            var d=document; s=d.createElement('script'); s.type='text/javascript'; s.id='zsiqscript';
            s.defer=true; s.src='https://salesiq.zoho.com/widget';
            t=d.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s,t);
          </script>

        </form>
      </div>`}
    `;
    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center">
      <div id="zoho-form-container" className="w-full max-w-4xl"></div>
    </div>
  );
};

export default Enquiry;

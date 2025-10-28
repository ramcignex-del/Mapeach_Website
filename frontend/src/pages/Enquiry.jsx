import React, { useEffect } from "react";

const Enquiry = () => {
  useEffect(() => {
    // Inject official Zoho Webform HTML directly
    const formHTML = `
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'
        style='background-color: white; color: black; max-width: 800px; margin: 50px auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);'>
        
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>

        <div class='zcwf_title' style='text-align:center; font-size:22px; font-weight:bold; color:#132C14; margin-bottom:25px;'>
          Enquiry Form
        </div>

        <form id='webform2271888000001020071'
              action='https://crm.zoho.com/crm/WebToLeadForm'
              name='WebToLeads2271888000001020071'
              method='POST'
              accept-charset='UTF-8'>

          <!-- Hidden authentication tokens -->
          <input type='hidden' name='xnQsjsdp' value='b84fb36d7f829ae6b21c8bf491152280620937c0bc34fdcfb32903d11a21489b'>
          <input type='hidden' name='xmIwtLD' value='8aab1aa3defd4e39c4898defeaf37032ac32a8038fd58fd2bb875dda94d5b3782f863a147593b4e07443e6a5a886a82c'>
          <input type='hidden' name='actionType' value='TGVhZHM='>
          <input type='hidden' name='returnURL' value='https://www.mapeach.com'>
          <input type='hidden' id='ldeskuid' name='ldeskuid'>
          <input type='hidden' id='LDTuvid' name='LDTuvid'>

          <style>
            .zcwf_row { display: flex; flex-wrap: wrap; margin-bottom: 16px; align-items: center; }
            .zcwf_col_lab { width: 30%; font-size: 14px; font-weight: 500; color: #333; }
            .zcwf_col_fld { width: 65%; }
            .zcwf_col_fld input[type="text"],
            .zcwf_col_fld input[type="email"],
            .zcwf_col_fld textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 14px;
              font-family: Arial, sans-serif;
              color: #000;
              background: #fff;
            }
            .zcwf_col_fld input:focus,
            .zcwf_col_fld textarea:focus {
              border-color: #007bff;
              outline: none;
            }
            .zcwf_button {
              background: linear-gradient(0deg, #0279FF 0%, #00A3F3 100%);
              color: white;
              border: none;
              border-radius: 6px;
              padding: 10px 20px;
              font-size: 14px;
              cursor: pointer;
              transition: opacity 0.3s;
            }
            .zcwf_button:hover { opacity: 0.9; }
            .btn-container { text-align: center; margin-top: 25px; }
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
            <input type='submit' class='zcwf_button' value='Submit' />
            <input type='reset' class='zcwf_button' value='Reset' style='margin-left:10px;' />
          </div>

        </form>
      </div>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div id="zoho-form-container" />
    </div>
  );
};

export default Enquiry;

import React, { useEffect } from "react";

const Enquiry = () => {
  useEffect(() => {
    const formHTML = `
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'
        style='background-color: white; color: black; max-width: 1000px; margin: 60px auto; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <style>
          html, body { margin: 0; font-family: "Inter", Arial, sans-serif; }
          #crmWebToEntityForm { box-sizing: border-box; padding: 50px; }
          .zcwf_title { text-align: center; font-size: 28px; font-weight: 700; margin-bottom: 30px; color: #1e40af; }

          .zcwf_row { display: flex; flex-wrap: wrap; margin-bottom: 20px; align-items: center; }
          .zcwf_col_lab { width: 25%; font-size: 15px; font-weight: 500; color: #333; }
          .zcwf_col_fld { width: 70%; }

          .zcwf_col_fld input[type="text"],
          .zcwf_col_fld input[type="email"],
          .zcwf_col_fld textarea {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 14px;
            color: #000;
          }
          .zcwf_col_fld input:focus, .zcwf_col_fld textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
          }

          /* Buttons */
          .zcwf_row_buttons {
            display: flex;
            justify-content: center;
            margin-top: 30px;
            gap: 15px;
          }
          .zcwf_button, .formsubmit {
            background: linear-gradient(90deg, #0284c7 0%, #0ea5e9 100%);
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 10px 24px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            transition: all 0.2s ease;
          }
          .zcwf_button:hover, .formsubmit:hover {
            opacity: 0.9;
            transform: scale(1.03);
          }

          /* Success splash */
          .wf_customMessageBox {
            display: none;
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #F5FAF5;
            border: 1px solid #A9D3AB;
            border-radius: 8px;
            padding: 25px 35px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            text-align: center;
            color: #132C14;
            font-weight: 500;
            z-index: 9999;
          }
        </style>

        <div class='zcwf_title'>Enquiry Form</div>

        <form
          id='webform2271888000001020071'
          name='WebToLeads2271888000001020071'
          method='POST'
          action='https://crm.zoho.com/crm/WebToLeadForm'
          accept-charset='UTF-8'
          target='_self'
        >
          <input type='hidden' name='xnQsjsdp' value='d0fec9be3236f56777953b739de80c2607c7a6de91f3bcafeac8e25df1c7aa61'>
          <input type='hidden' name='xmIwtLD' value='1b2ae8b8b645ade0c17f21ee78b35e0e1588eef513721ea030a5e1212d51f888c5f2c5cfb20d63649d0f5597a78df4d8'>
          <input type='hidden' name='actionType' value='TGVhZHM='>
          <input type='hidden' name='returnURL' value='https://www.mapeach.com'>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Company<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Company' required maxlength='200'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>First Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='First Name' required maxlength='40'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Last Name<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Last Name' required maxlength='80'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Title<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Designation' required maxlength='100'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Email<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='email' name='Email' required maxlength='100'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Country<span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'><input type='text' name='Country' required maxlength='100'></div>
          </div>

          <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label>Description</label></div>
            <div class='zcwf_col_fld'><textarea name='Description' rows='3'></textarea></div>
          </div>

          <div class='zcwf_row_buttons'>
            <input type='submit' class='formsubmit' value='Submit'>
            <input type='reset' class='zcwf_button' value='Reset'>
          </div>
        </form>

        <div id='wf_success' class='wf_customMessageBox'>
          ✅ Form submitted successfully!
        </div>
      </div>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    // Form submit listener (to show splash before redirect)
    const form = document.querySelector("#webform2271888000001020071");
    if (form) {
      form.addEventListener("submit", () => {
        const splash = document.getElementById("wf_success");
        if (splash) splash.style.display = "block";
        setTimeout(() => {
          if (splash) splash.style.display = "none";
          window.location.href = "/";
        }, 2500);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-start">
      <div id="zoho-form-container" className="w-full px-4" />
    </div>
  );
};

export default Enquiry;

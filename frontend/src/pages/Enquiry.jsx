import React, { useEffect } from "react";

const Enquiry = () => {
  useEffect(() => {
    // Inject Zoho form script dynamically
    const formHTML = `
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'
        style='background-color: white; color: black; max-width: 600px; margin: 40px auto;'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
        <style>
          html, body { margin: 0; font-family: Arial, sans-serif; }
          #crmWebToEntityForm { text-align: left; box-sizing: border-box; padding: 20px; }
          .zcwf_title { text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #132C14; }
          .zcwf_row { display: flex; flex-wrap: wrap; margin-bottom: 15px; align-items: center; }
          .zcwf_col_lab { width: 30%; font-size: 13px; color: #333; }
          .zcwf_col_fld { width: 65%; }
          .zcwf_col_fld input[type="text"],
          .zcwf_col_fld textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 13px;
            color: #000;
          }
          .zcwf_col_fld input[type="text"]:focus,
          .zcwf_col_fld textarea:focus {
            outline: none;
            border-color: #007bff;
          }
          .zcwf_button, .formsubmit {
            background: linear-gradient(0deg, #0279FF 0%, #00A3F3 100%);
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 8px 16px;
            cursor: pointer;
            font-size: 13px;
          }
          .zcwf_button:hover, .formsubmit:hover { opacity: 0.9; }
          .wf_customMessageBox {
            font-family: Arial, sans-serif;
            color: #132C14;
            background: #F5FAF5;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
            border-radius: 6px;
            border: 1px solid #A9D3AB;
            padding: 10px 15px;
            display: none;
            position: fixed;
            top: 20px; left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
          }
          .wf_customCircle {
            position: relative;
            background-color: #12AA67;
            border-radius: 100%;
            width: 20px; height: 20px;
            display: inline-block;
            margin-right: 8px;
          }
          .wf_customCheckMark {
            position: absolute;
            transform: rotate(45deg) translate(-50%, -50%);
            left: 6px; top: 9px;
            height: 8px; width: 3px;
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
          }
        </style>

        <div class='zcwf_title'>Staffing Enquiry</div>

        <form id='webform2271888000001020071' name='WebToLeads2271888000001020071' accept-charset='UTF-8'>
          <input type='hidden' name='xnQsjsdp' value='d0fec9be3236f56777953b739de80c2607c7a6de91f3bcafeac8e25df1c7aa61'>
          <input type='hidden' name='xmIwtLD' value='1b2ae8b8b645ade0c17f21ee78b35e0e1588eef513721ea030a5e1212d51f888c5f2c5cfb20d63649d0f5597a78df4d8'>
          <input type='hidden' name='actionType' value='TGVhZHM='>
          <input type='hidden' name='returnURL' value=''>
          <input type='hidden' id='ldeskuid' name='ldeskuid'>
          <input type='hidden' id='LDTuvid' name='LDTuvid'>

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

          <div class='zcwf_row' style='text-align:center;'>
            <input type='submit' class='formsubmit' value='Submit' />
            <input type='reset' class='zcwf_button' value='Reset' style='margin-left:8px;' />
          </div>

          <div class='wf_customMessageBox' id='wf_splash'>
            <div class='wf_customCircle'><div class='wf_customCheckMark'></div></div>
            <span id='wf_splash_info'>Form submitted successfully!</span>
          </div>
        </form>
      </div>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    // Load Zoho’s AJAX form behavior
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    script.onload = () => {
      // Activate Zoho CRM form submit handler
      const $ = window.jQuery;
      $("#webform2271888000001020071").on("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        $.ajax({
          url: "https://crm.zoho.com/crm/WebToLeadForm",
          type: "POST",
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          success: function () {
            $("#wf_splash").fadeIn();
            setTimeout(() => $("#wf_splash").fadeOut(), 4000);
            $("#webform2271888000001020071")[0].reset();
          },
          error: function () {
            alert("An error occurred while submitting the form. Please try again.");
          },
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div id="zoho-form-container" />
    </div>
  );
};

export default Enquiry;

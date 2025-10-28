import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const formHTML = `
      <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'
        style='background-color: white; color: black; max-width: 800px; margin: 50px auto; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08);'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
        <style>
          html, body { margin: 0; font-family: "Inter", Arial, sans-serif; }
          #crmWebToEntityForm { text-align: left; box-sizing: border-box; padding: 40px; }
          .zcwf_title { text-align: center; font-size: 26px; font-weight: 700; margin-bottom: 25px; color: #1e40af; }
          .zcwf_row { display: flex; flex-wrap: wrap; margin-bottom: 18px; align-items: center; }
          .zcwf_col_lab { width: 25%; font-size: 14px; color: #333; font-weight: 500; }
          .zcwf_col_fld { width: 70%; }
          .zcwf_col_fld input[type="text"],
          .zcwf_col_fld input[type="email"],
          .zcwf_col_fld textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            background-color: #fff;
            font-size: 14px;
            color: #000;
            transition: border 0.2s ease, box-shadow 0.2s ease;
          }
          .zcwf_col_fld input:focus,
          .zcwf_col_fld textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
          }

          /* Buttons */
          .zcwf_row_buttons {
            display: flex;
            justify-content: center;
            margin-top: 25px;
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
            transition: transform 0.2s ease, opacity 0.3s ease;
          }
          .zcwf_button:hover, .formsubmit:hover { opacity: 0.9; transform: scale(1.03); }

          /* Success Splash */
          .wf_customMessageBox {
            font-family: Inter, Arial, sans-serif;
            color: #132C14;
            background: #F5FAF5;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.25);
            border-radius: 8px;
            border: 1px solid #A9D3AB;
            padding: 20px 25px;
            display: none;
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            font-weight: 500;
            text-align: center;
            width: 300px;
          }
          .wf_customClose {
            position: absolute;
            top: 6px; right: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #444;
            cursor: pointer;
          }
          .wf_customCircle {
            position: relative;
            background-color: #12AA67;
            border-radius: 100%;
            width: 24px; height: 24px;
            display: inline-block;
            margin-bottom: 10px;
          }
          .wf_customCheckMark {
            position: absolute;
            transform: rotate(45deg) translate(-50%, -50%);
            left: 7px; top: 11px;
            height: 9px; width: 4px;
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
          }
        </style>

        <div class='zcwf_title'>Staffing Enquiry Form</div>

        <form id='webform2271888000001020071' name='WebToLeads2271888000001020071' method='POST' accept-charset='UTF-8'>
          <input type='hidden' name='xnQsjsdp' value='d0fec9be3236f56777953b739de80c2607c7a6de91f3bcafeac8e25df1c7aa61'>
          <input type='hidden' name='xmIwtLD' value='1b2ae8b8b645ade0c17f21ee78b35e0e1588eef513721ea030a5e1212d51f888c5f2c5cfb20d63649d0f5597a78df4d8'>
          <input type='hidden' name='actionType' value='TGVhZHM='>
          <input type='hidden' name='returnURL' value='https://www.mapeach.com'>
          <input type='hidden' id='ldeskuid' name='ldeskuid'>
          <input type='hidden' id='LDTuvid' name='LDTuvid'>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Company<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='text' name='Company' maxlength='200' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>First Name<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='text' name='First Name' maxlength='40' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Last Name<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='text' name='Last Name' maxlength='80' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Title<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='text' name='Designation' maxlength='100' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Email<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='email' name='Email' maxlength='100' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Country<span style='color:red;'>*</span></label></div>
          <div class='zcwf_col_fld'><input type='text' name='Country' maxlength='100' required /></div></div>

          <div class='zcwf_row'><div class='zcwf_col_lab'><label>Description</label></div>
          <div class='zcwf_col_fld'><textarea name='Description' rows='3'></textarea></div></div>

          <div class='zcwf_row_buttons'>
            <input type='submit' class='formsubmit' value='Submit' />
            <input type='reset' class='zcwf_button' value='Reset' />
          </div>

          <div class='wf_customMessageBox' id='wf_splash'>
            <div class='wf_customClose' id='wf_close'>×</div>
            <div class='wf_customCircle'><div class='wf_customCheckMark'></div></div>
            <div id='wf_splash_info'>Form submitted successfully!</div>
          </div>
        </form>
      </div>
    `;

    const container = document.getElementById("zoho-form-container");
    if (container) container.innerHTML = formHTML;

    // Load Zoho AJAX form handling
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    script.onload = () => {
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
            setTimeout(() => {
              $("#wf_splash").fadeOut();
              window.location.href = "/";
            }, 2500);
            $("#webform2271888000001020071")[0].reset();
          },
          error: function () {
            alert("An error occurred while submitting the form. Please try again.");
          },
        });
      });

      // Close splash manually
      $(document).on("click", "#wf_close", function () {
        $("#wf_splash").fadeOut();
        window.location.href = "/";
      });
    };
    document.body.appendChild(script);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-start">
      <div id="zoho-form-container" />
    </div>
  );
};

export default Enquiry;

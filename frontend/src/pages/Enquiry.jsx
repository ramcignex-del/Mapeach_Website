import React, { useEffect, useRef } from "react";

const StaffingEnquiryPage = () => {
  const formContainer = useRef(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Inject Zoho CRM Form HTML directly
    if (formContainer.current) {
      formContainer.current.innerHTML = `
        <!-- ZOHO CRM Webform Embed -->
        ${`<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px; margin: 0 auto;'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'></script>

          <form id='webform2271888000001020071' name='WebToLeads2271888000001020071' accept-charset='UTF-8'>
            <input type='hidden' name='xnQsjsdp' value='d0fec9be3236f56777953b739de80c2607c7a6de91f3bcafeac8e25df1c7aa61'/>
            <input type='hidden' name='xmIwtLD' value='1b2ae8b8b645ade0c17f21ee78b35e0e1588eef513721ea030a5e1212d51f888c5f2c5cfb20d63649d0f5597a78df4d8'/>
            <input type='hidden' name='actionType' value='TGVhZHM='/>
            <input type='hidden' name='returnURL' value='null'/>

            <div class='zcwf_title' style='text-align:center;font-size:20px;font-weight:bold;margin-bottom:20px;color:#0369a1;'>Staffing Enquiry</div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Company<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='text' name='Company' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>First Name<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='text' name='First Name' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Last Name<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='text' name='Last Name' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Title<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='text' name='Designation' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Email<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='email' name='Email' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Country<span style='color:red;'>*</span></label></div>
              <div class='zcwf_col_fld'><input type='text' name='Country' required /></div>
            </div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab'><label>Description</label></div>
              <div class='zcwf_col_fld'><textarea name='Description' rows='3'></textarea></div>
            </div>

            <div class='zcwf_row' style='text-align:center;margin-top:20px;'>
              <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' style='background:linear-gradient(90deg,#0284c7,#0ea5e9);color:white;padding:10px 25px;border:none;border-radius:8px;cursor:pointer;font-size:16px;'/>
              <input type='reset' class='zcwf_button' value='Reset' style='margin-left:10px;padding:10px 25px;border:1px solid #0284c7;border-radius:8px;cursor:pointer;font-size:16px;'/>
            </div>
          </form>

          <!-- Tracking Script -->
          <script type='text/javascript' id='VisitorTracking'>
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || { widgetcode:'siq76236e9b8b2d1e31ecabacf7b59bfd9dc5da105961016d51b753c982bef2a367', values:{}, ready:function(){} };
            var d=document; s=d.createElement('script'); s.type='text/javascript'; s.id='zsiqscript'; s.defer=true; s.src='https://salesiq.zoho.com/widget'; t=d.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s,t);
          </script>
        </div>`}
      `;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-20 px-4">
      <div className="bg-white shadow-xl rounded-3xl border border-gray-100 w-full max-w-3xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Staffing Enquiry
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Submit your staffing requirements — we’ll contact you with a
            customized plan tailored to your business needs.
          </p>
        </div>

        {/* Embed Zoho Form */}
        <div ref={formContainer} className="text-left"></div>
      </div>
    </div>
  );
};

export default StaffingEnquiryPage;

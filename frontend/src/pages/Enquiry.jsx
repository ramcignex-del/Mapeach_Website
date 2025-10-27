import React, { useEffect } from "react";

const StaffingEnquiryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          Staffing Enquiry Form
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Share your staffing requirements, and our team will get in touch to
          provide the best-fit solutions for your business.
        </p>
      </section>

      {/* Zoho Form Container */}
      <section className="flex justify-center">
        <div
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl"
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* 
            We inject the Zoho HTML code directly here.
            It will adopt our parent container’s width and color scheme.
          */}
          <div
            className="zoho-form"
            dangerouslySetInnerHTML={{
              __html: `
              ${`<!-- Zoho CRM Form Embed -->`}
              <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' 
                style='background-color:white;color:#1e293b;width:100%;max-width:100%;font-family:Inter,Arial,sans-serif;'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <form id='webform2271888000001020071' action='https://crm.zoho.com/crm/WebToLeadForm' 
                  name='WebToLeads2271888000001020071' method='POST' 
                  onSubmit='javascript:document.charset="UTF-8"; return checkMandatory2271888000001020071()' accept-charset='UTF-8'>
                  
                  <input type='hidden' name='xnQsjsdp' value='8b52142ae0cf06b7d4058095d044e13b49f9cc1f8c1dc78a263915cd18d715ee'>
                  <input type='hidden' name='xmIwtLD' value='f141cef449221d23b2bd9aaafdafe90a5e3baa14f6530396bd832d664249305887f85c993b05631f5bee43ecbdf2659c'>
                  <input type='hidden' name='actionType' value='TGVhZHM='>
                  <input type='hidden' name='returnURL' value='null'>

                  <div class='zcwf_title' style='font-size:20px;font-weight:600;color:#1e293b;margin-bottom:20px;'>
                    Staffing Enquiry
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Company <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='text' name='Company' maxlength='200'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>First Name <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='text' name='First Name' maxlength='40'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Last Name <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='text' name='Last Name' maxlength='80'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Title <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='text' name='Designation' maxlength='100'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Email <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='email' name='Email' maxlength='100'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Country <span style='color:red;'>*</span></div>
                    <div class='zcwf_col_fld'><input type='text' name='Country' maxlength='100'></div>
                  </div>

                  <div class='zcwf_row'>
                    <div class='zcwf_col_lab'>Description</div>
                    <div class='zcwf_col_fld'><textarea name='Description'></textarea></div>
                  </div>

                  <div class='zcwf_row text-center mt-6'>
                    <input type='submit' class='formsubmit zcwf_button' 
                      style='background-color:#059669;color:white;font-weight:600;border:none;padding:10px 24px;border-radius:8px;cursor:pointer;' 
                      value='Submit'>
                    <input type='reset' class='zcwf_button' 
                      style='margin-left:10px;padding:10px 24px;border:1px solid #d1d5db;border-radius:8px;cursor:pointer;color:#374151;' 
                      value='Reset'>
                  </div>
                </form>
              </div>
              `,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default StaffingEnquiryPage;

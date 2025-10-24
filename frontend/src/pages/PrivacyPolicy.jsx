// PrivacyPolicy.jsx
import React from "react";
import { privacyPolicyData } from "../data/privacyContent.js";


import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea'



export default function PrivacyPolicy() {
  return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {privacyPolicyData.map((section, idx) => (
        <div key={idx} style={{ marginBottom: "30px" }}>
          <h2 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            {section.section}
          </h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {section.items.map((item, i) => (
              <li key={i} style={{ marginBottom: "15px" }}>
                <strong>{item.q}:</strong>
                <p style={{ margin: "5px 0" }}>{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
    </div>
    </section>
    
  </div>  
  );
}

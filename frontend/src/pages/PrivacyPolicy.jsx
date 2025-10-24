// PrivacyPolicy.jsx
import React from "react";
import { privacyPolicyData } from "../data/privacyContent.js";


//Added By
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
//

export default function PrivacyPolicy() {
  return (
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
  );
}

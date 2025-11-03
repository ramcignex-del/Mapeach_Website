import React from "react";
import "../App.css";

const DesignGuide = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="section-title mb-10">Mapeach Design System</h1>

      {/* ------------------ Colors ------------------ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🎨 Brand Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: "Primary", color: "#00A9D6" },
            { name: "Accent", color: "#00CFFF" },
            { name: "Dark Accent", color: "#007EA8" },
            { name: "Text Primary", color: "#1E293B" },
            { name: "Text Secondary", color: "#475569" },
          ].map(({ name, color }) => (
            <div key={name} className="text-center">
              <div
                className="w-full h-20 rounded-lg shadow-md mb-2"
                style={{ backgroundColor: color }}
              />
              <p className="font-semibold text-sm text-slate-700">{name}</p>
              <p className="text-xs text-slate-500">{color}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ Typography ------------------ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🧭 Typography</h2>
        <div className="space-y-6">
          <h1>Heading 1 – Poppins Bold (36px)</h1>
          <h2>Heading 2 – Poppins Semi-Bold (28px)</h2>
          <h3>Heading 3 – Poppins Medium (24px)</h3>
          <p>
            Paragraph – This is your default text style using{" "}
            <strong>Poppins Regular (16px)</strong>. The color tone is soft and
            easy on the eyes (<code>#475569</code>).
          </p>
        </div>
      </section>

      {/* ------------------ Buttons ------------------ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🔘 Buttons</h2>
        <div className="flex flex-wrap gap-6">
          <button className="btn">Primary Button</button>
          <button className="btn-outline">Outline Button</button>
          <button className="btn shadow-glow">Glowing Button</button>
        </div>
      </section>

      {/* ------------------ Cards ------------------ */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">💫 Card Example</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-[#00A9D6]">Standard Card</h3>
            <p>
              This is a sample card demonstrating rounded corners, subtle shadows,
              and hover lift effect — designed to complement the logo color.
            </p>
            <button className="btn mt-3">Learn More</button>
          </div>
          <div className="card hover-lift">
            <h3 className="text-lg font-semibold mb-2 text-[#00A9D6]">Hover Lift Card</h3>
            <p>
              Move your cursor here — it gently elevates to give depth and a modern
              glossy finish, consistent with the Mapeach aesthetic.
            </p>
            <button className="btn-outline mt-3">Explore</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignGuide;

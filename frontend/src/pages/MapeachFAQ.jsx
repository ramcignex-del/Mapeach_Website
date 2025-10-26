import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqCompanies } from "../data/faqCompanies";
import { faqContractors } from "../data/faqContractors";

export default function MapeachFAQ() {
  const [activeTab, setActiveTab] = useState("companies");
  const [openItem, setOpenItem] = useState(null);

  const faqData = { companies: faqCompanies, contractors: faqContractors };
  const currentFaqs = faqData[activeTab];

  const toggleItem = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <div className="font-inter bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600">
          Everything you need to know about working with or through <span className="text-emerald-600 font-semibold">Mapeach</span>.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => { setActiveTab("companies"); setOpenItem(null); }}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === "companies"
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
          }`}
        >
          For Companies
        </button>
        <button
          onClick={() => { setActiveTab("contractors"); setOpenItem(null); }}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === "contractors"
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
          }`}
        >
          For Contractors
        </button>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-5xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {currentFaqs.map((section, sectionIdx) => (
          <section
            key={sectionIdx}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-emerald-700 mb-5">
              {section.section}
            </h2>

            <div className="divide-y divide-slate-200">
              {section.items.map((item, itemIdx) => {
                const id = `${sectionIdx}-${itemIdx}`;
                const isOpen = openItem === id;

                return (
                  <div
                    key={id}
                    className="py-4 cursor-pointer select-none"
                    onClick={() => toggleItem(id)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900 text-base sm:text-lg">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="text-emerald-600 w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-slate-400 w-5 h-5" />
                      )}
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="text-slate-700 mt-3 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 mt-16 text-sm">
        <p>
          Need more info? Reach out at{" "}
          <a
            href="mailto:info@mapeach.com"
            className="text-emerald-600 font-medium hover:underline"
          >
            info@mapeach.com
          </a>
        </p>
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import { faqCompanies } from "../data/faqCompanies";
import { faqContractors } from "../data/faqContractors";

export default function MapeachFAQ() {
  const [activeTab, setActiveTab] = useState("companies");
  const [openItem, setOpenItem] = useState(null);

  const faqData = { companies: faqCompanies, contractors: faqContractors };

  const toggleItem = (id) => setOpenItem(openItem === id ? null : id);
  const currentFaqs = faqData[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 font-inter">
      <header className="bg-blue-700 text-white text-center py-8 rounded-3xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Mapeach — Frequently Asked Questions
        </h1>
        <p className="mt-3 text-blue-100 text-base sm:text-lg">
          Everything you need to know about working with or through Mapeach
        </p>
      </header>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => { setActiveTab("companies"); setOpenItem(null); }}
          className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "companies" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          For Companies
        </button>
        <button
          onClick={() => { setActiveTab("contractors"); setOpenItem(null); }}
          className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "contractors" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          For Contractors
        </button>
      </div>

      <div className="mt-12 space-y-10">
        {currentFaqs.map((section, sectionIdx) => (
          <section
            key={sectionIdx}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-5">
              {section.section}
            </h2>

            <div className="divide-y divide-gray-200">
              {section.items.map((item, itemIdx) => {
                const id = `${sectionIdx}-${itemIdx}`;
                const isOpen = openItem === id;

                return (
                  <div key={id} className="py-4 cursor-pointer select-none" onClick={() => toggleItem(id)}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 text-base sm:text-lg">{item.q}</span>
                      {isOpen ? <ChevronUp className="text-blue-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="text-gray-700 mt-3 leading-relaxed">{item.a}</p>
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

      <footer className="text-center text-gray-500 mt-16 text-sm">
        <p>
          Need more info? Reach out at{" "}
          <a href="mailto:info@mapeach.com" className="text-blue-600 hover:underline">
            info@mapeach.com
          </a>
        </p>
      </footer>
    </div>
  );
}

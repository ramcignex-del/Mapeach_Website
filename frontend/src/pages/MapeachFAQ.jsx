import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// 🧠 Content comes from two external files (easy to update)
import { faqCompanies } from "../data/faqCompanies";
import { faqContractors } from "../data/faqContractors";

export default function MapeachFAQ() {
  const [activeTab, setActiveTab] = useState("companies");
  const [openItem, setOpenItem] = useState(null);

  // combine both lists for cleaner reference
  const faqData = {
    companies: faqCompanies,
    contractors: faqContractors,
  };

  const toggleItem = (id) => setOpenItem(openItem === id ? null : id);
  const currentFaqs = faqData[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 font-inter">
      {/* Header */}
      <header className="bg-blue-700 text-white text-center py-8 rounded-3xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Mapeach — Frequently Asked Questions
        </h1>
        <p className="mt-3 text-blue-100 text-base sm:text-lg">
          Everything you need to know about working with or through Mapeach
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => {
            setActiveTab("companies");
            setOpenItem(null);
          }}
          className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
            activeTab === "companies"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"

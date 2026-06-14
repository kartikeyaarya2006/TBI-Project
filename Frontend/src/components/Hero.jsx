import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#1e1b4b] via-[#311042] to-[#111827] text-white py-24 px-6 text-center w-full border-b border-gray-800 shadow-inner">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-6">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wide text-indigo-300 uppercase">TBI-GEU Special Edition</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight leading-tight">
          Intelligent Feedback Analytics <br/><span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">for Homestays</span>
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Understand multi-platform customer reviews, discover key operational trends, and boost guest satisfaction automatically using AI insights.
        </p>
        <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-50 hover:scale-[1.02] transition-all text-sm tracking-wide">
          Explore Analytics Engine
        </button>
      </div>
    </div>
  );
}
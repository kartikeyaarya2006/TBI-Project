import React from 'react';

export default function Card({ title, description, platform, sentiment, rating }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[4px] w-0 bg-indigo-600 group-hover:w-full transition-all duration-300"></div>
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider bg-slate-50 text-slate-700 border border-slate-100 px-3 py-1.5 rounded-lg">
            {platform}
          </span>
          <span className={`text-xs font-bold tracking-wider px-3 py-1.5 rounded-lg ${
            sentiment === 'Positive' 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
              : 'bg-amber-50 text-amber-700 border border-amber-100'
          }`}>
            ● {sentiment}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-normal">{description}</p>
      </div>
      <div className="mt-8 pt-5 border-t border-gray-50 flex justify-between items-center text-xs">
        <span className="font-medium text-gray-400">Verified Rating: <strong className="text-gray-900 font-bold text-sm ml-1">{rating}</strong> / 5</span>
        <span className="text-indigo-600 font-bold cursor-pointer hover:text-indigo-800 transition-colors flex items-center gap-1">
          Analyze Sentences <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </div>
  );
}
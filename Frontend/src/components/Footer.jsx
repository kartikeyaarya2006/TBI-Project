import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm mt-auto w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-bold text-gray-200 tracking-wide">StaySense Hub Engine</p>
        <p className="text-xs text-gray-500">© 2026 StaySense Project Workspace. Developed for Skill Development Program TBI-GEU.</p>
      </div>
    </footer>
  );
}
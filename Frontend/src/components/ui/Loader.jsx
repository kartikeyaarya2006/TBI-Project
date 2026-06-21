import React from 'react';

/**
 * Reusable Centralized Sizing Loader Spinner Component for StaySense
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Layout dimension sizes allocation
 * @param {string} [props.className=''] - Additional inline utilities
 */
export default function Loader({ size = 'md', className = '' }) {
  const sizes = {
    sm: "h-5 w-5 stroke-[3]",
    md: "h-8 w-8 stroke-[2]",
    lg: "h-12 w-12 stroke-[2]"
  };

  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <svg 
        className={`animate-spin text-indigo-600 dark:text-indigo-400 ${sizes[size]}`} 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  );
}
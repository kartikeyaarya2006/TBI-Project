import React from 'react';

/**
 * Reusable Overlaid Modal Dialog Component for StaySense
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility state of the modal
 * @param {function} props.onClose - Callback function triggered to close the modal
 * @param {string} [props.title] - Optional structural heading text for the modal header
 * @param {React.ReactNode} props.children - Inside body content grid
 */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Backdrop blur shadow overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Box */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 max-w-lg w-full overflow-hidden transform transition-all z-10 p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
          {title && (
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
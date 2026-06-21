import React from 'react';

/**
 * Reusable Premium Input Component for StaySense
 * @param {Object} props
 * @param {string} props.label - Label text displayed above the input field
 * @param {string} [props.error] - Optional error message to display below the input
 * @param {string} [props.type='text'] - HTML input type (text, password, email, etc.)
 * @param {string} [props.placeholder] - Placeholder text inside the input
 * @param {string} [props.className=''] - Additional custom CSS classes for styling
 */
export default function Input({
  label,
  error,
  type = 'text',
  placeholder,
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 transition-all duration-200 text-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-indigo-400
          disabled:opacity-60 disabled:cursor-not-allowed ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs font-medium text-red-500 dark:text-red-400 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}
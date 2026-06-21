import React from 'react';

/**
 * Reusable Premium Button Component for StaySense
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content inside the button
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - HTML button type
 * @param {'primary' | 'secondary' | 'danger' | 'success'} [props.variant='primary'] - Design variants
 * @param {boolean} [props.isLoading=false] - Shows loading state
 * @param {function} [props.onClick] - Click handler
 * @param {string} [props.className=''] - Custom classes
 */
export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  isLoading = false,
  onClick,
  className = '',
  ...props
}) {
  const baseStyle = "px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
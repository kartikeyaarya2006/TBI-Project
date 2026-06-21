import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, Toast, Loader } from './components/ui';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  // 🌗 Robust Dark Mode DOM Synchronizer
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [darkMode]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (val.trim() === '') {
      setInputError('This structural text input boundary is required.');
    } else {
      setInputError('');
    }
  };

  const handleAsyncAction = () => {
    setIsBtnLoading(true);
    setToast({ message: 'Initializing analytical background worker tracking...', type: 'info' });
    
    setTimeout(() => {
      setIsBtnLoading(false);
      setToast({ message: 'Component systems sync sequence complete!', type: 'success' });
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 pb-12">
      
      {/* 🌐 Global Sticky Header/Navbar Layout */}
      <nav className="w-full h-20 px-8 flex items-center justify-between border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            S
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
            StaySense
          </span>
        </div>

        {/* Theme Engine Action Pipeline Controls */}
        <div className="flex items-center gap-4">
          <Button 
            variant="secondary" 
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full !p-2.5"
            title="Toggle Theme Engine Viewport Mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.05l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zm2.12-10.607a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"/></svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </Button>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900 dark:text-indigo-300">
            ID: TBI-26100212
          </div>
        </div>
      </nav>

      {/* 📊 Main Showcase Container */}
      <main className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900 dark:text-white">
          UI Component Showcase Arena
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm">
          Strict technical integration environment validating dynamic interfaces, JSDoc schemas, and responsive break-points.
        </p>

        {/* Interactive Grid Modules Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          
          {/* Card 1: Controls Form Showcase */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm space-y-5">
            <h2 className="text-lg font-bold border-b border-gray-100 dark:border-gray-800 pb-2 text-indigo-600 dark:text-indigo-400">
              Form Control Modules
            </h2>
            <Input 
              label="Feedback Scraper Target Identifier" 
              placeholder="e.g., Booking.com Property Key Link"
              value={inputValue}
              onChange={handleInputChange}
              error={inputError}
            />
            <div className="flex gap-3 flex-wrap pt-2">
              <Button onClick={handleAsyncAction} isLoading={isBtnLoading}>
                Trigger Async Loader
              </Button>
              <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                Launch Modal Dialog
              </Button>
            </div>
          </div>

          {/* Card 2: Spinners & Notifications Testing */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-gray-100 dark:border-gray-800 pb-2 text-indigo-600 dark:text-indigo-400 mb-4">
                Global State Indicator
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                The layout spinner module below renders live async processing feedback behaviors dynamically.
              </p>
              <div className="py-6 flex justify-center">
                <Loader size="lg" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="success" onClick={() => setToast({ message: 'Success metrics logged contextually!', type: 'success' })} className="w-full text-xs">
                Success Alert
              </Button>
              <Button variant="danger" onClick={() => setToast({ message: 'Operational heating exception thrown.', type: 'error' })} className="w-full text-xs">
                Danger Alert
              </Button>
            </div>
          </div>

        </div>
      </main>

      {/* 🪟 Interactive Modal Module */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="StaySense AI Processing Architecture"
      >
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            This viewport window processes raw string review data into predictive entity maps dynamically.
          </p>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-xs font-mono text-gray-500 dark:text-gray-400">
            [System Log Instance]: Pipeline matching active for 5 modular layouts.
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Acknowledge Log
            </Button>
          </div>
        </div>
      </Modal>

      {/* 🚨 Alert Notice Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}
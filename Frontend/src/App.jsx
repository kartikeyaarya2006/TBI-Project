import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Card from './components/Card';

const Dashboard = () => (
  <div className="max-w-7xl mx-auto px-6 py-16 flex-grow min-h-[65vh] w-full text-left">
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">StaySense Management Dashboard</h2>
      <p className="text-gray-500 leading-relaxed max-w-2xl">This workspace will hold active live analytics data pipelines from Google Business API and TripAdvisor scrapers.</p>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-7xl mx-auto px-6 py-16 flex-grow min-h-[65vh] w-full text-left">
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">About StaySense Engine</h2>
      <p className="text-gray-500 leading-relaxed max-w-2xl">An optimization software track developed to solve multi-platform review analysis manual overload issues for local property owners.</p>
    </div>
  </div>
);

const Login = () => (
  <div className="max-w-md mx-auto my-16 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-left">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
    <p className="text-sm text-gray-500 mb-6">Enter your credentials to access your dashboard.</p>
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Email Address</label>
        <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Password</label>
        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
      </div>
      <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm shadow-sm shadow-indigo-100">Sign In</button>
    </div>
  </div>
);

const Home = () => {
  const dataset = [
    { id: 1, title: "Immaculate Rooms, Deficient Hot Water", description: "The hosting arrangement was absolutely gorgeous and tidy. However, the operational heating unit failed consistently after 10 PM on cold nights.", platform: "Booking.com", sentiment: "Mixed", rating: "3.5" },
    { id: 2, title: "Phenomenal Scenic Location & Support", description: "Incredible mountain valley panorama windows and great local hospitality. StaySense platform identified our host praise notes seamlessly.", platform: "Google Reviews", sentiment: "Positive", rating: "5.0" }
  ];

  return (
    <div className="flex flex-col flex-grow w-full">
      <Hero />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-16 flex-grow w-full text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Guest Review Streams</h2>
            <p className="text-sm text-gray-500 mt-1">Real-time incoming multi-channel property logs.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg">Total Streams: 2</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {dataset.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8fafc] justify-between items-stretch">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
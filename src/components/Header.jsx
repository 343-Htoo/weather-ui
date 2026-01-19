import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ပင်မစာမျက်နှာ", active: true },
    { name: "နှိုင်းယှဉ်ချက်", active: false },
    { name: "လေထုအရည်အသွေး", active: false },
    { name: "မြေပုံ", active: false },
  ];

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav className="bg-white border-b border-gray-100 py-3 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50">
        
        <div className="flex items-center space-x-2 md:space-x-8">
          {/* Mobile Menu Button - Mobile မှာပဲ ပေါ်မယ် */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-1 text-slate-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <span className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter">
            Sky<span className="text-slate-900">Weather</span>
          </span>

          {/* Desktop Menu - Tablet/Desktop မှာပဲ ပေါ်မယ် */}
          <div className="hidden md:flex space-x-6 text-sm text-gray-500 font-bold">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                className={`${link.active ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'} pb-1 transition-all`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Icons & Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="hidden sm:block border border-blue-100 px-4 py-1.5 rounded-xl text-[11px] md:text-xs font-bold text-blue-600 hover:bg-blue-50 transition">
            အကောင့်ဝင်ရန်
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar (Drawer) --- */}
      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-blue-600">SkyWeather</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                className={`text-left text-sm font-bold py-2 ${link.active ? 'text-blue-600' : 'text-gray-600'}`}
              >
                {link.name}
              </button>
            ))}
            <hr className="border-gray-50" />
            <button className="text-left text-sm font-bold text-blue-600 py-2">အကောင့်ဝင်ရန်</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
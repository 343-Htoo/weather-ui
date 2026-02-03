
import React, { useEffect, useState } from 'react';

const Header = () => {
  const navLinks = [
    { name: "ပင်မစာမျက်နှာ", active: true },
    { name: "နှိုင်းယှဉ်ချက်", active: false },
    { name: "လေထုအရည်အသွေး", active: false },
    { name: "မြေပုံ", active: false },
  ];
  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 transition-all text-[14px] duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center min-h-[40px] lg:h-[50px] transition-all duration-300">
          
          {/* --- ၁။ Logo & Search Section --- */}
          {/* Mobile မှာ Scroll ဆွဲရင် အမြင့် 0 နဲ့ ပျောက်မယ်၊ Web မှာတော့ Nav နဲ့ တစ်တန်းတည်း အမြဲပေါ်နေမယ် */}
          <div className={`
            flex items-center justify-between transition-all duration-300 ease-in-out overflow-hidden shrink-0
            ${isVisible ? 'h-[50px] opacity-100 lg:mt-0' : 'h-0 opacity-0 lg:h-auto lg:opacity-100'}
          `}>
            <div className="flex items-center gap-3">
              <div className="flex items-baseline p-3 cursor-pointer shrink-0">
                <span className="text-2xl font-black text-black tracking-tighter">N</span>
                <span className="text-xl font-bold text-black ml-1">Skyblue</span>
              </div>
              
              <div className="hidden sm:flex lg:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
                 <span className="text-gray-400 text-[10px] font-bold">#</span>
                 <span className="text-gray-600 text-[10px] font-bold">log</span>
                 <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              </div>
            </div>

            {/* Mobile Search Icon (Web မှာ ဖျောက်ထားမယ်) */}
            <button className=" lg:hidden">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* --- ၂။ Navigation & Web Right Section --- */}
          <div className="flex flex-grow items-center justify-between h-[40px] lg:h-full lg:ml-10">
            <nav className="flex items-center space-x-6 overflow-x-auto no-scrollbar  h-full">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  className={`relative whitespace-nowrap text-[12px] lg:text-[16px] p-3 font-bold transition-all flex-shrink-0 h-full ${
                    link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="flex items-center h-full">{link.name}</span>
                  {link.active && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Web Only Right Section (Login & Menu) */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
               <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">&</button>
               <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                  ))}
               </div>
               <button className="p-1">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
               </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;


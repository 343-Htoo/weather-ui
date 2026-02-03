
import React, { useState } from 'react';
import LocationToolbar from './LocationToolbar';

const TemperatureToggleCard = () => {
  const [activeDay, setActiveDay] = useState('today');

  const toggleDay = () => {
    setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
  };

  return (
    <div>
      <LocationToolbar/>
      <div className="bg-white p-5 md:p-8  overflow-hidden relative transition-all duration-700 ease-in-out">   
      
      {/* Header Labels */}
      <div className=" flex justify-between items-center px-2">
        <span className={`px-3 py-1 md:ml-35 rounded-full text-[10px] font-bold border transition-all duration-500 ${
          activeDay === 'today' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
        }`}>
          လက်ရှိ 01.17
        </span>
        
        <span className={`px-3 py-1 rounded-full md:mr-40 text-[10px] font-bold border transition-all duration-500 ${
          activeDay === 'tomorrow' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
        }`}>
          မနက်ဖြန် 01.18
        </span>
      </div>

      <div className="flex items-center relative h-32 md:h-40">
        
        {/* --- Today Section --- */}
        <div 
          onClick={() => activeDay === 'tomorrow' && toggleDay()}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center cursor-pointer ${
            activeDay === 'today' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale md:grayscale-0 md:opacity-100'
          }`}
        >
          <div className="flex items-center">
            <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
              activeDay === 'today' ? 'text-6xl md:text-7xl md:ml-30' : 'text-2xl md:text-8xl'
            }`}>2.4°</span>
            <span className={`ml-2 transition-all duration-700 ${
              activeDay === 'today' ? 'text-4xl md:text-6xl' : 'text-xl md:text-6xl'
            }`}>☀️</span>
          </div>
          <div className={`mt-2 transition-all duration-700 ${
            activeDay === 'today' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
          }`}>
            <p className="text-sm md:text-lg md:ml-30 font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
            <p className="text-[10px] md:text-xs md:ml-30 text-skyblue-400 italic mt-1"> -5° / 2°</p>
          </div>
        </div>

        {/* --- Central Divider & Button --- */}
        {/* Mobile မှာ 80/20 ရွေ့မည်၊ Desktop (md) မှာ 50% မှာ အမြဲတမ်း ငြိမ်နေမည် */}
        <div 
          className="absolute top-0 bottom-0 z-20 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:left-1/2"
          style={{ 
            left: typeof window !== 'undefined' && window.innerWidth < 768 
                  ? (activeDay === 'today' ? '65%' : '35%') 
                  : '' 
          }}
        > 
         
          <div className="h-full border-l border-gray-300"></div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); toggleDay(); }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-xl rounded-full p-2.5 active:scale-90 transition-all duration-500 hover:border-slate-300 md:hidden"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-2 w-2 text-slate-600 transition-transform duration-700 ${
                activeDay === 'tomorrow' ? 'rotate-180' : ''
              }`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* --- Tomorrow Section --- */}
        <div 
          onClick={() => activeDay === 'today' && toggleDay()}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center items-end text-right cursor-pointer ${
            activeDay === 'tomorrow' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale md:grayscale-0 md:opacity-100'
          }`}
        >
          <div className="flex items-center md:mr-30">
             <span className={`transition-all duration-700 ${
              activeDay === 'tomorrow' ? 'text-3xl md:text-5xl md:mr-30 ' : 'text-lg md:text-5xl  mr-0'
            }`}>☀️</span>
            <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
              activeDay === 'tomorrow' ? 'text-5xl md:text-7xl md:mr-25' : 'text-xl md:text-7xl'
            }`}>-4°/4°</span>
          </div>
          <div className={`mt-2 transition-all duration-700 ${
            activeDay === 'tomorrow' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
          }`}>
            <p className="text-sm mr-4 md:text-lg md:mr-40 font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
            <p className="text-[10px] mr-4 md:text-xs md:mr-40 text-blue-500 font-bold mt-2">☔ 10% / 30%</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default TemperatureToggleCard;


import React from 'react';

const SunriseSunset = () => {
  const data = {
    today: "01.18",
    sunrise: "07:46",
    sunset: "17:42",
    tomorrow: { date: "01.19", sunrise: "07:46", sunset: "17:43" },
    afterTomorrow: { date: "01.20", sunrise: "07:45", sunset: "17:44" }
  };

  return (
    <div className="max-w-md mx-auto md:ml-5 p-4 md:p-6 bg-white font-sans">
      {/* Title - Smaller font */}
      <h2 className="text-base font-bold mb-4 text-slate-800">Sunrise & Sunset</h2>

      {/* Main Visual Arc */}
      <div className="relative flex flex-col items-center mb-6">
        <p className="text-[11px] font-bold text-slate-500 mb-2">Today {data.today}</p>
        
        {/* Adjusted Arc size for Mobile */}
        <div className="relative w-full max-w-[240px] aspect-[2/1] flex justify-center items-end overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 280 140">
            <path 
              d="M 20 130 A 120 120 0 0 1 260 130" 
              fill="none" 
              stroke="#F1F5F9" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
            {/* Sun Indicator */}
            <circle cx="80" cy="50" r="8" fill="#FBBF24" />
          </svg>

          {/* Times */}
          <div className="w-full flex justify-between px-2 z-10 translate-y-1">
            <div className="text-left">
              <span className="text-[9px] font-bold text-slate-400 block uppercase">Sunrise</span>
              <p className="text-lg font-black text-slate-800 leading-tight">{data.sunrise}</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-slate-400 block uppercase">Sunset</span>
              <p className="text-lg font-black text-slate-800 leading-tight">{data.sunset}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-nowrap gap-2 overflow-x-auto no-scrollbar snap-x">
        {[
          { label: 'Tomorrow', date: data.tomorrow.date, rise: data.tomorrow.sunrise, set: data.tomorrow.sunset },
          { label: 'Day After', date: data.afterTomorrow.date, rise: data.afterTomorrow.sunrise, set: data.afterTomorrow.sunset }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="bg-slate-50 p-2 min-w-[100px] flex-1 rounded-1 snap-center border border-slate-100/50"
          >
            <p className="text-[9px] font-bold text-slate-400 mb-2 uppercase">
              {item.label} {item.date}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                 <span className="text-xs font-bold text-slate-700">{item.rise}</span>
              </div>
              <div className="flex items-center gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-orange-400/70" />
                 <span className="text-xs font-bold text-slate-700">{item.set}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <p className="mt-4 text-[8px] text-slate-300 font-medium text-center italic">
        WeatherEye Update: 2026.01.01
      </p>
    </div>
  );
};

export default SunriseSunset;


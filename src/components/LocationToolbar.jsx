import React from 'react';

const LocationToolbar = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Alert Bar (သတိပေးချက်ဘား) */}
      <div className="bg-[#f0f3ff] w-full px-4 py-2 flex items-center justify-between cursor-pointer group">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </span>
          <span className="text-[10px] font-bold text-slate-700 group-hover:underline">
            အအေးပိုသတိပေးချက် (Cold Wave Advisory)
          </span>
        </div>
        <span className="text-slate-400 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </div>

      {/* 2. Controls Row (ရွေးချယ်မှုအပိုင်း) */}
      <div className="px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {/* Source Selector */}
          <button className="flex items-center gap-1.5 bg-[#003da5] text-white px-3 py-1.5 rounded-full text-xs font-bold">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#003da5] text-[10px]">●</span>
            </span>
            မိုးလေဝသဌာန
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <span className="h-4 w-[1px] bg-slate-200"></span>

          {/* Region Setting */}
          <button className="flex items-center gap-1 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50">
            <span className="text-slate-300">★</span>
            ဒေသသတ်မှတ်ရန်
          </button>
        </div>

        {/* 3. Location & CCTV (တည်နေရာနှင့် CCTV) */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-300 text-lg">★</span>
            <h2 className="text-sm md:text-2xl font-black text-slate-800">
              ဘူဖြောင်းဂူ
            </h2>
            <button className="text-slate-400 hover:text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* CCTV Thumbnail */}
          <div className="relative w-16 h-10 md:w-20 md:h-12 bg-slate-800 rounded-lg overflow-hidden border border-slate-200 group cursor-pointer shadow-sm">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
             <img src="https://via.placeholder.com/80x48" alt="CCTV" className="w-full h-full object-cover" />
             <div className="absolute bottom-0 right-0 bg-black/60 px-1 py-0.5 rounded-tl-md">
                <span className="text-[8px] font-bold text-white uppercase">CCTV</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationToolbar;
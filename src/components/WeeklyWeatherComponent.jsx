

import React, { useRef } from 'react';

// --- CSS Icons Components (Mobile အတွက် Size ပြန်ညှိထားသည်) ---
const StatusFace = ({ type, colorClass }) => {
  const isHappy = type === 'happy';
  const isSad = type === 'sad';
  return (
    // Mobile မှာ w-8 h-8 အထိ သေးလိုက်ပါပြီ
    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-[1.5px] border-current flex flex-col items-center justify-center ${colorClass} bg-white shadow-sm shrink-0`}>
      <div className="flex space-x-1 mb-0.5">
        <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-current rounded-full"></div>
        <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-current rounded-full"></div>
      </div>
      {isHappy && <div className="w-3 h-1.5 md:w-4 md:h-2 border-b-[1.5px] border-current rounded-full"></div>}
      {isSad && <div className="w-3 h-1.5 md:w-4 md:h-2 border-t-[1.5px] border-current rounded-full mt-0.5"></div>}
      {!isHappy && !isSad && <div className="w-3 h-[1px] bg-current rounded-full"></div>}
    </div>
  );
};

const WeeklyWeatherComponent = () => {
  const scrollRef = useRef(null);

  const healthIndexes = [
    { label: 'ခရမ်းလွန်', status: 'နိမ့်', color: 'text-blue-400', face: 'happy' },
    { label: 'လေထု', status: 'အလွန်မြင့်', color: 'text-red-500', face: 'sad' },
    { label: 'တုပ်ကွေး', status: 'မြင့်', color: 'text-orange-400', face: 'neutral' },
    { label: 'အစားအစာ', status: 'သတိပြု', color: 'text-blue-300', face: 'happy' },
    { label: 'ပန်းနာရင်ကျပ်', status: 'သတိပေး', color: 'text-orange-400', face: 'neutral' },
    { label: 'အသားအရေ', status: 'ကောင်း', color: 'text-green-400', face: 'happy' },
    { label: 'နှလုံး', status: 'သတိပြု', color: 'text-yellow-500', face: 'neutral' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 120; 
      const scrollTo = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-2 space-y-4">
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- Health Index Section (Compact) --- */}
      <div className="bg-white rounded-[1.2rem] p-3 md:p-6  relative group overflow-hidden">
        <h3 className="text-[13px] md:text-lg font-bold mb-4 text-slate-800 ml-1">လူနေမှုဘဝ အညွှန်းကိန်း</h3>
        
        {/* Left Arrow (sm) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-1 top-[60%] -translate-y-1/2 z-20 bg-white/95 border border-slate-200 shadow-sm rounded-full p-1 md:p-2 active:scale-90 transition-all"
        >
          <svg className="w-2.5 h-2.5 md:w-4 md:h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scroll Container (Compact) */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar pb-1"
        >
          <div className="flex flex-nowrap items-start space-x-3 md:space-x-10 min-w-max px-4">
            {healthIndexes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2 w-14 md:w-28 shrink-0">
                <StatusFace type={item.face} colorClass={item.color} />
                <div className="text-center w-full">
                  <p className={`text-[9px] md:text-xs font-black ${item.color} leading-none truncate uppercase`}>
                    {item.status}
                  </p>
                  <p className="text-[9px] md:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight line-clamp-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow (sm) */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-1 top-[60%] -translate-y-1/2 z-20 bg-white/95 border border-slate-200 shadow-sm rounded-full p-1 md:p-2 active:scale-90 transition-all"
        >
          <svg className="w-2.5 h-2.5 md:w-4 md:h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default WeeklyWeatherComponent;
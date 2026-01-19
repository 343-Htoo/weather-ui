import React, { useRef } from 'react';

// --- Pure CSS Icons ---
const SunIcon = () => (
  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
    <div className="w-3 h-3 bg-yellow-400 rounded-full z-10 shadow-sm"></div>
    {[...Array(8)].map((_, i) => (
      <div key={i} className="absolute w-0.5 h-5 bg-yellow-400/60 rounded-full" style={{ transform: `rotate(${i * 45}deg)` }}></div>
    ))}
  </div>
);

const CloudIcon = () => (
  <div className="relative w-6 h-4 bg-slate-100 rounded-full shrink-0">
    <div className="absolute -top-1.5 left-0.5 w-3.5 h-3.5 bg-slate-100 rounded-full"></div>
    <div className="absolute -top-1 right-0.5 w-2.5 h-2.5 bg-slate-100 rounded-full"></div>
  </div>
);

const StatusFace = ({ type, colorClass }) => (
  <div className={`w-8 h-8 rounded-full border-[1.5px] border-current flex flex-col items-center justify-center ${colorClass} bg-white shrink-0`}>
    <div className="flex space-x-1 mb-0.5">
      <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
      <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
    </div>
    <div className={`w-3 h-1.5 border-current rounded-full ${type === 'happy' ? 'border-b-[1.5px]' : type === 'sad' ? 'border-t-[1.5px] mt-0.5' : 'h-[1px] bg-current'}`}></div>
  </div>
);

const WeatherDashboard = () => {
  const healthScrollRef = useRef(null);

  // Weekly Data (English)
  const weeklyData = [
    { day: 'Mon', date: '01.19', morning: <CloudIcon />, evening: <SunIcon />, low: -3, high: -2, mRain: '40%', eRain: '20%' },
    { day: 'Tue', date: '01.20', morning: <SunIcon />, evening: <SunIcon />, low: -13, high: -3, mRain: '20%', eRain: '10%' },
    { day: 'Wed', date: '01.21', morning: <SunIcon />, evening: <SunIcon />, low: -11, high: -5, mRain: '0%', eRain: '0%' },
    { day: 'Thu', date: '01.22', morning: <SunIcon />, evening: <SunIcon />, low: -12, high: -5, mRain: '10%', eRain: '10%' },
    { day: 'Fri', date: '01.23', morning: <SunIcon />, evening: <CloudIcon />, low: -10, high: -2, mRain: '10%', eRain: '20%' },
  ];

  // Calendar Days (English)
  const calendarDays = Array.from({ length: 21 }, (_, i) => ({
    date: i + 1,
    icon: i % 4 === 0 ? <CloudIcon /> : <SunIcon />,
    high: i % 2 === 0 ? 4 : -2,
    low: i % 2 === 0 ? -3 : -8,
    rain: i % 5 === 0 ? '1mm' : '-',
  }));

  const scrollHealth = (dir) => {
    if (healthScrollRef.current) {
      healthScrollRef.current.scrollBy({ left: dir === 'left' ? -150 : 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 font-sans min-h-screen text-slate-800">
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

      {/* --- Section 1: Weekly Forecast Chart --- */}
      <div className="  overflow-x-auto no-scrollbar">
        <h3 className="text-lg font-bold mb-8">Weekly Forecast</h3>
        <div className="flex justify-between min-w-[200px]">
          {weeklyData.map((d, i) => (
            <div key={`weekly-${i}`} className="flex flex-col items-center flex-1">
              <span className="text-sm font-bold">{d.day}</span>
              <span className="text-[10px] text-slate-300 mb-4">{d.date}</span>
              <div className="flex flex-col items-center space-y-6 mb-8">
                <div className="flex flex-col items-center h-10 justify-center">{d.morning}<span className="text-[9px] text-blue-400 font-bold mt-1">{d.mRain}</span></div>
                <div className="flex flex-col items-center h-10 justify-center">{d.evening}<span className="text-[9px] text-blue-400 font-bold mt-1">{d.eRain}</span></div>
              </div>
              <div className="relative w-full flex flex-col items-center py-4 border-t border-slate-50">
                <span className="text-blue-500 font-black text-xs italic">{d.low}°</span>
                <div className="h-12 w-[1.5px] bg-slate-100 my-2 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-red-500 font-black text-xs italic">{d.high}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>

                              <div className="border-b border-black-100/50 py-5"></div>


      {/* --- Section 2: Calendar --- */}
      <div className="p-၃ border-slate-100 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-2 mb-6">
            <span className="font-bold text-lg">2026</span>
            <span className="text-slate-400 text-lg">01</span>
        </div>
        <div className="grid grid-cols-7 gap-y-10 min-w-[100px]">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
            <span key={`header-${i}`} className={`text-center text-[10px] font-bold ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-slate-400'}`}>{day}</span>
          ))}
          {calendarDays.map((d, i) => (
            <div key={`cal-${i}`} className="flex flex-col items-center space-y-1 py-2">
              <span className={`text-sm font-bold ${i % 7 === 0 ? 'text-red-500' : i % 7 === 6 ? 'text-blue-500' : 'text-slate-800'}`}>{d.date}</span>
              <div className="h-6 flex items-center">{d.icon}</div>
              <div className="flex flex-col items-center leading-tight">
                <span className="text-red-500 text-[11px] font-bold">{d.high}°</span>
                <span className="text-blue-500 text-[11px] font-bold">{d.low}°</span>
              </div>
              <span className="text-blue-300 text-[9px] font-bold">{d.rain}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Section 3: Health Index --- */}
      {/* <div className=" p-1 relative group overflow-hidden">
        <h3 className="text-sm font-bold mb-6 ml-2">Life & Health Index</h3>
        <button onClick={() => scrollHealth('left')} className="absolute left-2 top-[60%] z-10 bg-white/90 shadow-md rounded-full p-1.5 border border-slate-100 hover:bg-slate-50 transition-all">
            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div ref={healthScrollRef} className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-10 min-w-max">
            {[
                { l: 'UV Index', s: 'Low', c: 'text-blue-400', f: 'happy' },
                { l: 'Fine Dust', s: 'High', c: 'text-red-500', f: 'sad' },
                { l: 'Flu', s: 'Caution', c: 'text-orange-400', f: 'neutral' },
                { l: 'Food Poison', s: 'Good', c: 'text-blue-300', f: 'happy' },
                { l: 'Asthma', s: 'Warning', c: 'text-orange-400', f: 'neutral' },
                { l: 'Heart', s: 'Good', c: 'text-green-500', f: 'happy' },
                { l: 'Skin Care', s: 'Caution', c: 'text-yellow-500', f: 'neutral' }
            ].map((item, idx) => (
              <div key={`health-${idx}`} className="flex flex-col items-center w-5 space-y-2 transition-transform hover:scale-105">
                <StatusFace type={item.f} colorClass={item.c} />
                <div className="text-center">
                  <p className={`text-[9px] font-black ${item.c} uppercase`}>{item.s}</p>
                  <p className="text-[9px] text-slate-400 font-bold mt-0.5">{item.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => scrollHealth('right')} className="absolute right-2 top-[60%] z-10 bg-white/90 shadow-md rounded-full p-1.5 border border-slate-100 hover:bg-slate-50 transition-all">
            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div> */}
    </div>
  );
};

export default WeatherDashboard;
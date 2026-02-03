
import React, { useRef } from 'react';

// --- Circular Progress Border Component ---
const StatusFaceCircular = ({ type, colorClass, percentage = 65 }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100" />
        <circle
          cx="50" cy="50" r={radius} fill="transparent" stroke="currentColor" strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${colorClass} transition-all duration-500`}
        />
      </svg>
      <div className={`text-xl md:text-2xl ${colorClass}`}>
        {type === 'happy' ? '😊' : type === 'neutral' ? '😐' : '🙁'}
      </div>
    </div>
  );
};

const WeatherDashboard = () => {
  const healthScrollRef = useRef(null);

  const healthIndexes = [
    { l: '자외선지수', s: '낮음', c: 'text-blue-500', f: 'happy', p: 40 },
    { l: '대기정체지수', s: '보통', c: 'text-green-500', f: 'neutral', p: 60 },
    { l: '감기지수', s: '높음', c: 'text-orange-500', f: 'neutral', p: 85 },
    { l: '식중독지수', s: '안전', c: 'text-blue-400', f: 'happy', p: 30 },
    { l: '천식지수', s: '주의', c: 'text-yellow-500', f: 'neutral', p: 55 },
  ];

  const calendarDays = Array.from({ length: 14 }, (_, i) => ({
    date: i + 28 > 31 ? i - 3 : i + 28,
    isPrev: i < 4,
    high: 7 - (i % 3),
    low: -1 - (i % 2),
    rain: i % 3 === 0 ? '1mm' : '-'
  }));

  return (
    <div className="max-w-4xl md:ml-8 mx-auto p-4 space-y-10 font-sans min-h-screen bg-white text-slate-800">
      {/* <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style> */}

        {/* Custom Dropdown UI */}
        <div className="flex border border-slate-200 rounded-md overflow-hidden">
          <div className="flex-1 flex items-center justify-center py-2.5 bg-white border-r border-slate-200 cursor-pointer">
            <span className="font-bold text-sm mr-2">2026년</span>
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth={3}/></svg>
          </div>
          <div className="flex-1 flex items-center justify-center py-2.5 bg-white cursor-pointer">
            <span className="font-bold text-sm mr-2">01월</span>
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth={3}/></svg>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 border-t border-slate-100">
          {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
            <span key={i} className={`text-center py-4 text-xs font-bold ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-slate-400'}`}>{day}</span>
          ))}
          
          {calendarDays.map((d, i) => (
            <div key={i} className="flex flex-col items-center py-5 border-t border-slate-50 space-y-2">
              <span className={`text-sm font-bold ${d.isPrev ? 'text-slate-300' : (i % 7 === 0 ? 'text-red-500' : i % 7 === 6 ? 'text-blue-600' : 'text-slate-800')}`}>{d.date}</span>
              <span className="text-xl">🌧️</span>
              <div className="flex flex-col items-center leading-none">
                <span className="text-red-500 mt-2 text-[15px] font-bold">{d.high}°</span>
                <span className="text-blue-600 mt-2 text-[15px] font-bold">{d.low}°</span>
              </div>
              <span className="text-blue-300 text-[13px] font-medium">{d.rain}</span>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default WeatherDashboard;

import React, { useState, useRef } from 'react';

const WeeklyForecast = () => {
    const weeklyData = [
        { day: 'ယနေ့', date: '၁.၁၉.', morningIcon: '☁️', eveningIcon: '⛅', low: '-၄', high: '-၂', morningRain: '40%', eveningRain: '20%' },
        { day: 'မနက်ဖြန်', date: '၁.၂၀.', morningIcon: '⛅', eveningIcon: '☀️', low: '-၁', high: '-၄', morningRain: '20%', eveningRain: '0%' },
        { day: 'ဗုဒ္ဓဟူး', date: '၁.၂၁.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၃', high: '-၆', morningRain: '0%', eveningRain: '10%' },
        { day: 'ကြာသပတေး', date: '၁.၂၂.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၁', high: '-၄', morningRain: '0%', eveningRain: '0%' },
        { day: 'သောကြာ', date: '၁.၂၃.', morningIcon: '☀️', eveningIcon: '⛅', low: '-၁', high: '-၁', morningRain: '10%', eveningRain: '20%' },
        { day: 'စနေ', date: '၁.၂၄.', morningIcon: '⛅', eveningIcon: '⛅', low: '-၉', high: '-၂', morningRain: '20%', eveningRain: '20%' },
        { day: 'တနင်္ဂနွေ', date: '၁.၂၅.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၉', high: '-၃', morningRain: '10%', eveningRain: '10%', isSunday: true },
        { day: 'တနင်္လာ', date: '၁.၂၆.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၈', high: '-၂', morningRain: '20%', eveningRain: '20%' },
        { day: 'အင်္ဂါ', date: '၁.၂၂.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၂', high: '-၄', morningRain: '0%', eveningRain: '0%' },
        { day: 'ဗုဒ္ဓဟူး', date: '၁.၂၃.', morningIcon: '☀️', eveningIcon: '⛅', low: '-၂', high: '-၁', morningRain: '10%', eveningRain: '20%' },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-[750px] mx-auto bg-white p-4 font-sans text-[#333]">

            {/* --- WEB VIEW --- */}
            <div className="hidden sm:block relative">
                  <h3 className="text-[17px] font-bold text-slate-900 mb-3">အပတ်စဉ်ခန့်မှန်းချက်</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {weeklyData.slice(0, 2).map((data, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-[#00000076] rounded-[12px] shadow-sm  bg-white">
                            <div className="flex flex-col">
                                <span className="text-[15px] font-bold leading-tight">{data.day}</span>
                                <span className="text-[12px] text-gray-400">{data.date}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right flex flex-col items-end">
                                    <p className="text-[11px] font-bold text-[#4a89f3] mb-1">{data.morningRain}</p>
                                    <span className="text-2xl">{data.morningIcon}</span>
                                </div>
                                <div className="text-left flex flex-col items-start">
                                    <span className="text-2xl">{data.eveningIcon}</span>
                                    <p className={`text-[11px] font-bold mt-1 ${data.eveningRain === '0%' ? 'text-gray-200' : 'text-[#4a89f3]'}`}>{data.eveningRain}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[15px] text-gray-400 mb-1">အနိမ့် / အမြင့်</p>
                                <p className="font-bold text-[16px]">
                                    <span className="text-[#4a89f3]">{data.low}°</span> <span className="text-gray-200 mx-0.5 font-normal">/</span> <span className="text-[#f14343]">{data.high}°</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="group relative">
                    <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all text-gray-400">❮</button>

                    <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-0 border-t border-[#f8f8f8] pt-6 pb-2">
                        {weeklyData.slice(2).map((data, idx) => (
                            <div key={idx} className="min-w-[125px] flex flex-col items-center border-r border-gray-50 last:border-0 px-2">
                                <span className={`text-[15px] font-bold ${data.isSunday ? 'text-[#f14343]' : 'text-slate-800'}`}>{data.day}</span>
                                <span className="text-[12px] text-gray-400 mb-4">{data.date}</span>
                                <div className="flex flex-row gap-3 mb-4">
                                    <span className="text-2xl">{data.morningIcon}</span>
                                    <span className="text-2xl">{data.eveningIcon}</span>
                                </div>
                                <div className="text-[14px] font-bold mb-1">
                                    <span className="text-[#4a89f3]">{data.low}°</span> <span className="text-gray-100 font-normal">/</span> <span className="text-[#f14343]">{data.high}°</span>
                                </div>
                                <div className="flex gap-2 text-[11px] font-bold mt-1">
                                    <span className={data.morningRain === '0%' ? 'text-gray-100' : 'text-[#4a89f3]'}>{data.morningRain}</span>
                                    <span className={data.eveningRain === '0%' ? 'text-gray-100' : 'text-[#4a89f3]'}>{data.eveningRain}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all text-gray-400">❯</button>
                </div>
            </div>

            {/* --- MOBILE VIEW (Toggle Logic ပါဝင်သည်) --- */}
            <div className="sm:hidden flex flex-col overflow-x-auto scrollbar-hide divide-y divide-[#f8f8f8]  border-t border-[#f8f8f8]">
                {(isExpanded ? weeklyData : weeklyData.slice(0, 5)).map((data, idx) => (
                    <div key={idx} className="flex items-center justify-between py-4 px-2 animate-fadeIn border">
                        <div className="w-16">
                            <p className={`text-[10px] font-bold ${data.isSunday ? 'text-[#f14343]' : 'text-slate-800'}`}>{data.day}</p>
                            <p className="text-[8px] text-gray-400 leading-none">{data.date}</p>
                        </div>
                        <div className="flex flex-1 justify-center items-center gap-3">
                            <div className="flex items-center gap-1 min-w-[65px] justify-end">
                                <span className={`text-[11px] font-bold ${data.morningRain === '0%' ? 'text-gray-100' : 'text-[#4a89f3]'}`}>{data.morningRain}</span>
                                <span className="text-xl">{data.morningIcon}</span>
                            </div>
                            <div className="flex items-center gap-2 min-w-[65px]">
                                <span className="text-xl">{data.eveningIcon}</span>
                                <span className={`text-[11px] font-bold ${data.eveningRain === '0%' ? 'text-gray-100' : 'text-[#4a89f3]'}`}>{data.eveningRain}</span>
                            </div>
                        </div>
                        <div className="w-20 text-right font-bold text-[15px]">
                            <span className="text-[#4a89f3]">{data.low}°</span> <span className="text-gray-100 font-normal">/</span> <span className="text-[#f14343]">{data.high}°</span>
                        </div>
                    </div>
                ))}

                {/* ပိုကြည့်ရန် / ပြန်ပိတ်ရန် Toggle Button */}
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full py-4 text-[13px] text-gray-500 flex items-center justify-center gap-1 bg-white active:bg-gray-50 transition-colors"
                >
                    {isExpanded ? 'ပြန်ပိတ်ရန်' : 'ပိုကြည့်ရန်'} 
                    <span className={`text-[10px] opacity-40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </button>
            </div>

            {/* Footer Text */}
            <div className="mt-4 pt-4 border-[#f8f8f8] hidden sm:block text-[15px] text-gray-400 leading-relaxed">
                မိုးလေဝသခန့်မှန်းချက်များကို အချိန်နှင့်တပြေးညီ ပြောင်းလဲနိုင်ပါသည်။ အသေးစိတ်ကို ဆက်လက်ကြည့်ရှုရန်...
                <button className="text-[#4a89f3] font-bold ml-1 hover:underline">ပိုမိုသိရှိရန် ❯</button>
            </div>
        </div>
    );
};

export default WeeklyForecast;
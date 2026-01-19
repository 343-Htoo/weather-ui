// import React, { useState } from 'react';

// const WeeklyForecast = () => {
//     const [activeDay, setActiveDay] = useState('today');

//     const toggleDay = () => {
//         setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
//     };

//     const weeklyData = [
//         { day: 'တနင်္လာ', date: '၁.၁၉.', icon: '☁️', icon2: '☀️', low: '-၃°', high: '-၂°', rain: '၄၀%', rain2: '၂၀%' },
//         { day: 'အင်္ဂါ', date: '၁.၂၀.', icon: '⛅', icon2: '☀️', low: '-၁၃°', high: '-၃°', rain: '၂၀%', rain2: '၁၀%' },
//         { day: 'ဗုဒ္ဓဟူး', date: '၁.၂၁.', icon: '☀️', icon2: '☀️', low: '-၁၁°', high: '-၅°', rain: '၀%', rain2: '၀%' },
//         { day: 'ကြာသပတေး', date: '၁.၂၂.', icon: '☀️', icon2: '☀️', low: '-၁၂°', high: '-၅°', rain: '၁၀%', rain2: '၁၀%' },
//         { day: 'သောကြာ', date: '၁.၂၃.', icon: '☀️', icon2: '⛅', low: '-၁၀°', high: '-၂°', rain: '၁၀%', rain2: '၂၀%' },
//     ];

//     return (
//         <div className="bg-white rounded-[2rem] p-5 md:p-8 border border-slate-100 shadow-sm mt-6">
//             <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
//                 အပတ်စဉ်ခန့်မှန်းချက် <span className="ml-2 text-slate-300 text-sm">ⓘ</span>
//             </h3>

//             {/* --- အပေါ်ပိုင်း ယနေ့/မနက်ဖြန် Toggle (Mobile မှာ ၈၀/၂၀) --- */}
//             <div className="flex items-center relative gap-3 mb-4">
//                 {/* ယနေ့ */}
//                 <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border rounded-2xl p-4 ${
//                     activeDay === 'today' ? 'w-[82%] md:w-1/2 border-slate-200 bg-slate-50/30' : 'w-[18%] md:w-1/2 border-transparent opacity-40 grayscale md:opacity-100 md:grayscale-0'
//                 }`}>
//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-col">
//                             <span className="text-sm font-bold text-slate-800">ယနေ့</span>
//                             <span className="text-[10px] text-slate-400">၁.၁၇.</span>
//                         </div>
//                         <div className={`flex items-center space-x-3 ${activeDay === 'today' ? 'flex' : 'hidden md:flex'}`}>
//                             <div className="text-center"><span className="text-[9px] text-slate-400 block">နံနက်</span><span className="text-lg">☀️</span><span className="text-[8px] text-slate-300">0%</span></div>
//                             <div className="text-center"><span className="text-[9px] text-slate-400 block">ညနေ</span><span className="text-lg">☀️</span><span className="text-[8px] text-slate-300">0%</span></div>
//                             <div className="pl-2 text-right">
//                                 <span className="text-sm font-black text-blue-500">-၅°</span>
//                                 <span className="text-sm font-black text-slate-200 mx-1">/</span>
//                                 <span className="text-sm font-black text-red-500">၂°</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Toggle Button */}
//                 <button onClick={toggleDay} className="absolute z-20 bg-white border border-slate-200 shadow-md rounded-full p-1.5 transition-all duration-700 md:hidden" style={{ left: activeDay === 'today' ? '82%' : '18%', transform: 'translateX(-50%)' }}>
//                     <svg className={`h-3 w-3 text-slate-500 transition-transform duration-500 ${activeDay === 'tomorrow' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
//                 </button>

//                 {/* မနက်ဖြန် */}
//                 <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border rounded-2xl p-4 ${
//                     activeDay === 'tomorrow' ? 'w-[82%] md:w-1/2 border-slate-200 bg-slate-50/30' : 'w-[18%] md:w-1/2 border-transparent opacity-40 grayscale md:opacity-100 md:grayscale-0'
//                 }`}>
//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-col">
//                             <span className="text-sm font-bold text-slate-800">မနက်ဖြန်</span>
//                             <span className="text-[10px] text-slate-400 text-red-500">၁.၁၈.</span>
//                         </div>
//                         <div className={`flex items-center space-x-3 ${activeDay === 'tomorrow' ? 'flex' : 'hidden md:flex'}`}>
//                             <div className="text-center"><span className="text-[9px] text-blue-500 block">10%</span><span className="text-lg">☀️</span></div>
//                             <div className="text-center"><span className="text-lg">☁️</span><span className="text-[9px] text-blue-500 block">30%</span></div>
//                             <div className="pl-2 text-right">
//                                 <span className="text-sm font-black text-blue-500">-၃°</span>
//                                 <span className="text-sm font-black text-slate-200 mx-1">/</span>
//                                 <span className="text-sm font-black text-red-500">၄°</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- အောက်ပိုင်း အပတ်စဉ်စာရင်း (Screenshot အသစ်အတိုင်း Vertical List) --- */}
//             <div className="mt-2 divide-y divide-slate-50">
//                 {weeklyData.map((data, index) => (
//                     <div key={index} className="flex items-center justify-between py-4 px-1">
//                         {/* နေ့စွဲ */}
//                         <div className="flex flex-col w-12">
//                             <span className="text-sm font-bold text-slate-800">{data.day}</span>
//                             <span className="text-[10px] text-slate-400">{data.date}</span>
//                         </div>

//                         {/* ရာသီဥတု အိုင်ကွန်နှင့် မိုးရွာနိုင်ချေ */}
//                         <div className="flex items-center space-x-6 flex-grow justify-center">
//                             <div className="flex items-center space-x-1">
//                                 <span className="text-[10px] font-bold text-blue-500 w-7 text-right">{data.rain}</span>
//                                 <span className="text-xl">{data.icon}</span>
//                             </div>
//                             <div className="flex items-center space-x-1">
//                                 <span className="text-xl">{data.icon2}</span>
//                                 <span className="text-[10px] font-bold text-blue-500 w-7 text-left">{data.rain2}</span>
//                             </div>
//                         </div>

//                         {/* အပူချိန် */}
//                         <div className="flex items-center space-x-1 font-black text-sm w-16 justify-end">
//                             <span className="text-blue-500">{data.low}</span>
//                             <span className="text-slate-200">/</span>
//                             <span className="text-red-500">{data.high}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <p className="text-[10px] text-slate-300 mt-6 leading-relaxed italic border-t pt-4">
//                 မိုးလေဝသဌာန၏ ထုတ်ပြန်ချက်အရ သန်းခေါင်ယံမှ မွန်းတည့်ချိန်အထိကို နံနက်ပိုင်းဟု သတ်မှတ်ပြီး မွန်းတည့်ချိန်မှ သန်းခေါင်ယံအထိကို ညနေပိုင်းဟု သတ်မှတ်ပါသည်။
//             </p>
//         </div>
//     );
// };

// export default WeeklyForecast;



import React from 'react';

const WeeklyForecast = () => {
    const weeklyData = [
        { day: 'ယနေ့', date: '၁.၁၇.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၅°', high: '၂°', morningRain: '0%', eveningRain: '0%' },
        { day: 'မနက်ဖြန်', date: '၁.၁၈.', morningIcon: '☀️', eveningIcon: '☁️', low: '-၃°', high: '၄°', morningRain: '10%', eveningRain: '30%', isTomorrow: true },
        { day: 'တနင်္လာ', date: '၁.၁၉.', morningIcon: '☁️', eveningIcon: '⛅', low: '-၃°', high: '-၂°', morningRain: '40%', eveningRain: '20%' },
        { day: 'အင်္ဂါ', date: '၁.၂၀.', morningIcon: '⛅', eveningIcon: '☀️', low: '-၁၃°', high: '-၃°', morningRain: '20%', eveningRain: '10%' },
        { day: 'ဗုဒ္ဓဟူး', date: '၁.၂.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၁၁°', high: '-၅°', morningRain: '0%', eveningRain: '0%' },
        { day: 'ကြာတေး', date: '၁.၂.', morningIcon: '☀️', eveningIcon: '☀️', low: '-၂°', high: '-၅°', morningRain: '10%', eveningRain: '10%' },
        { day: 'သောကြာ', date: '၁.၂.', morningIcon: '☀️', eveningIcon: '⛅', low: '-၁°', high: '-၂°', morningRain: '10%', eveningRain: '20%' },
    ];

    return (
        <div className="bg-white p-1 mt-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-8">အပတ်စဉ်ခန့်မှန်းချက်</h3>

            {/* Container */}
            <div className="w-full">
                
                {/* 1. Mobile & Tablet View (နေ့ရက်က ဘေးမှာအသေရှိမည် - Vertical List)
                    - lg:hidden ဆိုတာ 1024px အောက်မှာပဲ ပေါ်မယ်လို့ ပြောတာပါ
                */}
                <div className="lg:hidden flex flex-col divide-y divide-slate-50">
                    {weeklyData.map((data, index) => (
                        <div key={index} className="flex flex-row items-center py-4 px-1">
                            {/* နေ့ရက် (ဘေးဘက်ခြမ်း) */}
                            <div className="w-[60px] flex flex-col shrink-0">
                                <span className={`text-[15px] font-bold ${data.isTomorrow ? 'text-red-500' : 'text-slate-800'}`}>
                                    {data.day}
                                </span>
                                <span className="text-[11px] text-slate-400 leading-none mt-1">{data.date}</span>
                            </div>

                            {/* Icons & Rain (အလယ်ခြမ်း) */}
                            <div className="flex flex-1 items-center justify-center space-x-1">
                                <div className="flex items-center space-x-1.5">
                                    <span className="text-[10px] font-bold text-blue-500 w-6 text-right">{data.morningRain}</span>
                                    <span className="text-xl">{data.morningIcon}</span>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                    <span className="text-xl">{data.eveningIcon}</span>
                                    <span className="text-[10px] font-bold text-blue-500 w-6 text-left">{data.eveningRain}</span>
                                </div>
                            </div>

                            {/* Temperature (ညာဘက်အစွန်) */}
                            <div className="w-15 flex justify-end font-bold text-[15px] shrink-0">
                                <span className="text-blue-500">{data.low}</span>
                                <span className="text-slate-200 mx-1.5 font-normal">/</span>
                                <span className="text-red-500">{data.high}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. Web View (နေ့ရက်က အပေါ်မှာရှိမည် - Horizontal Grid)
                    - hidden lg:grid ဆိုတာ 1024px ရောက်မှ ပေါ်မယ်လို့ ပြောတာပါ
                */}
                <div className="hidden lg:grid grid-cols-7 gap-1 border-t border-slate-50 pt-8">
                    {weeklyData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center py-4 px-2 transition-all group">
                            {/* နေ့ရက် (အပေါ်ဆုံးမှာ ရှိနေမည်) */}
                            <span className={`text-[15px] font-bold mb-1 ${data.isTomorrow ? 'text-red-500' : 'text-slate-800'}`}>
                                {data.day}
                            </span>
                            <span className="text-[11px] text-slate-300 mb-6">{data.date}</span>
                            
                            {/* အိုင်ကွန်များ (ဒေါင်လိုက်စီမည်) */}
                            <div className="flex flex-col items-center space-y-6 mb-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">{data.morningIcon}</span>
                                    <span className="text-[10px] font-bold text-blue-400 mt-1">{data.morningRain}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">{data.eveningIcon}</span>
                                    <span className="text-[10px] font-bold text-blue-400 mt-1">{data.eveningRain}</span>
                                </div>
                            </div>

                            {/* အပူချိန် (အောက်ဆုံးမှာ ရှိနေမည်) */}
                            <div className="flex flex-col items-center border-t border-slate-100 pt-4 w-full font-bold">
                                <span className="text-blue-500 text-sm">{data.low}</span>
                                <div className="h-4 w-[1px] bg-slate-100 my-1"></div>
                                <span className="text-red-500 text-sm">{data.high}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WeeklyForecast;
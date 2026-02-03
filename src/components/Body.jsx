

import React, { useRef } from 'react'
import TemperatureToggleCard from './TemperatureToggleCard';
import WeeklyForecast from './WeeklyForecast';
import WeeklyWeatherComponent from './WeeklyWeatherComponent';
import HealthIndexComponent from './HealthIndexComponent';
import WeatherDashboard from './WeatherDashboard';
import WeatherOutlook from './WeatherOutlook';
import SunriseSunset from './SunriseSunset';
import LocationToolbar from './LocationToolbar';
import DonationCardMM from './DonationCardMM';
import WeatherCard from './WeatherCard';

const Body = () => {
    const currentCity = "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်";
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollBy({ left: -200, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const mainStats = [
        { label: "ခံစားရသည့်အပူချိန်", value: "0.8°", color: "text-slate-800" },
        { label: "လေတိုက်နှုန်း", value: "1.6m/s", color: "text-slate-800" },
        { label: "စိုထိုင်းဆ", value: "41%", color: "text-slate-800" },
        { label: "ခရမ်းလွန်ရောင်ခြည်", value: "၁ (နိမ့်)", color: "text-slate-800" },
        { label: "လေထုသန့်စင်မှု", value: "● ပုံမှန်", color: "text-green-500" }
    ];

    const hourlyForecast = [
        { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၄ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
        { time: "၅ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
        { time: "၆ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၇ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၈ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၉ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
        { time: "၁၀ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
         { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
        { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
        { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-7xl mx-auto md:p-2 grid grid-cols-1 lg:grid-cols-3 ">

                {/* ဘယ်ဘက်ခြမ်း Column */}
                <div className="lg:col-span-2">
                   
                    <TemperatureToggleCard />

                    {/* Main Stats Row */}
                    <div className="flex overflow-x-auto gap-3 pl-6 md:pl-0 mb-6 pb-2 no-scrollbar">
                        {mainStats.map((item, index) => (
                            <div key={index} className="bg-white border border-black-50 rounded-sm p-2 text-center min-w-[110px] flex-shrink-0">
                                <p className="text-[9px] text-gray-400 font-bold mb-1 uppercase">{item.label}</p>
                                <p className={`text-xs font-black ${item.color}`}>{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Hourly Forecast Section */}
                    <div className="w-full bg-white pl-0 md:pl-1 overflow-hidden">
                        <div className="flex relative">
                            {/* Labels */}
                            <div className="flex flex-col justify-end pb-4 pr-2 ml-5 text-[9px] font-bold text-gray-400 space-y-5 min-w-[60px] bg-white z-20 border-r border-gray-50">
                                <div className="h-4 text-transparent">Time</div>
                                <div className="h-4 text-transparent">Icon</div>
                                <div className="pt-8">မိုးရေချိန်</div>
                                <div className="pt-1">စိုထိုင်းဆ</div>
                                <div className="pt-1">လေတိုက်နှုန်း</div>
                            </div>

                            {/* Scroll Area */}
                            <div className="relative flex-grow group overflow-hidden">
                                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 shadow-md rounded-full p-1 hidden group-hover:flex border"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg></button>

                                <div ref={scrollRef} className="flex mr-0 md:mr-10 overflow-x-auto no-scrollbar scroll-smooth">
                                    {hourlyForecast.map((hour, index) => (
                                        <div
                                            key={index}
                                            // Mobile မှာ ၅ ခု ပေါ်ရန် (100% - labels width) / 5 = roughly 18-20% 
                                            className="flex flex-col items-center min-w-[20%] md:min-w-[50px] py-1 text-center border-r border-gray-200"
                                        >
                                            <span className="text-[10px] text-gray-400 font-bold mb-2">{hour.time}</span>
                                            <span className="text-lg mb-2">{hour.icon}</span>
                                            <div className="mb-4">
                                                <p className="text-xs font-black text-slate-800">{hour.temp}</p>
                                                <p className="text-[9px] font-bold text-blue-500">{hour.rainProb}</p>
                                            </div>
                                            <span className="text-[10px] text-gray-300 font-bold h-8 flex items-center">{hour.rainVol}</span>
                                            <span className="text-[10px] text-blue-400 font-bold h-8 flex items-center">{hour.humidity}%</span>
                                            <div className="flex flex-col items-center pt-2">
                                                <span className="text-[10px] text-slate-600 font-bold">{hour.wind}</span>
                                                <span className="text-blue-500 text-[10px]">▼</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 shadow-md rounded-full p-1 hidden group-hover:flex mr-4 border"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></button>
                            </div>
                        </div>
                        <div className="border-b border-gray-400 py-2 m-0 md:mr-12 md:ml-0"></div>
                    </div>
                    <div>
                        
                        {/* Update အချိန်ကို ပြသခြင်း (Component ရဲ့ အောက်ခြေ သို့မဟုတ် ထိပ်ဆုံးမှာ ထည့်နိုင်သည်) */}
                        <div className="text-[15px]  text-gray-400 mb-3 py-2 mt-1 ml-3 md:ml-0">
                            ၂၀၂၆.၀၁.၁၉. ၁၅:၅၆ တွင် နောက်ဆုံးပြင်ဆင်ခဲ့သည်
                        </div>
                    </div>
                     <div className="border-0 md:border-b border-gray-300"></div>
                    <WeeklyForecast />
                    <div className="border-0 pt-3 md:border-b mt-4 border-gray-300 ml-6 md:ml-1"></div>
                    <WeeklyWeatherComponent />
                     <div className="border-0 md:border-b mt-4 border-gray-300 ml-6"></div>
                    <WeatherCard/>
                </div>

                {/* ညာဘက်ခြမ်း (Map UI) */}
                <div className="lg:border-l ">
                    <div className=" p-6 md:ml-5 border-slate-100 h-[200px] min-h-[400px] md:min-h-[500px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-800">တစ်နိုင်ငံလုံး ရာသီဥတု</h3>
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg italic">တိုက်ရိုက်</span>
                        </div>
                        <div className="bg-sky-400 flex-grow rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner min-h-[300px]">
                            <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
                            <span className="text-white/30 font-black text-4xl transform -rotate-45 tracking-[1rem]">MAP UI</span>

                            {/* Map Floating Labels */}
                            <div className="absolute top-1/4 left-1/4 bg-white/90 px-3 py-1 rounded-xl text-[10px] font-black shadow-lg">ရန်ကုန် -၄°</div>
                            <div className="absolute bottom-1/3 right-1/4 bg-white/90 px-3 py-1 rounded-xl text-[10px] font-black shadow-lg">မန္တလေး ၆°</div>
                        </div>
                    </div>
                                        <div className="border-b border-gray-300/50"></div>

                    <DonationCardMM/>
                     <div className="border-b border-gray-300/50"></div>
                    <SunriseSunset />
                    <div className="border-b border-gray-300/50"></div>

                    <WeatherOutlook />
                    <div className="border-b border-gray-300/50 py-5"></div>

                    <WeatherDashboard />
                </div>

            </main>

        </div>
    )
}

export default Body
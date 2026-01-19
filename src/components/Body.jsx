// import React, { useRef } from 'react'

// const Body = () => {

//     const currentCity = "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်";

//     const scrollRef = useRef(null);

//   // ဘယ်/ညာ ရွှေ့ရန် Function
//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (direction === 'left') {
//       current.scrollBy({ left: -300, behavior: 'smooth' });
//     } else {
//       current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   const mainStats = [
//     { label: "ခံစားရသည့်အပူချိန်", value: "0.8°", color: "text-slate-800" },
//     { label: "လေတိုက်နှုန်း", value: "1.6m/s", color: "text-slate-800" },
//     { label: "စိုထိုင်းဆ", value: "41%", color: "text-slate-800" },
//     { label: "ခရမ်းလွန်ရောင်ခြည်", value: "၁ (နိမ့်)", color: "text-slate-800" },
//     { label: "လေထုသန့်စင်မှု", value: "● ပုံမှန်", color: "text-green-500" }
//   ];

//   const hourlyForecast = [
//   { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//   { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//   { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//   { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//   { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//   { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//   { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//   { time: "၄ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//   { time: "၅ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
// ];

//   return (
//     <div>
//         {/* --- MAIN CONTENT --- */}
//      {/* --- Body Content --- */}
//       <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

//         {/* ဘယ်ဘက်ခြမ်း Column */}
//         <div className="lg:col-span-2">

//           {/* တည်နေရာ */}
//           <div className="flex items-center space-x-2 mb-8">
//             <span className="text-yellow-500 text-xl">★</span>
//             <h2 className="text-2xl font-bold tracking-tight">{currentCity}</h2>
//           </div>

//           {/* အဓိက အပူချိန်ပြကွက် */}
//           <div className="bg-gradient-to-r from-slate-50 to-white rounded-[2rem] p-8 border border-slate-100 mb-8 shadow-sm">
//              <span className="bg-white px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 border border-slate-100 uppercase">လက်ရှိအခြေအနေ</span>
//              <div className="flex items-center mt-6">
//                 <span className="text-8xl font-black text-slate-900 tracking-tighter">2.4°</span>
//                 <span className="text-6xl ml-6">☀️</span>
//                 <div className="ml-8 border-l border-slate-200 pl-8">
//                    <p className="text-xl font-bold text-slate-700 italic">ကြည်လင်သာယာသည်</p>
//                    <p className="text-sm text-slate-400 mt-1">အနိမ့်ဆုံး -5° / အမြင့်ဆုံး 2°</p>
//                 </div>
//              </div>
//           </div>

//           {/* ၁။ အသေးစိတ် အချက်အလက်များကို Loop ပတ်ခြင်း (Main Stats) */}
//         <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar">
//   {mainStats.map((item, index) => (
//     <div 
//       key={index} 
//       className="bg-white border border-slate-100 rounded-2xl p-2 text-center transition duration-300 min-w-[80px] flex-shrink-0"
//     >
//       <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-tight">
//         {item.label}
//       </p>
//       <p className={`text-sm font-black ${item.color}`}>
//         {item.value}
//       </p>
//     </div>
//   ))}
// </div>

// {/* Left Arrow Button */}
//       <button 
//         onClick={() => scroll('left')}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-2 hidden group-hover:block hover:bg-gray-50"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//           {/* ၂။ အချိန်အလိုက် ခန့်မှန်းချက်ကို Loop ပတ်ခြင်း (Hourly Forecast) */}
//           <div className="w-full bg-white p-4 rounded-3xl border border-gray-100 overflow-hidden">
//   <div className="flex">
//     {/* ဘယ်ဘက်က ခေါင်းစဉ်များ (Sticky Labels) */}
//     <div className="flex flex-col justify-end pb-4 pr-4 text-[10px] font-bold text-gray-400 space-y-5 min-w-[60px]">
//       <div className="h-4"></div> {/* Icon space */}
//       <div className="h-4 text-transparent">Temp</div> 
//       <div className="pt-8">မိုးရေချိန် mm</div>
//       <div className="pt-1">စိုထိုင်းဆ %</div>
//       <div className="pt-1">လေတိုက်နှုန်း m/s</div>
//     </div>

//     {/* ညာဘက်က Scroll ဖြစ်မယ့် Data များ */}
//     <div className="flex overflow-x-auto no-scrollbar space-x-8 pb-4">
//       {hourlyForecast.map((hour, index) => (
//         <div key={index} className="flex flex-col items-center min-w-[50px] text-center">
//           {/* အချိန် */}
//           <span className="text-[10px] text-gray-400 font-bold mb-2 whitespace-nowrap">{hour.time}</span>

//           {/* အိုင်ကွန် */}
//           <span className="text-xl mb-2">{hour.icon}</span>

//           {/* အပူချိန် နှင့် မိုးရွာနိုင်ခြေ */}
//           <div className="mb-4">
//             <p className="text-sm font-black text-slate-800">{hour.temp}</p>
//             <p className="text-[10px] font-bold text-blue-500">{hour.rainProb}</p>
//           </div>

//           {/* မိုးရေချိန် */}
//           <span className="text-[11px] text-gray-300 font-bold h-8 flex items-center">{hour.rainVol}</span>

//           {/* စိုထိုင်းဆ */}
//           <span className="text-[11px] text-blue-400 font-bold h-8 flex items-center">{hour.humidity}</span>

//           {/* လေတိုက်နှုန်း */}
//           <div className="flex flex-col items-center pt-2">
//             <span className="text-[11px] text-slate-600 font-bold">{hour.wind}</span>
//             <span className="text-blue-500 text-[8px] mt-1">▼</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Right Arrow Button */}
//       <button 
//         onClick={() => scroll('right')}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-2 hidden group-hover:block hover:bg-gray-50"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
// </div>
//         </div>

//         {/* ညာဘက်ခြမ်း (မြေပုံပိုင်း) */}
//         <div className="space-y-6">
//            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm h-full min-h-[500px] flex flex-col">
//               <div className="flex justify-between items-center mb-6">
//                  <h3 className="text-lg font-bold">တစ်နိုင်ငံလုံး ရာသီဥတု</h3>
//                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg italic">တိုက်ရိုက်</span>
//               </div>
//               <div className="bg-sky-400 flex-grow rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner">
//                  <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
//                  <span className="text-white/30 font-black text-4xl transform -rotate-45 tracking-[1rem]">MAP UI</span>

//                  {/* Map Labels */}
//                  <div className="absolute top-1/3 left-1/4 bg-white px-3 py-1 rounded-xl text-[11px] font-black shadow-lg">ရန်ကုန် -၄°</div>
//                  <div className="absolute bottom-1/4 right-1/4 bg-white px-3 py-1 rounded-xl text-[11px] font-black shadow-lg">မန္တလေး ၆°</div>
//               </div>
//            </div>
//         </div>

//       </main>
//     </div>
//   )
// }

// export default Body


// import React, { useRef } from 'react'

// const Body = () => {
//     const currentCity = "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်";
//     const scrollRef = useRef(null);

//     // ဘယ်/ညာ ရွှေ့ရန် Function
//     const scroll = (direction) => {
//         const { current } = scrollRef;
//         if (direction === 'left') {
//             current.scrollBy({ left: -300, behavior: 'smooth' });
//         } else {
//             current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//     };

//     const mainStats = [
//         { label: "ခံစားရသည့်အပူချိန်", value: "0.8°", color: "text-slate-800" },
//         { label: "လေတိုက်နှုန်း", value: "1.6m/s", color: "text-slate-800" },
//         { label: "စိုထိုင်းဆ", value: "41%", color: "text-slate-800" },
//         { label: "ခရမ်းလွန်ရောင်ခြည်", value: "၁ (နိမ့်)", color: "text-slate-800" },
//         { label: "လေထုသန့်စင်မှု", value: "● ပုံမှန်", color: "text-green-500" }
//     ];

//     const hourlyForecast = [
//         { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၄ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//         { time: "၅ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//     ];

//     return (
//         <div className="bg-white">
//             <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

//                 {/* ဘယ်ဘက်ခြမ်း Column */}
//                 <div className="lg:col-span-2">

//                     {/* တည်နေရာ */}
//                     <div className="flex items-center space-x-2 mb-8">
//                         <span className="text-yellow-500 text-xl">★</span>
//                         <h2 className="text-2xl font-bold tracking-tight text-slate-900">{currentCity}</h2>
//                     </div>

//                     {/* အဓိက အပူချိန်ပြကွက် */}
//                     <div className="bg-gradient-to-r from-slate-50 to-white rounded-[2rem] p-8 border border-slate-100 mb-8 shadow-sm">
//                         <span className="bg-white px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">လက်ရှိအခြေအနေ</span>
//                         <div className="flex items-center mt-6">
//                             <span className="text-8xl font-black text-slate-900 tracking-tighter">2.4°</span>
//                             <span className="text-6xl ml-6">☀️</span>
//                             <div className="ml-8 border-l border-slate-200 pl-8">
//                                 <p className="text-xl font-bold text-slate-700 italic">ကြည်လင်သာယာသည်</p>
//                                 <p className="text-sm text-slate-400 mt-1">အနိမ့်ဆုံး -5° / အမြင့်ဆုံး 2°</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ၁။ အသေးစိတ် အချက်အလက်များ (Horizontal Scroll) */}
//                     <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar">
//                         {mainStats.map((item, index) => (
//                             <div 
//                                 key={index} 
//                                 className="bg-white border border-slate-100 rounded-2xl p-4 text-center transition duration-300 min-w-[120px] flex-shrink-0"
//                             >
//                                 <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-tight">
//                                     {item.label}
//                                 </p>
//                                 <p className={`text-sm font-black ${item.color}`}>
//                                     {item.value}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* ၂။ အချိန်အလိုက် ခန့်မှန်းချက် (Buttons ပါဝင်သော Slider) */}
//                     <div className="relative group w-full bg-white p-4 rounded-3xl border border-gray-100 overflow-hidden">


//                         <div className="flex">
//                             {/* ဘယ်ဘက်က ခေါင်းစဉ်များ (Sticky Labels) */}
//                             <div className="flex flex-col justify-end pb-4 pr-4 text-[10px] font-bold text-gray-400 space-y-5 min-w-[70px] border-r border-gray-50 bg-white z-20">
//                                 <div className="h-4"></div>
//                                 <div className="h-4 text-transparent italic">အပူချိန်</div> 
//                                 <div className="pt-8">မိုးရေချိန် mm</div>
//                                 <div className="pt-1">စိုထိုင်းဆ %</div>
//                                 <div className="pt-1 text-[9px]">လေတိုက်နှုန်း m/s</div>
//                             </div>

//                             {/* ညာဘက်က Scroll ဖြစ်မယ့် Data များ */}
//                             <div 
//                                 ref={scrollRef}
//                                 className="flex overflow-x-auto no-scrollbar space-x-10 pb-4 px-6 scroll-smooth"
//                             >
//                                 {hourlyForecast.map((hour, index) => (
//                                     <div key={index} className="flex flex-col items-center min-w-[50px] text-center">
//                                         <span className="text-[10px] text-gray-400 font-bold mb-3 whitespace-nowrap">{hour.time}</span>
//                                         <span className="text-xl mb-3">{hour.icon}</span>

//                                         <div className="mb-4">
//                                             <p className="text-sm font-black text-slate-800">{hour.temp}</p>
//                                             <p className="text-[10px] font-bold text-blue-500">{hour.rainProb}</p>
//                                         </div>

//                                         <span className="text-[11px] text-gray-300 font-bold h-8 flex items-center">{hour.rainVol}</span>
//                                         <span className="text-[11px] text-blue-400 font-bold h-8 flex items-center">{hour.humidity}</span>

//                                         <div className="flex flex-col items-center pt-2">
//                                             <span className="text-[11px] text-slate-600 font-bold">{hour.wind}</span>
//                                             <span className="text-blue-500 text-[8px] mt-1">▼</span>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right Arrow Button */}
//                         <button 
//                             onClick={() => scroll('right')}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl border border-gray-100 rounded-full p-2 hidden group-hover:block hover:bg-gray-50 transition"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* ညာဘက်ခြမ်း (မြေပုံပိုင်း) */}
//                 <div className="space-y-6">
//                     <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm h-full min-h-[500px] flex flex-col">
//                         <div className="flex justify-between items-center mb-6">
//                             <h3 className="text-lg font-bold text-slate-800">တစ်နိုင်ငံလုံး ရာသီဥတု</h3>
//                             <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg italic">တိုက်ရိုက်</span>
//                         </div>
//                         <div className="bg-sky-400 flex-grow rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner">
//                             <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
//                             <span className="text-white/30 font-black text-4xl transform -rotate-45 tracking-[1rem]">MAP UI</span>
//                             <div className="absolute top-1/3 left-1/4 bg-white/90 px-3 py-1.5 rounded-xl text-[11px] font-black shadow-lg">ရန်ကုန် -၄°</div>
//                             <div className="absolute bottom-1/4 right-1/4 bg-white/90 px-3 py-1.5 rounded-xl text-[11px] font-black shadow-lg">မန္တလေး ၆°</div>
//                         </div>
//                     </div>
//                 </div>

//             </main>
//         </div>
//     )
// }

// export default Body





// import React, { useRef } from 'react'

// const Body = () => {
//     const currentCity = "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်";
//     const scrollRef = useRef(null);

//     const scroll = (direction) => {
//         const { current } = scrollRef;
//         if (direction === 'left') {
//             current.scrollBy({ left: -300, behavior: 'smooth' });
//         } else {
//             current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//     };

//     const mainStats = [
//         { label: "ခံစားရသည့်အပူချိန်", value: "0.8°", color: "text-slate-800" },
//         { label: "လေတိုက်နှုန်း", value: "1.6m/s", color: "text-slate-800" },
//         { label: "စိုထိုင်းဆ", value: "41%", color: "text-slate-800" },
//         { label: "ခရမ်းလွန်ရောင်ခြည်", value: "၁ (နိမ့်)", color: "text-slate-800" },
//         { label: "လေထုသန့်စင်မှု", value: "● ပုံမှန်", color: "text-green-500" }
//     ];

//     const hourlyForecast = [
//         { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၄ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//         { time: "၅ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//     ];

//     return (
//         <div className="bg-white">
//             <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <div className="flex items-center space-x-2 mb-8">
//                         <span className="text-yellow-500 text-xl">★</span>
//                         <h2 className="text-2xl font-bold tracking-tight text-slate-900">{currentCity}</h2>
//                     </div>

//                     <div className="bg-gradient-to-r from-slate-50 to-white rounded-[2rem] p-8 border border-slate-100 mb-8 shadow-sm">
//                         <span className="bg-white px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">လက်ရှိအခြေအနေ</span>
//                         <div className="flex items-center mt-6">
//                             <span className="text-8xl font-black text-slate-900 tracking-tighter">2.4°</span>
//                             <span className="text-6xl ml-6">☀️</span>
//                             <div className="ml-8 border-l border-slate-200 pl-8">
//                                 <p className="text-xl font-bold text-slate-700 italic">ကြည်လင်သာယာသည်</p>
//                                 <p className="text-sm text-slate-400 mt-1">အနိမ့်ဆုံး -5° / အမြင့်ဆုံး 2°</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar">
//                         {mainStats.map((item, index) => (
//                             <div key={index} className="bg-white border border-slate-100 rounded-2xl p-4 text-center min-w-[120px] flex-shrink-0">
//                                 <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-tight">{item.label}</p>
//                                 <p className={`text-sm font-black ${item.color}`}>{item.value}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* --- HOURLY FORECAST WITH 2 BUTTONS --- */}
//                     <div className="relative group w-full bg-white p-4 rounded-3xl border border-gray-100">

//                         {/* ဘယ်ဘက်ခလုတ် (Left Button) */}
//                         <button 
//                             onClick={() => scroll('left')}
//                             className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-50 bg-white shadow-xl border border-gray-100 rounded-full p-3 group-hover:flex hidden items-center justify-center hover:bg-gray-50 transition-all"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                             </svg>
//                         </button>

//                         <div className="flex relative overflow-hidden">
//                             {/* Sticky Labels */}
//                             <div className="flex flex-col justify-end pb-4 pr-4 text-[10px] font-bold text-gray-400 space-y-5 min-w-[70px] border-r border-gray-50 bg-white z-30">
//                                 <div className="h-4"></div>
//                                 <div className="h-4 text-transparent">Temp</div> 
//                                 <div className="pt-8">မိုးရေချိန် mm</div>
//                                 <div className="pt-1">စိုထိုင်းဆ %</div>
//                                 <div className="pt-1">လေတိုက်နှုန်း m/s</div>
//                             </div>

//                             {/* Scrollable Data */}
//                             <div 
//                                 ref={scrollRef}
//                                 className="flex overflow-x-auto no-scrollbar space-x-10 pb-4 px-6 scroll-smooth"
//                             >
//                                 {hourlyForecast.map((hour, index) => (
//                                     <div key={index} className="flex flex-col items-center min-w-[50px] text-center">
//                                         <span className="text-[10px] text-gray-400 font-bold mb-3">{hour.time}</span>
//                                         <span className="text-xl mb-3">{hour.icon}</span>
//                                         <div className="mb-4">
//                                             <p className="text-sm font-black text-slate-800">{hour.temp}</p>
//                                             <p className="text-[10px] font-bold text-blue-500">{hour.rainProb}</p>
//                                         </div>
//                                         <span className="text-[11px] text-gray-300 font-bold h-8 flex items-center">{hour.rainVol}</span>
//                                         <span className="text-[11px] text-blue-400 font-bold h-8 flex items-center">{hour.humidity}</span>
//                                         <div className="flex flex-col items-center pt-2">
//                                             <span className="text-[11px] text-slate-600 font-bold">{hour.wind}</span>
//                                             <span className="text-blue-500 text-[8px] mt-1">▼</span>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* ညာဘက်ခလုတ် (Right Button) */}
//                         <button 
//                             onClick={() => scroll('right')}
//                             className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-50 bg-white shadow-xl border border-gray-100 rounded-full p-3 group-hover:flex hidden items-center justify-center hover:bg-gray-50 transition-all"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <div className="space-y-6">
//                     <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm h-full min-h-[500px] flex flex-col">
//                         <div className="flex justify-between items-center mb-6">
//                             <h3 className="text-lg font-bold">တစ်နိုင်ငံလုံး ရာသီဥတု</h3>
//                             <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg italic">တိုက်ရိုက်</span>
//                         </div>
//                         <div className="bg-sky-400 flex-grow rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner">
//                             <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
//                             <span className="text-white/30 font-black text-4xl transform -rotate-45 tracking-[1rem]">MAP UI</span>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default Body




// import React, { useRef } from 'react'

// const Body = () => {
//     const currentCity = "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်";
//     const scrollRef = useRef(null);

//     // ဘယ်/ညာ ရွှေ့ရန် Function
//     const scroll = (direction) => {
//         const { current } = scrollRef;
//         if (direction === 'left') {
//             current.scrollBy({ left: -300, behavior: 'smooth' });
//         } else {
//             current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//     };

//     const mainStats = [
//         { label: "ခံစားရသည့်အပူချိန်", value: "0.8°", color: "text-slate-800" },
//         { label: "လေတိုက်နှုန်း", value: "1.6m/s", color: "text-slate-800" },
//         { label: "စိုထိုင်းဆ", value: "41%", color: "text-slate-800" },
//         { label: "ခရမ်းလွန်ရောင်ခြည်", value: "၁ (နိမ့်)", color: "text-slate-800" },
//         { label: "လေထုသန့်စင်မှု", value: "● ပုံမှန်", color: "text-green-500" }
//     ];

//     const hourlyForecast = [
//         { time: "၂၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၂၃ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "မနက်ဖြန်", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "2" },
//         { time: "၁ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၂ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၃ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၄ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//         { time: "၅ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//         { time: "၆ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၇ နာရီ", icon: "🌙", temp: "-3°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၈ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "75", wind: "1" },
//         { time: "၉ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//         { time: "၁၀ နာရီ", icon: "🌙", temp: "-4°", rainProb: "0%", rainVol: "0", humidity: "80", wind: "1" },
//     ];

//     return (
//         <div className="bg-white min-h-screen">
//             <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

//                 {/* ဘယ်ဘက်ခြမ်း Column */}
//                 <div className="lg:col-span-2">

//                     {/* တည်နေရာ */}
//                     <div className="flex items-center space-x-2 mb-8">
//                         <span className="text-yellow-500 text-xl">★</span>
//                         <h2 className="text-2xl font-bold tracking-tight text-slate-900">{currentCity}</h2>
//                     </div>

//                     {/* အဓိက အပူချိန်ပြကွက် */}
//                     <div className="bg-gradient-to-r from-slate-50 to-white rounded-[2rem] p-8 border border-slate-100 mb-8 shadow-sm">
//                         <span className="bg-white px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">လက်ရှိအခြေအနေ</span>
//                         <div className="flex items-center mt-6">
//                             <span className="text-8xl font-black text-slate-900 tracking-tighter">2.4°</span>
//                             <span className="text-6xl ml-6">☀️</span>
//                             <div className="ml-8 border-l border-slate-200 pl-8">
//                                 <p className="text-xl font-bold text-slate-700 italic">ကြည်လင်သာယာသည်</p>
//                                 <p className="text-sm text-slate-400 mt-1">အနိမ့်ဆုံး -5° / အမြင့်ဆုံး 2°</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ၁။ အသေးစိတ် အချက်အလက်များ (Horizontal Scroll) */}
//                     <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar">
//                         {mainStats.map((item, index) => (
//                             <div key={index} className="bg-white border border-slate-100 rounded-2xl p-4 text-center min-w-[120px] flex-shrink-0 shadow-sm">
//                                 <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-tight">{item.label}</p>
//                                 <p className={`text-sm font-black ${item.color}`}>{item.value}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* ၂။ အချိန်အလိုက် ခန့်မှန်းချက် (Refined Navigation) */}
//                     <div className="w-full bg-white p-4 ">
//                         <div className="flex relative">

//                             {/* Sticky Labels Section */}
//                             <div className="flex flex-col justify-end pb-4 pr-4 text-[10px] font-bold text-gray-400 space-y-5 min-w-[80px] border-r border-gray-50 bg-white z-30">
//                                 <div className="h-4"></div>
//                                 <div className="h-4 text-transparent italic">အပူချိန်</div>
//                                 <div className="pt-8">မိုးရေချိန် mm</div>
//                                 <div className="pt-1">စိုထိုင်းဆ %</div>
//                                 <div className="pt-1">လေတိုက်နှုန်း m/s</div>
//                             </div>

//                             {/* Data & Internal Navigation Section */}
//                             <div className="relative flex-grow group overflow-hidden">

//                                 {/* ဘယ်ဘက်ခလုတ် - Scroll Area ရဲ့ အစမှာတင် ပေါ်မည် */}
//                                 <button
//                                     onClick={() => scroll('left')}
//                                     className="absolute left-1 top-1/2 -translate-y-1/2 z-50 bg-white/90 shadow-lg border border-gray-100 rounded-full p-2 hidden group-hover:flex items-center justify-center hover:bg-white transition-all"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                                     </svg>
//                                 </button>

//                                 {/* ညာဘက်ခလုတ် - Scroll Area ရဲ့ အဆုံးမှာ ပေါ်မည် */}
//                                 <button
//                                     onClick={() => scroll('right')}
//                                     className="absolute right-1 top-1/2 -translate-y-1/2 z-50 bg-white/90 shadow-lg border border-gray-100 rounded-full p-2 hidden group-hover:flex items-center justify-center hover:bg-white transition-all"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                                     </svg>
//                                 </button>

//                                 {/* Scrollable Content */}
//                                 <div
//                                     ref={scrollRef}
//                                     className="flex overflow-x-auto no-scrollbar  pb-4  scroll-smooth"
//                                 >
//                                     {/* {hourlyForecast.map((hour, index) => (
//                                         <div key={index} className="flex flex-col items-center min-w-[20px] text-center">
//                                             <span className="text-[10px] text-gray-400 font-bold mb-3">{hour.time}</span>
//                                             <span className="text-xl mb-3">{hour.icon}</span>
                                            
//                                             <div className="mb-4">
//                                                 <p className="text-sm font-black text-slate-800">{hour.temp}</p>
//                                                 <p className="text-[10px] font-bold text-blue-500">{hour.rainProb}</p>
//                                             </div>

//                                             <span className="text-[11px] text-gray-300 font-bold h-8 flex items-center">{hour.rainVol}</span>
//                                             <span className="text-[11px] text-blue-400 font-bold h-8 flex items-center">{hour.humidity}</span>
                                            
//                                             <div className="flex flex-col items-center pt-2">
//                                                 <span className="text-[11px] text-slate-600 font-bold">{hour.wind}</span>
//                                                 <span className="text-blue-500 text-[8px] mt-1">▼</span>
//                                             </div>
//                                         </div>
//                                     ))} */}

//                                     {hourlyForecast.map((hour, index) => (
//                                         <div
//                                             key={index}
//                                             className={`flex flex-col items-center min-w-[65px] py-2 text-center border-l border-gray-50 last:border-r`}
//                                         >
//                                             {/* အချိန် */}
//                                             <span className="text-[10px] text-gray-400 font-bold mb-3">{hour.time}</span>

//                                             {/* အိုင်ကွန် */}
//                                             <span className="text-xl mb-3">{hour.icon}</span>

//                                             {/* အပူချိန် */}
//                                             <div className="mb-4">
//                                                 <p className="text-sm font-black text-slate-800">{hour.temp}</p>
//                                                 <p className="text-[10px] font-bold text-blue-500">{hour.rainProb}</p>
//                                             </div>

//                                             {/* မိုးရေချိန် (mm) */}
//                                             <span className="text-[11px] text-gray-400 font-bold h-8 flex items-center">
//                                                 {hour.rainVol > 0 ? `${hour.rainVol}mm` : '0'}
//                                             </span>

//                                             {/* စိုထိုင်းဆ (%) */}
//                                             <span className="text-[11px] text-blue-400 font-bold h-8 flex items-center">
//                                                 {hour.humidity}%
//                                             </span>

//                                             {/* လေတိုက်နှုန်း (m/s) */}
//                                             <div className="flex flex-col items-center pt-2">
//                                                 <span className="text-[11px] text-slate-600 font-bold">{hour.wind}</span>
//                                                 <span className="text-blue-500 text-[8px] mt-0.5">▼</span>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

             
//                 <div className="space-y-6">
//                     <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm h-full min-h-[500px] flex flex-col">
//                         <div className="flex justify-between items-center mb-6">
//                             <h3 className="text-lg font-bold text-slate-800">တစ်နိုင်ငံလုံး ရာသီဥတု</h3>
//                             <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg italic">တိုက်ရိုက်</span>
//                         </div>
//                         <div className="bg-sky-400 flex-grow rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner">
//                             <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
//                             <span className="text-white/30 font-black text-4xl transform -rotate-45 tracking-[1rem]">MAP UI</span>
//                         </div>
//                     </div>
//                 </div>

//             </main>
//         </div>
//     )
// }

// export default Body




import React, { useRef } from 'react'
import TemperatureToggleCard from './TemperatureToggleCard';
import WeeklyForecast from './WeeklyForecast';
import WeeklyWeatherComponent from './WeeklyWeatherComponent';
import HealthIndexComponent from './HealthIndexComponent';
import WeatherDashboard from './WeatherDashboard';
import WeatherOutlook from './WeatherOutlook';
import SunriseSunset from './SunriseSunset';

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
    ];

    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-7xl mx-auto p-2 md:p-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* ဘယ်ဘက်ခြမ်း Column */}
                <div className="lg:col-span-2">
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-yellow-500 text-xl">★</span>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900">{currentCity}</h2>
                    </div>

                    <TemperatureToggleCard/>

                    {/* Main Stats Row */}
                    <div className="flex overflow-x-auto gap-3 mb-8 pb-2 no-scrollbar">
                        {mainStats.map((item, index) => (
                            <div key={index} className="bg-white border border-black-50 rounded-sm p-2 text-center min-w-[110px] flex-shrink-0">
                                <p className="text-[9px] text-gray-400 font-bold mb-1 uppercase">{item.label}</p>
                                <p className={`text-xs font-black ${item.color}`}>{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Hourly Forecast Section */}
                    <div className="w-full bg-white overflow-hidden">
                        <div className="flex relative">
                            {/* Labels */}
                            <div className="flex flex-col justify-end pb-4 pr-2 text-[9px] font-bold text-gray-400 space-y-5 min-w-[60px] bg-white z-20 border-r border-gray-50">
                                <div className="h-4 text-transparent">Time</div>
                                <div className="h-4 text-transparent">Icon</div>
                                <div className="pt-8">မိုးရေချိန်</div>
                                <div className="pt-1">စိုထိုင်းဆ</div>
                                <div className="pt-1">လေတိုက်နှုန်း</div>
                            </div>

                            {/* Scroll Area */}
                            <div className="relative flex-grow group overflow-hidden">
                                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 shadow-md rounded-full p-1 hidden group-hover:flex border"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg></button>
                                
                                <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth">
                                    {hourlyForecast.map((hour, index) => (
                                        <div 
                                            key={index} 
                                            // Mobile မှာ ၅ ခု ပေါ်ရန် (100% - labels width) / 5 = roughly 18-20% 
                                            className="flex flex-col items-center min-w-[20%] md:min-w-[80px] py-3 text-center border-r border-black-50"
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
                                                <span className="text-blue-500 text-[7px]">▼</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 shadow-md rounded-full p-1 hidden group-hover:flex border"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></button>
                            </div>
                        </div>
                        <div className="border-b border-black-100/50 py-5"></div>
                    </div>
                     <WeeklyForecast/>
                     <WeeklyWeatherComponent/>
                </div>

                {/* ညာဘက်ခြမ်း (Map UI) */}
                <div className="lg:pl-8 lg:border-l ">
                    <div className=" p-6 border-slate-100 h-[200px] min-h-[400px] md:min-h-[500px] flex flex-col">
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
                    <SunriseSunset/>
                                            <div className="border-b border-black-100/50"></div>

                    <WeatherOutlook/>
                                            <div className="border-b border-black-100/50 py-5"></div>

                    <WeatherDashboard/>
                </div>
           
            </main>

        </div>
    )
}

export default Body
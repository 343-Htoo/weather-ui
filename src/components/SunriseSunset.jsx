// import React from 'react';

// const SunriseSunset = () => {
//   // Mock Data based on screenshot
//   const data = {
//     today: "01.18",
//     sunrise: "07:46",
//     sunset: "17:42",
//     tomorrow: { date: "01.19", sunrise: "07:46", sunset: "17:43" },
//     afterTomorrow: { date: "01.20", sunrise: "07:45", sunset: "17:44" }
//   };

//   return (
//     <div className="max-w-md mx-auto p-3 font-sans">
//       <h2 className="text-xl font-bold mb-8 text-slate-800">Sunrise & Sunset</h2>

//       {/* Main Visual Section */}
//       <div className="relative flex flex-col items-center mb-10">
//         <p className="text-sm font-bold text-slate-800 mb-2">Today {data.today}</p>
        
//         {/* The Arc and Sun Indicator */}
//         <div className="relative w-full h-32 flex justify-center items-end overflow-hidden">
//           {/* Custom SVG Arc Path */}
//           <svg className="absolute w-[280px] h-[140px]" viewBox="0 0 280 140">
//             <path 
//               d="M 10 130 A 130 130 0 0 1 270 130" 
//               fill="none" 
//               stroke="#E2E8F0" 
//               strokeWidth="2" 
//               strokeDasharray="4 4" 
//             />
//             {/* Sun Position Indicator (Customization needed based on actual time) */}
//             <circle cx="85" cy="45" r="10" fill="#FBBF24" className="shadow-lg shadow-yellow-200" />
//             <circle cx="85" cy="45" r="14" fill="#FBBF24" fillOpacity="0.2" />
//           </svg>

//           {/* Time Labels under the Arc */}
//           <div className="w-full flex justify-between px-4 z-10">
//             <div className="flex flex-column items-start">
//               <div className="flex items-center space-x-1">
//                  <div className="w-4 h-4 rounded-full bg-gradient-to-t from-yellow-500 to-yellow-200"></div>
//                  <span className="text-xs font-bold text-slate-400">Sunrise</span>
//               </div>
//               <span className="text-2xl font-black text-slate-800">{data.sunrise} <span className="text-sm text-slate-400 uppercase">am</span></span>
//             </div>
            
//             <div className="h-10 w-[1px] bg-slate-100 self-center"></div>
//             <div className="flex flex-col items-end">
//               <div className="flex items-center space-x-1">
//                  <span className="text-xs font-bold text-slate-400">Sunset</span>
//                  <div className="w-4 h-4 rounded-full bg-gradient-to-b from-yellow-500 to-yellow-200"></div>
//               </div>
//               <span className="text-2xl font-black text-slate-800">{data.sunset} <span className="text-xs text-slate-400 uppercase">pm</span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Forecast Section - Mobile မှာ ဘေးတိုက် Scroll ဖြစ်စေရန် */}
// <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
//   {/* Tomorrow Card */}
//   <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center min-w-[160px] flex-shrink-0">
//     <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Tomorrow {data.tomorrow.date}</p>
//     <div className="flex items-center space-x-4">
//       <div className="flex items-center space-x-1">
//          <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
//          <span className="text-sm font-bold text-slate-700">{data.tomorrow.sunrise}</span>
//       </div>
//       <div className="flex items-center space-x-1">
//          <div className="w-3 h-3 rounded-full bg-yellow-600/50"></div>
//          <span className="text-sm font-bold text-slate-700">{data.tomorrow.sunset}</span>
//       </div>
//     </div>
//   </div>

//   {/* After Tomorrow Card */}
//   <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center min-w-[160px] flex-shrink-0">
//     <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Day After {data.afterTomorrow.date}</p>
//     <div className="flex items-center space-x-4">
//       <div className="flex items-center space-x-1">
//          <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
//          <span className="text-sm font-bold text-slate-700">{data.afterTomorrow.sunrise}</span>
//       </div>
//       <div className="flex items-center space-x-1">
//          <div className="w-3 h-3 rounded-full bg-yellow-600/50"></div>
//          <span className="text-sm font-bold text-slate-700">{data.afterTomorrow.sunset}</span>
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Footer Meta Info */}
//       <p className="mt-6 text-[9px] text-blue-400 font-bold text-center">
//         Data source: WeatherEye | Updated: 2026.01.01 07:24
//       </p>
//     </div>
//   );
// };

// export default SunriseSunset;


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
    <div className="max-w-md mx-auto p-4 md:p-6 bg-white font-sans">
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



// import React from 'react';

// const SunriseSunset = () => {
//   const data = {
//     today: "01.18",
//     sunrise: "07:46",
//     sunset: "17:42",
//     tomorrow: { date: "01.19", sunrise: "07:46", sunset: "17:43" },
//     afterTomorrow: { date: "01.20", sunrise: "07:45", sunset: "17:44" }
//   };

//   return (
//     <div className="max-w-[340px] mx-auto p-3 bg-white rounded-3xl shadow-sm border border-slate-100 font-sans">
//       {/* Title - Tiny style */}
//       <h2 className="text-xs font-black mb-3 text-slate-800 uppercase tracking-tighter">Sunrise & Sunset</h2>

//       {/* Main Visual Arc Area */}
//       <div className="relative flex flex-col items-center mb-4">
//         <p className="text-[9px] font-bold text-slate-400 mb-1">Today {data.today}</p>
        
//         {/* Arc Path scaled down */}
//         <div className="relative w-full max-w-[200px] aspect-[2/1] flex justify-center items-end overflow-hidden">
//           <svg className="absolute w-full h-full" viewBox="0 0 280 140">
//             <path 
//               d="M 30 130 A 110 110 0 0 1 250 130" 
//               fill="none" 
//               stroke="#F8FAFC" 
//               strokeWidth="2" 
//               strokeDasharray="3 3" 
//             />
//             {/* Sun indicator */}
//             <circle cx="80" cy="55" r="6" fill="#FBBF24" />
//           </svg>

//           {/* Times */}
//           <div className="w-full flex justify-between px-1 z-10 translate-y-1">
//             <div className="text-left">
//               <span className="text-[7px] font-bold text-slate-300 block uppercase leading-none">Rise</span>
//               <p className="text-sm font-black text-slate-800 leading-tight">{data.sunrise}</p>
//             </div>
//             <div className="text-right">
//               <span className="text-[7px] font-bold text-slate-300 block uppercase leading-none">Set</span>
//               <p className="text-sm font-black text-slate-800 leading-tight">{data.sunset}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ultra Compact Horizontal Scroll */}
//       <div className="flex flex-nowrap gap-1.5 overflow-x-auto no-scrollbar snap-x">
//         {[
//           { label: 'Tmrw', date: data.tomorrow.date, rise: data.tomorrow.sunrise, set: data.tomorrow.sunset },
//           { label: 'Day After', date: data.afterTomorrow.date, rise: data.afterTomorrow.sunrise, set: data.afterTomorrow.sunset }
//         ].map((item, idx) => (
//           <div 
//             key={idx} 
//             className="bg-slate-50/50 rounded-lg p-1.5 min-w-[125px] flex-1 snap-center border border-slate-50"
//           >
//             <p className="text-[8px] font-bold text-slate-400 mb-1 uppercase tracking-tighter">
//               {item.label} {item.date}
//             </p>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-1">
//                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
//                  <span className="text-[10px] font-bold text-slate-600">{item.rise}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                  <div className="w-2 h-2 rounded-full bg-orange-400/60" />
//                  <span className="text-[10px] font-bold text-slate-600">{item.set}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SunriseSunset;
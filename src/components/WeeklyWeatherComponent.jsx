// import React from 'react';

// // --- CSS Icons Components ---

// const SunIcon = () => (
//   <div className="relative w-6 h-6 flex items-center justify-center">
//     <div className="w-3 h-3 bg-yellow-400 rounded-full z-10 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
//     {[...Array(8)].map((_, i) => (
//       <div key={i} className="absolute w-0.5 h-5 bg-yellow-400 rounded-full opacity-60" 
//            style={{ transform: `rotate(${i * 45}deg)` }}></div>
//     ))}
//   </div>
// );

// const CloudIcon = () => (
//   <div className="relative w-7 h-5 mt-1">
//     <div className="absolute bottom-0 left-1 w-3 h-3 bg-slate-300 rounded-full"></div>
//     <div className="absolute bottom-1 left-2.5 w-4 h-4 bg-slate-300 rounded-full"></div>
//     <div className="absolute bottom-0 right-1 w-3 h-3 bg-slate-300 rounded-full"></div>
//     <div className="absolute bottom-0 left-2 w-4 h-2 bg-slate-300"></div>
//   </div>
// );

// const PartlyCloudyIcon = () => (
//   <div className="relative w-7 h-6">
//     <div className="absolute -top-1 -right-1 scale-75"><SunIcon /></div>
//     <div className="absolute bottom-0 left-0 scale-90"><CloudIcon /></div>
//   </div>
// );

// const StatusFace = ({ type, colorClass }) => {
//   const isHappy = type === 'happy';
//   const isSad = type === 'sad';
//   return (
//     <div className={`w-10 h-10 rounded-full border-2 border-current flex flex-col items-center justify-center ${colorClass} bg-white shadow-sm`}>
//       <div className="flex space-x-2 mb-1">
//         <div className="w-1 h-1 bg-current rounded-full"></div>
//         <div className="w-1 h-1 bg-current rounded-full"></div>
//       </div>
//       {isHappy && <div className="w-4 h-2 border-b-2 border-current rounded-full"></div>}
//       {isSad && <div className="w-4 h-2 border-t-2 border-current rounded-full mt-1"></div>}
//       {!isHappy && !isSad && <div className="w-4 h-0.5 bg-current rounded-full"></div>}
//     </div>
//   );
// };

// // --- Main Component ---

// const WeeklyWeatherComponent = () => {
//   const getIcon = (type) => {
//     if (type === '☀️') return <SunIcon />;
//     if (type === '☁️') return <CloudIcon />;
//     if (type === '⛅') return <PartlyCloudyIcon />;
//     return <SunIcon />;
//   };

//   const healthIndexes = [
//     { label: 'ခရမ်းလွန်ရောင်ခြည်', status: 'နိမ့်', color: 'text-blue-400', face: 'happy' },
//     { label: 'လေထုညစ်ညမ်းမှု', status: 'အလွန်မြင့်', color: 'text-red-500', face: 'sad' },
//     { label: 'တုပ်ကွေးမိနိုင်ချေ', status: 'မြင့်', color: 'text-orange-400', face: 'neutral' },
//     { label: 'အစားအသောက်', status: 'သတိပြု', color: 'text-blue-300', face: 'happy' },
//     { label: 'ပန်းနာရင်ကျပ်', status: 'သတိပေး', color: 'text-orange-400', face: 'neutral' },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-6 bg-slate-50 min-h-screen">

//       {/* --- Health Index --- */}
//       <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
//         <h3 className="text-lg font-bold mb-8 text-slate-800">ယနေ့ လူနေမှုဘဝနှင့် ကျန်းမာရေး အညွှန်းကိန်း</h3>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
//           {healthIndexes.map((item, idx) => (
//             <div key={idx} className="flex flex-col items-center space-y-4">
//               <StatusFace type={item.face} colorClass={item.color} />
//               <div className="text-center">
//                 <p className={`text-xs font-bold ${item.color}`}>{item.status}</p>
//                 <p className="text-[11px] text-slate-500 mt-1 font-medium">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default WeeklyWeatherComponent;


// import React from 'react';

// // --- CSS Icons Components (အရင်အတိုင်းဖြစ်သည်) ---
// const SunIcon = () => (
//   <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
//     <div className="w-3 h-3 bg-yellow-400 rounded-full z-10 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
//     {[...Array(8)].map((_, i) => (
//       <div key={i} className="absolute w-0.5 h-5 bg-yellow-400 rounded-full opacity-60" 
//            style={{ transform: `rotate(${i * 45}deg)` }}></div>
//     ))}
//   </div>
// );

// const StatusFace = ({ type, colorClass }) => {
//   const isHappy = type === 'happy';
//   const isSad = type === 'sad';
//   return (
//     <div className={`w-10 h-10 rounded-full border-2 border-current flex flex-col items-center justify-center ${colorClass} bg-white shadow-sm shrink-0`}>
//       <div className="flex space-x-2 mb-1">
//         <div className="w-1 h-1 bg-current rounded-full"></div>
//         <div className="w-1 h-1 bg-current rounded-full"></div>
//       </div>
//       {isHappy && <div className="w-4 h-2 border-b-2 border-current rounded-full"></div>}
//       {isSad && <div className="w-4 h-2 border-t-2 border-current rounded-full mt-1"></div>}
//       {!isHappy && !isSad && <div className="w-4 h-0.5 bg-current rounded-full"></div>}
//     </div>
//   );
// };

// // --- Main Component ---
// const WeeklyWeatherComponent = () => {
//   const healthIndexes = [
//     { label: 'ခရမ်းလွန်ရောင်ခြည်', status: 'နိမ့်', color: 'text-blue-400', face: 'happy' },
//     { label: 'လေထုညစ်ညမ်းမှု', status: 'အလွန်မြင့်', color: 'text-red-500', face: 'sad' },
//     { label: 'တုပ်ကွေးမိနိုင်ချေ', status: 'မြင့်', color: 'text-orange-400', face: 'neutral' },
//     { label: 'အစားအသောက်', status: 'သတိပြု', color: 'text-blue-300', face: 'happy' },
//     { label: 'ပန်းနာရင်ကျပ်', status: 'သတိပေး', color: 'text-orange-400', face: 'neutral' },
//     { label: 'နှလုံးရောဂါ', status: 'သတိပေး', color: 'text-orange-400', face: 'neutral' }, // Item ထပ်တိုးကြည့်ခြင်း
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-6 bg-slate-50 min-h-screen">

//       {/* --- Life & Health Index Section --- */}
//       <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm overflow-hidden">
//         <h3 className="text-lg font-bold mb-8 text-slate-800 px-2">ယနေ့ လူနေမှုဘဝနှင့် ကျန်းမာရေး အညွှန်းကိန်း</h3>
        
//         {/* Scroll Container */}
//         <div className="overflow-x-auto pb-4 scrollbar-hide">
//           {/* flex-nowrap: အောက်ကိုမဆင်းစေရန်
//             min-w-max: Content အတိုင်း အကျယ်ယူရန်
//           */}
//           <div className="flex flex-nowrap items-start space-x-8 md:space-x-12 min-w-max px-4">
//             {healthIndexes.map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center space-y-4 w-24 shrink-0">
//                 <StatusFace type={item.face} colorClass={item.color} />
//                 <div className="text-center">
//                   <p className={`text-xs font-bold ${item.color} whitespace-nowrap`}>
//                     {item.status}
//                   </p>
//                   <p className="text-[11px] text-slate-500 mt-1 font-medium leading-tight">
//                     {item.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default WeeklyWeatherComponent;





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
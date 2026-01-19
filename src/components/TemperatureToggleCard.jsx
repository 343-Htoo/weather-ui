// import React, { useState } from 'react';

// const TemperatureToggleCard = () => {
//   // 'today' သို့မဟုတ် 'tomorrow' ဖြစ်နိုင်သည်
//   const [activeDay, setActiveDay] = useState('today');

//   const toggleDay = () => {
//     setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
//   };

//   return (
//     <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2rem] p-5 md:p-8 border border-slate-100 mb-8 shadow-sm overflow-hidden transition-all duration-500">
      
//       {/* Header Label */}
//       <div className="mb-6">
//         <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">
//           {activeDay === 'today' ? 'လက်ရှိအခြေအနေ' : 'မနက်ဖြန်ခန့်မှန်းချက်'}
//         </span>
//       </div>

//       <div className="flex items-center justify-between relative">
        
//         {/* --- Today Section --- */}
//         <div className={`transition-all duration-500 ease-in-out flex items-center ${
//           activeDay === 'today' ? 'w-[70%] opacity-100' : 'w-[20%] opacity-40 grayscale'
//         }`}>
//           <div className="flex flex-col md:flex-row md:items-center">
//             <div className="flex items-center">
//               <span className={`${activeDay === 'today' ? 'text-6xl md:text-8xl' : 'text-3xl'} font-black text-slate-900 tracking-tighter transition-all`}>
//                 2.4°
//               </span>
//               <span className={`${activeDay === 'today' ? 'text-5xl md:text-6xl' : 'text-2xl'} ml-3 transition-all`}>☀️</span>
//             </div>
            
//             {activeDay === 'today' && (
//               <div className="md:ml-6 md:border-l border-slate-200 md:pl-6 mt-2 md:mt-0 animate-fadeIn">
//                 <p className="text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//                 <p className="text-xs text-slate-400 mt-1">အနိမ့်ဆုံး -5° / အမြင့်ဆုံး 2°</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* --- Toggle Button (Center) --- */}
//         <div className="absolute left-1/2 -translate-x-1/2 z-10">
//             <button 
//               onClick={toggleDay}
//               className="bg-white border border-slate-200 shadow-md rounded-full p-2 hover:bg-slate-50 active:scale-95 transition-all group"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className={`h-5 w-5 text-slate-400 transition-transform duration-500 ${activeDay === 'tomorrow' ? 'rotate-180' : ''}`} 
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//         </div>

//         {/* --- Tomorrow Section --- */}
//         <div className={`transition-all duration-500 ease-in-out flex items-center justify-end ${
//           activeDay === 'tomorrow' ? 'w-[70%] opacity-100' : 'w-[20%] opacity-40 grayscale'
//         }`}>
//           <div className="flex flex-col md:flex-row-reverse md:items-center text-right">
//             <div className="flex items-center justify-end">
//               <span className={`${activeDay === 'tomorrow' ? 'text-2xl md:text-3xl mr-3' : 'text-xl'}`}>☀️</span>
//               <div className="flex flex-col items-end">
//                 <span className="text-[10px] font-bold text-slate-400 uppercase">မနက်ဖြန်</span>
//                 <span className={`${activeDay === 'tomorrow' ? 'text-5xl md:text-7xl' : 'text-2xl'} font-black text-slate-900 tracking-tighter transition-all`}>
//                   -4°/4°
//                 </span>
//               </div>
//             </div>

//             {activeDay === 'tomorrow' && (
//               <div className="md:mr-6 md:border-r border-slate-200 md:pr-6 mt-2 md:mt-0 animate-fadeIn">
//                 <p className="text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//                 <p className="text-xs text-blue-500 font-bold mt-1">☔ 10%</p>
//               </div>
//             )}
//           </div>
//         </div>

//       </div>

//       {/* Optional: Separator Line (Vertical) */}
//       <div className="absolute left-1/2 top-0 bottom-0 border-l border-slate-100 -z-0"></div>
//     </div>
//   );
// };

// export default TemperatureToggleCard;



// import React, { useState } from 'react';

// const TemperatureToggleCard = () => {
//   // Mobile View မှာပဲ ဒီ state ကို သုံးပြီး toggle လုပ်မှာဖြစ်ပါတယ်
//   const [activeDay, setActiveDay] = useState('today');

//   const toggleDay = () => {
//     setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
//   };

//   return (
//     <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2rem] p-5 md:p-8 border border-slate-100 mb-8 shadow-sm overflow-hidden transition-all duration-500 relative">
      
//       {/* Header Label - Mobile မှာ active ဖြစ်တဲ့စာသားပြမယ်၊ Desktop မှာ နှစ်ခုလုံးအတွက်ပြမယ် */}
//       <div className="mb-6 flex justify-between items-center">
//         <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">
//           <span className="md:hidden">
//             {activeDay === 'today' ? 'လက်ရှိ 01.17' : 'မနက်ဖြန် 01.18'}
//           </span>
//           <span className="hidden md:inline">လက်ရှိ 01.17</span>
//         </span>
        
//         <span className="hidden md:inline bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-wider">
//           မနက်ဖြန် 01.18
//         </span>
//       </div>

//       <div className="flex items-center justify-between relative">
        
//         {/* --- Today Section --- 
//             Mobile: active ဖြစ်ရင် 75%, မဖြစ်ရင် 20%
//             Desktop (md): အမြဲတမ်း 1/2 (50%)
//         */}
//         <div className={`transition-all duration-500 ease-in-out flex items-center ${
//           activeDay === 'today' 
//             ? 'w-[75%] md:w-1/2 opacity-100' 
//             : 'w-[20%] md:w-1/2 opacity-40 md:opacity-100 grayscale md:grayscale-0'
//         }`}>
//           <div className="flex flex-col md:flex-row md:items-center">
//             <div className="flex items-center">
//               <span className={`font-black text-slate-900 tracking-tighter transition-all ${
//                 activeDay === 'today' ? 'text-5xl md:text-7xl' : 'text-2xl md:text-7xl'
//               }`}>
//                 2.4°
//               </span>
//               <span className={`ml-3 transition-all ${
//                 activeDay === 'today' ? 'text-4xl md:text-5xl' : 'text-xl md:text-5xl'
//               }`}>☀️</span>
//             </div>
            
//             {/* Desktop မှာ အမြဲပေါ်ပြီး Mobile မှာ active ဖြစ်မှပေါ်မယ် */}
//             <div className={`md:ml-6 md:border-l border-slate-200 md:pl-6 mt-2 md:mt-0 transition-opacity duration-500 ${
//               activeDay === 'today' ? 'opacity-100 block' : 'opacity-0 hidden md:block'
//             }`}>
//               <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//               <p className="text-[10px] md:text-xs text-slate-400 mt-1 italic">최저 -5° / 최고 2°</p>
//             </div>
//           </div>
//         </div>

//         {/* --- Toggle Button (Mobile Only) --- */}
//         <div className="absolute left-1/2 -translate-x-1/2 z-20 md:hidden">
//             <button 
//               onClick={toggleDay}
//               className="bg-white border border-slate-200 shadow-lg rounded-full p-2 active:scale-90 transition-all"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className={`h-4 w-4 text-slate-500 transition-transform duration-500 ${activeDay === 'tomorrow' ? 'rotate-180' : ''}`} 
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//         </div>

//         {/* --- Desktop Divider Line --- */}
//         <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l border-slate-100 -z-0"></div>

//         {/* --- Tomorrow Section --- */}
//         <div className={`transition-all duration-500 ease-in-out flex items-center justify-end ${
//           activeDay === 'tomorrow' 
//             ? 'w-[75%] md:w-1/2 opacity-100' 
//             : 'w-[20%] md:w-1/2 opacity-40 md:opacity-100 grayscale md:grayscale-0'
//         }`}>
//           <div className="flex flex-col md:flex-row-reverse md:items-center text-right">
//              <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//               <p className="text-[10px] md:text-xs text-blue-500 font-bold mt-1">☔ 10% / 30%</p>
//             <div className="flex items-center justify-end">
//               <span className={`transition-all ${
//                 activeDay === 'tomorrow' ? 'text-2xl md:text-4xl mr-3' : 'text-lg md:text-4xl'
//               }`}>☀️</span>
//               <div className="flex flex-col items-end">
//                 <span className={`font-black text-slate-900 tracking-tighter transition-all ${
//                   activeDay === 'tomorrow' ? 'text-4xl md:text-5xl' : 'text-xl md:text-5xl'
//                 }`}>
//                   -4°/4°
//                 </span>
//               </div>
//             </div>

//             <div className={`md:mr-6 md:border-r border-slate-200 md:pr-6 mt-2 md:mt-0 transition-opacity duration-500 ${
//               activeDay === 'tomorrow' ? 'opacity-100 block' : 'opacity-0 hidden md:block'
//             }`}>
             
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TemperatureToggleCard;




// import React, { useState } from 'react';

// const TemperatureToggleCard = () => {
//   const [activeDay, setActiveDay] = useState('today');

//   const toggleDay = () => {
//     setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
//   };

//   return (
//     <div className="bg-white rounded-[2rem] p-5 md:p-8 border border-slate-100 mb-8 shadow-sm overflow-hidden relative transition-all duration-700 ease-in-out">
      
//       {/* Header Labels */}
//       <div className="mb-8 flex justify-between items-center px-2">
//         <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
//           activeDay === 'today' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
//         }`}>
//           လက်ရှိ 01.17
//         </span>
        
//         <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
//           activeDay === 'tomorrow' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
//         }`}>
//           မနက်ဖြန် 01.18
//         </span>
//       </div>

//       <div className="flex items-center relative h-32 md:h-40">
        
//         {/* --- Today Section (80% / 20%) --- */}
//         <div 
//           onClick={() => activeDay === 'tomorrow' && toggleDay()}
//           className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center cursor-pointer ${
//             activeDay === 'today' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale'
//           }`}
//         >
//           <div className="flex items-center">
//             <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
//               activeDay === 'today' ? 'text-6xl md:text-8xl' : 'text-2xl md:text-8xl'
//             }`}>2.4°</span>
//             <span className={`ml-2 transition-all duration-700 ${
//               activeDay === 'today' ? 'text-4xl md:text-6xl' : 'text-xl md:text-6xl'
//             }`}>☀️</span>
//           </div>
          
//           <div className={`mt-2 transition-all duration-700 delay-100 ${
//             activeDay === 'today' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
//           }`}>
//             <p className="text-sm md:text-lg font-bold text-slate-700">ကြည်လင်သည်</p>
//             <p className="text-[10px] md:text-xs text-slate-400 italic">최저 -5° / 최고 2°</p>
//           </div>
//         </div>

//         {/* --- Central Transition Line & Button --- */}
//         <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center z-20">
//           {/* Vertical Divider Line */}
//           <div className="h-full border-l border-slate-100"></div>
          
//           {/* Toggle Button */}
//           <button 
//             onClick={(e) => { e.stopPropagation(); toggleDay(); }}
//             className="absolute left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-xl rounded-full p-2.5 active:scale-90 transition-all duration-500 hover:border-slate-300 md:hidden"
//           >
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className={`h-4 w-4 text-slate-600 transition-transform duration-700 cubic-bezier(0.68,-0.55,0.265,1.55) ${
//                 activeDay === 'tomorrow' ? 'rotate-180' : ''
//               }`} 
//               fill="none" viewBox="0 0 24 24" stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* --- Tomorrow Section (80% / 20%) --- */}
//         <div 
//           onClick={() => activeDay === 'today' && toggleDay()}
//           className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center items-end text-right cursor-pointer ${
//             activeDay === 'tomorrow' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale'
//           }`}
//         >
//           <div className="flex items-center">
//              <span className={`transition-all duration-700 ${
//               activeDay === 'tomorrow' ? 'text-3xl md:text-5xl mr-2' : 'text-lg md:text-5xl mr-0'
//             }`}>☀️</span>
//             <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
//               activeDay === 'tomorrow' ? 'text-5xl md:text-7xl' : 'text-xl md:text-7xl'
//             }`}>-4°/4°</span>
//           </div>

//           <div className={`mt-2 transition-all duration-700 delay-100 ${
//             activeDay === 'tomorrow' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
//           }`}>
//             <p className="text-sm md:text-lg font-bold text-slate-700">ကြည်လင်သည်</p>
//             <p className="text-[10px] md:text-xs text-blue-500 font-bold">☔ 10% / 30%</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TemperatureToggleCard;




// import React, { useState } from 'react';

// const TemperatureToggleCard = () => {
//   const [activeDay, setActiveDay] = useState('today');

//   const toggleDay = () => {
//     setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
//   };

//   return (
//     <div className="bg-white rounded-[2rem] p-5 md:p-8 border border-slate-100 mb-8 shadow-sm overflow-hidden relative transition-all duration-700 ease-in-out">
      
//       {/* Header Labels */}
//       <div className="mb-8 flex justify-between items-center px-2">
//         <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
//           activeDay === 'today' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
//         }`}>
//           လက်ရှိ 01.17
//         </span>
        
//         <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
//           activeDay === 'tomorrow' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
//         }`}>
//           မနက်ဖြန် 01.18
//         </span>
//       </div>

//       <div className="flex items-center relative h-32 md:h-40">
        
//         {/* --- Today Section (80% / 20%) --- */}
//         <div 
//           onClick={() => activeDay === 'tomorrow' && toggleDay()}
//           className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center cursor-pointer ${
//             activeDay === 'today' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale'
//           }`}
//         >
//           <div className="flex items-center">
//             <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
//               activeDay === 'today' ? 'text-6xl md:text-8xl' : 'text-2xl md:text-8xl'
//             }`}>2.4°</span>
//             <span className={`ml-2 transition-all duration-700 ${
//               activeDay === 'today' ? 'text-4xl md:text-6xl' : 'text-xl md:text-6xl'
//             }`}>☀️</span>
//           </div>
//           <div className={`mt-2 transition-all duration-700 delay-100 ${
//             activeDay === 'today' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
//           }`}>
//             <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//             <p className="text-[10px] md:text-xs text-slate-400 italic">최저 -5° / 최고 2°</p>
//           </div>
//         </div>

//         {/* --- Dynamic Central Divider & Button (လိုက်ရွေ့မည့်အပိုင်း) --- */}
//         <div 
//           className="absolute top-0 bottom-0 z-20 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
//           style={{ 
//             // Mobile မှာ 80% သို့ 20% နေရာသို့ ခလုတ်ရွေ့မည်၊ Desktop မှာ 50% မှာ ငြိမ်နေမည်
//             left: activeDay === 'today' ? '80%' : '20%',
//             // Desktop screen ရောက်ရင် 50% မှာပဲ ရှိနေစေရန် Media Query သဘောမျိုး class နဲ့ ချိန်မည်
//           }}
//         >
//           {/* Vertical Line */}
//           <div className="h-full border-l border-slate-100 md:hidden"></div>
//           {/* Desktop divider (Screen ကြီးရင် အလယ်မှာပဲ ထားမယ်) */}
//           <div className="hidden md:block fixed left-1/2 top-0 bottom-0 border-l border-slate-100"></div>
          
//           {/* Toggle Button */}
//           <button 
//             onClick={(e) => { e.stopPropagation(); toggleDay(); }}
//             className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-xl rounded-full p-2.5 active:scale-90 transition-all duration-500 hover:border-slate-300 md:hidden"
//           >
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className={`h-4 w-4 text-slate-600 transition-transform duration-700 ${
//                 activeDay === 'tomorrow' ? 'rotate-180' : ''
//               }`} 
//               fill="none" viewBox="0 0 24 24" stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* --- Tomorrow Section (80% / 20%) --- */}
//         <div 
//           onClick={() => activeDay === 'today' && toggleDay()}
//           className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center items-end text-right cursor-pointer ${
//             activeDay === 'tomorrow' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale'
//           }`}
//         >
//           <div className="flex items-center">
//              <span className={`transition-all duration-700 ${
//               activeDay === 'tomorrow' ? 'text-3xl md:text-5xl mr-2' : 'text-lg md:text-5xl mr-0'
//             }`}>☀️</span>
//             <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
//               activeDay === 'tomorrow' ? 'text-5xl md:text-7xl' : 'text-xl md:text-7xl'
//             }`}>-4°/4°</span>
//           </div>
//           <div className={`mt-2 transition-all duration-700 delay-100 ${
//             activeDay === 'tomorrow' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
//           }`}>
//             <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
//             <p className="text-[10px] md:text-xs text-blue-500 font-bold">☔ 10% / 30%</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TemperatureToggleCard;



import React, { useState } from 'react';

const TemperatureToggleCard = () => {
  const [activeDay, setActiveDay] = useState('today');

  const toggleDay = () => {
    setActiveDay(prev => prev === 'today' ? 'tomorrow' : 'today');
  };

  return (
    <div className="bg-white p-5 md:p-8 mb-8  overflow-hidden relative transition-all duration-700 ease-in-out">

      
      
      {/* Header Labels */}
      <div className="mb-8 flex justify-between items-center px-2">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
          activeDay === 'today' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
        }`}>
          လက်ရှိ 01.17
        </span>
        
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-500 ${
          activeDay === 'tomorrow' ? 'bg-white text-slate-900 border-slate-200' : 'text-slate-400 border-transparent opacity-50 md:opacity-100 md:border-slate-100'
        }`}>
          မနက်ဖြန် 01.18
        </span>
      </div>

      <div className="flex items-center relative h-32 md:h-40">
        
        {/* --- Today Section --- */}
        <div 
          onClick={() => activeDay === 'tomorrow' && toggleDay()}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center cursor-pointer ${
            activeDay === 'today' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale md:grayscale-0 md:opacity-100'
          }`}
        >
          <div className="flex items-center">
            <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
              activeDay === 'today' ? 'text-6xl md:text-8xl' : 'text-2xl md:text-8xl'
            }`}>2.4°</span>
            <span className={`ml-2 transition-all duration-700 ${
              activeDay === 'today' ? 'text-4xl md:text-6xl' : 'text-xl md:text-6xl'
            }`}>☀️</span>
          </div>
          <div className={`mt-2 transition-all duration-700 ${
            activeDay === 'today' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
          }`}>
            <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
            <p className="text-[10px] md:text-xs text-skyblue-400 italic mt-1"> -5° / 2°</p>
          </div>
        </div>

        {/* --- Central Divider & Button --- */}
        {/* Mobile မှာ 80/20 ရွေ့မည်၊ Desktop (md) မှာ 50% မှာ အမြဲတမ်း ငြိမ်နေမည် */}
        <div 
          className="absolute top-0 bottom-0 z-20 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:left-1/2"
          style={{ 
            left: typeof window !== 'undefined' && window.innerWidth < 768 
                  ? (activeDay === 'today' ? '80%' : '20%') 
                  : '' 
          }}
        >
          {/* Vertical Line */}
          <div className="h-full border-l border-gray-300"></div>
          
          {/* Toggle Button - md:hidden ဖြင့် Desktop မှာ ဖျောက်ထားသည် */}
          <button 
            onClick={(e) => { e.stopPropagation(); toggleDay(); }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-xl rounded-full p-2.5 active:scale-90 transition-all duration-500 hover:border-slate-300 md:hidden"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-slate-600 transition-transform duration-700 ${
                activeDay === 'tomorrow' ? 'rotate-180' : ''
              }`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* --- Tomorrow Section --- */}
        <div 
          onClick={() => activeDay === 'today' && toggleDay()}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center items-end text-right cursor-pointer ${
            activeDay === 'tomorrow' ? 'w-[80%] md:w-1/2 opacity-100' : 'w-[20%] md:w-1/2 opacity-30 grayscale md:grayscale-0 md:opacity-100'
          }`}
        >
          <div className="flex items-center">
             <span className={`transition-all duration-700 ${
              activeDay === 'tomorrow' ? 'text-3xl md:text-5xl mr-2' : 'text-lg md:text-5xl mr-0'
            }`}>☀️</span>
            <span className={`font-black text-slate-900 tracking-tighter transition-all duration-700 ${
              activeDay === 'tomorrow' ? 'text-5xl md:text-7xl' : 'text-xl md:text-4xl'
            }`}>-4°/4°</span>
          </div>
          <div className={`mt-2 transition-all duration-700 ${
            activeDay === 'tomorrow' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
          }`}>
            <p className="text-sm md:text-lg font-bold text-slate-700 leading-tight">ကြည်လင်သည်</p>
            <p className="text-[10px] md:text-xs text-blue-500 font-bold mt-2">☔ 10% / 30%</p>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default TemperatureToggleCard;
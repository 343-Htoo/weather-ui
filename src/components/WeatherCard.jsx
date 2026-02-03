
// import React from 'react';

// const WeatherCard = ({ title, time, updateTime, mapImg }) => {
//   return (
//     <div className="flex flex-col w-full font-sans">
//       {/* Title & Detail Button */}
//       <div className="flex justify-between items-end mb-3">
//         <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">{title}</h2>
//         <button className="text-[15px] text-gray-400 flex items-center hover:text-gray-700 transition-colors">
//           အသေးစိတ်ကြည့်ရန် <span className="ml-1 text-lg leading-none">›</span>
//         </button>
//       </div>

//       {/* Map Content */}
//       <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-sm group">
//         <img 
//           src={mapImg} 
//           alt={title} 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
        
//         {/* Playback Controller */}
//         <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl h-12 flex items-center px-3 gap-3">
//           <button className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
//             <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </button>
          
//           <div className="flex flex-1 justify-between items-center text-[13px] font-medium text-white">
//             <div className="bg-[#00ff95] text-black px-2 py-0.5 rounded leading-tight font-bold flex items-center gap-1">
//               <span className="text-[10px] opacity-70">တနင်္ဂနွေ</span> {time}
//             </div>
//             <span className="opacity-60">၁၈:၂၀</span>
//             <span className="opacity-60">၁၈:၅၀</span>
//             <span className="opacity-60">၁၉:၂၀</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer Meta */}
//       <div className="mt-3 text-[12px] text-gray-400">
//         <span className="text-blue-500 font-semibold">မိုးလေဝသနှင့်ဇလဗေဒ</span> မှ ထုတ်ပြန်ချက်၊ 
//         နောက်ဆုံးရရှိချိန် <span className="ml-1">{updateTime}</span>
//       </div>
//     </div>
//   );
// };

// export default function WeatherDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-10">
     
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
//         <WeatherCard 
//           title="ဂြိုဟ်တုပုံရိပ်" 
//           time="၁၇:၃၀" 
//           updateTime="၂၀၂၆.၀၁.၂၅. ၁၉:၃၀"
//           mapImg="/satellite-image.jpg" 
//         />

//         <WeatherCard 
//           title="ရေဒါပုံရိပ်" 
//           time="၁၇:၅၀" 
//           updateTime="၂၀၂၆.၀၁.၂၅. ၁၉:၄၀"
//           mapImg="/radar-image.jpg" 
//         />
        
//       </div>
//     </div>
//   );
// }




import React from 'react';

const WeatherCard = ({ title, time, updateTime, mapImg }) => {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Title & Detail Button */}
      <div className="flex justify-between items-end ">
        <h2 className="text-[15px] md:text-[20px] mb-3 ml-3 font-bold text-gray-900 tracking-tight">{title}</h2>
        <button className="text-[14px] mb-3 mr-2 text-gray-400 flex items-center hover:text-gray-700 transition-colors">
          အသေးစိတ်ကြည့်ရန် <span className="ml-1 text-lg leading-none">›</span>
        </button>
      </div>

      {/* Map Content - aspect-square က Web မှာ ပုံကြီးလွန်းနေရင် aspect-video ပြောင်းသုံးနိုင်ပါတယ် */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-sm group border border-gray-200">
        <img 
          src={mapImg} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Playback Controller */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl h-12 flex items-center px-3 gap-2 md:gap-3">
          <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          
          <div className="flex flex-1 justify-between items-center text-[11px] md:text-[13px] font-medium text-white truncate">
            <div className="bg-[#00ff95] text-black px-2 py-0.5 rounded leading-tight font-bold flex items-center gap-1 shrink-0">
              <span className="text-[9px] md:text-[10px] opacity-70">တနင်္ဂနွေ</span> {time}
            </div>
            <span className="opacity-60">၁၈:၂၀</span>
            <span className="opacity-60">၁၈:၅၀</span>
            <span className="opacity-60">၁၉:၂၀</span>
          </div>
        </div>
      </div>
      
      {/* Footer Meta */}
      <div className="mt-3 text-[11px] md:text-[12px] text-gray-400">
        <span className="text-blue-500 font-semibold">မိုးလေဝသနှင့်ဇလဗေဒ</span> မှ ထုတ်ပြန်ချက်၊ 
        <br className="md:hidden" /> {/* Mobile မှာ စာကြောင်းဆင်းပေးဖို့ */}
        နောက်ဆုံးရရှိချိန် <span className="ml-1">{updateTime}</span>
      </div>
    </div>
  );
};

export default function WeatherDashboard() {
  return (
    <div className="min-h-screen md:p-4 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <WeatherCard 
          title="ဂြိုဟ်တုပုံရိပ်" 
          time="၁၇:၃၀" 
          updateTime="၂၀၂၆.၀၁.၂၅. ၁၉:၃၀"
          mapImg="https://via.placeholder.com/600" 
        />
         <div className='hidden lg:flex'>
                  <WeatherCard 
          title="ရေဒါပုံရိပ်" 
          time="၁၇:၅၀" 
          updateTime="၂၀၂၆.၀၁.၂၅. ၁၉:၄၀"
          mapImg="https://via.placeholder.com/600" 
        />
         </div>
      </div>
    </div>
  );
}
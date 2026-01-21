import React, { useRef } from 'react';

// --- CSS Icons: Status Faces ---
const StatusFace = ({ type, colorClass }) => {
  const isHappy = type === 'happy';
  const isSad = type === 'sad';
  return (
    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border-[1.5px] md:border-2 border-current flex flex-col items-center justify-center ${colorClass} bg-white shadow-sm shrink-0`}>
      <div className="flex space-x-1 md:space-x-1.5 mb-0.5">
        <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 bg-current rounded-full"></div>
        <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 bg-current rounded-full"></div>
      </div>
      {isHappy && <div className="w-3 h-1.5 md:w-5 md:h-2.5 border-b-[1.5px] md:border-b-2 border-current rounded-full"></div>}
      {isSad && <div className="w-3 h-1.5 md:w-5 md:h-2.5 border-t-[1.5px] md:border-t-2 border-current rounded-full mt-0.5"></div>}
      {!isHappy && !isSad && <div className="w-3 h-[1px] md:w-5 md:h-0.5 bg-current rounded-full"></div>}
    </div>
  );
};

const HealthIndexComponent = () => {
  const scrollRef = useRef(null);

  const healthIndexes = [
    { label: 'ခရမ်းလွန်ရောင်ခြည်', status: 'နိမ့်', color: 'text-blue-400', face: 'happy' },
    { label: 'လေထုညစ်ညမ်းမှု', status: 'အလွန်မြင့်', color: 'text-red-500', face: 'sad' },
    { label: 'တုပ်ကွေးမိနိုင်ချေ', status: 'မြင့်', color: 'text-orange-400', face: 'neutral' },
    { label: 'အစားအသောက်', status: 'သတိပြု', color: 'text-blue-300', face: 'happy' },
    { label: 'ပန်းနာရင်ကျပ်', status: 'သတိပေး', color: 'text-orange-400', face: 'neutral' },
    { label: 'နှလုံးကျန်းမာရေး', status: 'ကောင်းမွန်', color: 'text-green-500', face: 'happy' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = window.innerWidth < 768 ? 150 : 250;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 bg-slate-50 min-h-[300px] flex items-center">
      
      {/* Scrollbar Hidden Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 border border-slate-100 shadow-sm relative group">
        <h3 className="text-sm md:text-xl font-bold mb-6 md:mb-10 text-slate-800">ယနေ့ လူနေမှုဘဝနှင့် ကျန်းမာရေး အညွှန်းကိန်း</h3>
        
        {/* Left Arrow Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-[60%] -translate-y-1/2 z-20 bg-white/90 border border-slate-200 shadow-md rounded-full p-1.5 md:p-3 hover:bg-slate-50 active:scale-95 transition-all"
        >
          <svg className="w-3 h-3 md:w-5 md:h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Area */}
        {/* <div 
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar relative"
        >
          <div className="flex flex-nowrap items-start space-x-4 md:space-x-12 min-w-max px-6">
            {healthIndexes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3 md:space-y-5 w-16 md:w-32 shrink-0">
                <StatusFace type={item.face} colorClass={item.color} />
                <div className="text-center w-full">
                  <p className={`text-[10px] md:text-sm font-black ${item.color} uppercase tracking-tight`}>
                    {item.status}
                  </p>
                  <p className="text-[9px] md:text-[13px] text-slate-500 mt-1 font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div 
  ref={scrollRef}
  className="overflow-x-auto no-scrollbar relative"
>
  <div className="flex flex-nowrap items-start space-x-4 md:space-x-12 min-w-max px-0 md:px-6"> 
    {/* ရှေ့ကမေးခွန်းအတိုင်း mobile မှာ px-0 ဖြစ်အောင် ပြင်ထားပါတယ် */}
    
    {healthIndexes.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center space-y-3 md:space-y-5 w-20 md:w-32 shrink-0">
        
        {/* --- Circular Border Section --- */}
        <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* အောက်ခံ အရောင်ဖျော့အဝိုင်း */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              className="text-gray-100" 
            />
            {/* အပေါ်က အရောင်တောက် Progress အပိုင်း (75% ပြထားတာပါ) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset="70" 
              strokeLinecap="round"
              className={`${item.color} transition-all duration-500`}
            />
          </svg>
          
          {/* အလယ်က မျက်နှာ (Icon သို့မဟုတ် Emoji) */}
          <div className={`relative z-10 text-2xl md:text-3xl ${item.color}`}>
             {/* ဒီနေရာမှာ သင့်ရဲ့ StatusFace icon ကို ထည့်ပါ */}
             {item.face} 
          </div>
        </div>
        {/* --- End Circular Border --- */}

        <div className="text-center w-full">
          <p className={`text-[10px] md:text-sm font-black ${item.color} uppercase tracking-tight`}>
            {item.status}
          </p>
          <p className="text-[9px] md:text-[13px] text-slate-500 mt-1 font-medium leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Right Arrow Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-[60%] -translate-y-1/2 z-20 bg-white/90 border border-slate-200 shadow-md rounded-full p-1.5 md:p-3 hover:bg-slate-50 active:scale-95 transition-all"
        >
          <svg className="w-3 h-3 md:w-5 md:h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthIndexComponent;
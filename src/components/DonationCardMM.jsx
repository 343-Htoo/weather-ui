import React from 'react';

const DonationCardMM = () => {
  return (
    <div className="max-w-md mx-auto md:ml-8 bg-white p-4 font-sans leading-relaxed">
      {/* Top Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          "အမေ... သမီး အိမ်ထောင်ပြုရမှာ ကြောက်တယ်"
        </h2>
        <span className="text-[10px] border border-gray-300 rounded px-1 text-gray-400">
          AD
        </span>
      </div>

      {/* Main Content Card */}
      <div className="border-b border-t h-[150px] border-gray-100 overflow-hidden flex">
        {/* Left Side: Image */}
        <div className="w-1/2 relative">
          <img
            src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80" // ပုံလမ်းကြောင်း ထည့်ရန်
            alt="Sophie"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text Description */}
        <div className="w-1/2 p-4 flex items-center bg-white">
          <p className="text-lg font-medium mt-2 leading-snug text-gray-800">
            အသက် ၇ နှစ်အရွယ်နဲ့ <br />
            အိမ်ထောင်ပြုပြီး ကလေးယူရမှာကို <br />
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-3 px-1">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 border-b flex items-center justify-center overflow-hidden">
            <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80" alt="World Vision" className="w-6" />
          </div>
          <span className="text-sm font-semibold text-gray-700">World Vision</span>
        </div>
        
        <button className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline">
          အသေးစိတ်ကြည့်ရန်
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DonationCardMM;
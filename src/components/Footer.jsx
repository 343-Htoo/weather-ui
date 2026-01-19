import React from 'react';

const Footer = () => {
  // Menu link များ
  const links = [
    "အကောင့်ဝင်ရန်", "ဝန်ဆောင်မှုများ", "ရာသီဥတုအကူအညီ", "ကိုယ်ရေးအချက်အလက်မူဝါဒ", "Customer Center"
  ];

  return (
    <footer className="w-full bg-[#f4f6f8] py-8 px-4 border-t border-gray-200 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Navigation Links - Mobile မှာ နေရာအဆင်ပြေအောင် flex-wrap သုံးထားပါတယ် */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 gap-y-2 mb-5">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <button className={`text-[10px] md:text-xs font-bold ${link === 'ကိုယ်ရေးအချက်အလက်မူဝါဒ' ? 'text-slate-900' : 'text-slate-500'} hover:underline`}>
                {link}
              </button>
              {index < links.length - 1 && (
                <span className="text-slate-300 text-[9px]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ကုမ္ပဏီအချက်အလက်များ (Company Info) */}
        <div className="flex flex-col space-y-1 mb-6">
          <p className="text-[9px] md:text-[10px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ဤအချက်အလက်များ၏ မူပိုင်ခွင့်မှာ သက်ဆိုင်ရာဌာနတွင်ရှိပြီး ခွင့်ပြုချက်မရှိဘဲ အသုံးပြုပါက ဥပဒေအရ အရေးယူခြင်းခံရနိုင်ပါသည်။
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-2 text-[9px] md:text-[10px] text-slate-400">
            <span>လုပ်ငန်းလိုင်စင်: 220-81-62517</span>
            <span className="hidden md:inline">|</span>
            <span>ကိုယ်စားလှယ်: Choi Soo-yeon</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-2 text-[9px] md:text-[10px] text-slate-400">
            <span>လိပ်စာ: Gyeonggi-do, Seongnam-si, Bundang-gu, NAVER 1784</span>
            <span className="hidden md:inline">|</span>
            <span>ဖုန်း: 1588-3820</span>
          </div>
        </div>

        {/* Logo */}
        <div className="pt-2">
          <span className="text-lg md:text-xl font-black text-slate-300 tracking-[0.3em] uppercase opacity-70">
            NAVER
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
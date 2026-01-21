
// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const Header = () => {
//   const navLinks = [
//      { name: "ပင်မစာမျက်နှာ", active: true },
//      { name: "နှိုင်းယှဉ်ချက်", active: false },
//     { name: "လေထုအရည်အသွေး", active: false },
//      { name: "မြေပုံ", active: false },
//    ];
//    const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Scroll က 20px ထက်ကျော်သွားရင် Header ကို ဖျောက်မယ်
//       if (window.scrollY > 20) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Desktop နှင့် Mobile အတွက် Layout ညှိထားသော Main Container */}
//         <div className=" flex flex-col  lg:flex-row lg:items-center lg:justify-between h-auto lg:h-[64px]">
          
//           {/* --- Logo & Search Section --- */}
//           <div className={`fixed top-0 w-full transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
//             <div className="flex items-center gap-3">
//               {/* Logo */}
//               <div className="flex items-baseline cursor-pointer">
//                 <span className="text-2xl font-black text-black tracking-tighter">N</span>
//                 <span className="text-xl font-bold text-black ml-1">Skyblue</span>
//               </div>
              
//               {/* Tag */}
//               <div className="hidden sm:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
//                  <span className="text-gray-400 text-[10px] font-bold">#</span>
//                  <span className="text-gray-600 text-[10px] font-bold">한파</span>
//                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
//               </div>
//             </div>

//             {/* Mobile Only Icons */}
//             <div className="flex items-center gap-4 lg:hidden">
//               <button className="p-1">
//                 <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* --- Navigation Links Section (Web မှာ တစ်တန်းတည်း ဖြစ်စေမည့်အပိုင်း) --- */}

         
//           <div className=" flex-grow lg:flex lg:items-center lg:ml-10">
//             <nav className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2 lg:py-0">
//               {navLinks.map((link) => (
//                 <button 
//                   key={link.name}
//                   className={`relative whitespace-nowrap text-[15px] lg:text-[16px] font-bold transition-all flex-shrink-0 ${
//                     link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
//                   }`}
//                 >
//                   {link.name}
//                   {link.hasDot && (
//                     <span className="absolute -top-0.5 -right-1.5 w-1 h-1 bg-red-500 rounded-full"></span>
//                   )}
//                   {/* Active Underline */}
//                   {link.active && (
//                     <div className="absolute -bottom-[12px] lg:-bottom-[21px] left-0 right-0 h-[3px] bg-black"></div>
//                   )}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* --- Web Only Right Section (Search & Menu) --- */}
//           <div className="hidden lg:flex items-center gap-6">
//              <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">로그인</button>
//              <div className="grid grid-cols-3 gap-0.5 cursor-pointer">
//                 {[...Array(9)].map((_, i) => (
//                   <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
//                 ))}
//               </div>
//               <button className="p-1">
//                 <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';

// const Header = () => {
//   const navLinks = [
//     { name: "ပင်မစာမျက်နှာ", active: true },
//     { name: "နှိုင်းယှဉ်ချက်", active: false },
//     { name: "လေထုအရည်အသွေး", active: false },
//     { name: "မြေပုံ", active: false },
//   ];
  
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Scroll 30px ကျော်ရင် ဖျောက်မယ်
//       if (window.scrollY > 30) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Main Container: Mobile ရော Web ရော တစ်တန်းတည်း (flex-row) */}
//         <div className="flex items-center h-[64px] gap-4">
          
//           {/* --- Logo Section: Scroll ဆွဲရင် Mobile မှာပဲ ပျောက်သွားမယ် --- */}
//           <div className={`
//             flex items-center gap-3 transition-all duration-300 ease-in-out overflow-hidden
//             ${isVisible ? 'w-auto opacity-100' : 'w-0 opacity-0 lg:w-auto lg:opacity-100'}
//           `}>
//             <div className="flex items-baseline cursor-pointer shrink-0">
//               <span className="text-2xl font-black text-black tracking-tighter">N</span>
//               <span className="text-xl font-bold text-black ml-1">Skyblue</span>
//             </div>
            
//             {/* Tag (Desktop only) */}
//             <div className="hidden sm:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
//                <span className="text-gray-400 text-[10px] font-bold">#</span>
//                <span className="text-gray-600 text-[10px] font-bold">한파</span>
//                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
//             </div>
//           </div>

//           {/* --- Navigation Links: ဒါက အမြဲတမ်း ပေါ်နေမယ် --- */}
//           <div className="flex-grow overflow-hidden">
//             <nav className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2">
//               {navLinks.map((link) => (
//                 <button 
//                   key={link.name}
//                   className={`relative whitespace-nowrap text-[15px] lg:text-[16px] font-bold transition-all flex-shrink-0 ${
//                     link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
//                   }`}
//                 >
//                   {link.name}
//                   {link.active && (
//                     <div className="absolute -bottom-[21px] left-0 right-0 h-[3px] bg-black"></div>
//                   )}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* --- Search/Right Section: Mobile မှာ Scroll ဆွဲရင် Logo နဲ့အတူ ပျောက်မယ် --- */}
//           <div className={`
//             flex items-center gap-4 transition-all duration-300 ease-in-out overflow-hidden
//             ${isVisible ? 'w-auto opacity-100' : 'w-0 opacity-0 lg:w-auto lg:opacity-100'}
//           `}>
//             {/* Web Only Elements */}
//             <div className="hidden lg:flex items-center gap-6 shrink-0">
//                <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">로그인</button>
//                <div className="grid grid-cols-3 gap-0.5">
//                   {[...Array(9)].map((_, i) => (
//                     <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
//                   ))}
//                 </div>
//             </div>
            
//             {/* Search Icon (Mobile မှာ Scroll ဆွဲရင် ပျောက်မယ်၊ Web မှာ အမြဲပေါ်မယ်) */}
//             <button className="p-1 shrink-0">
//               <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';

// const Header = () => {
//   const navLinks = [
//     { name: "ပင်မစာမျက်နှာ", active: true },
//     { name: "နှိုင်းယှဉ်ချက်", active: false },
//     { name: "လေထုအရည်အသွေး", active: false },
//     { name: "မြေပုံ", active: false },
//   ];
  
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Mobile မှာ 20px ကျော်ရင် အပေါ်တန်းကို ဖျောက်မယ်
//       if (window.scrollY > 20) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 transition-all">
//       <div className="max-w-7xl mx-auto px-4">
        
//         {/* --- ၁။ Logo & Search Section (Mobile မှာ အပေါ်တန်း၊ Web မှာ တစ်တန်းတည်း) --- */}
//         <div className={`
//           flex items-center justify-between transition-all duration-300 ease-in-out overflow-hidden
//           ${isVisible ? 'h-[56px] opacity-100 mt-2' : 'h-0 opacity-0 lg:h-[64px] lg:opacity-100 lg:mt-0'}
//         `}>
//           <div className="flex items-center gap-3">
//             <div className="flex items-baseline cursor-pointer shrink-0">
//               <span className="text-2xl font-black text-black tracking-tighter">N</span>
//               <span className="text-xl font-bold text-black ml-1">Skyblue</span>
//             </div>
            
//             <div className="hidden sm:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
//                <span className="text-gray-400 text-[10px] font-bold">#</span>
//                <span className="text-gray-600 text-[10px] font-bold">한파</span>
//                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="hidden lg:flex items-center gap-6 shrink-0">
//                <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">로그인</button>
//                <div className="grid grid-cols-3 gap-0.5">
//                   {[...Array(9)].map((_, i) => (
//                     <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
//                   ))}
//                 </div>
//             </div>
            
//             <button className="p-1 shrink-0">
//               <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* --- ၂။ Navigation Links Section (ဒါက Mobile မှာ ဒုတိယတန်း ဖြစ်သွားမယ်) --- */}
//         <div className="flex items-center h-[48px] lg:h-[64px]">
//           <div className="flex-grow overflow-hidden">
//             <nav className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2">
//               {navLinks.map((link) => (
//                 <button 
//                   key={link.name}
//                   className={`relative whitespace-nowrap text-[15px] lg:text-[16px] font-bold transition-all flex-shrink-0 ${
//                     link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
//                   }`}
//                 >
//                   {link.name}
//                   {link.active && (
//                     <div className="absolute -bottom-[13px] lg:-bottom-[21px] left-0 right-0 h-[3px] bg-black"></div>
//                   )}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useEffect, useState } from 'react';

const Header = () => {
  const navLinks = [
    { name: "ပင်မစာမျက်နှာ", active: true },
    { name: "နှိုင်းယှဉ်ချက်", active: false },
    { name: "လေထုအရည်အသွေး", active: false },
    { name: "မြေပုံ", active: false },
  ];
  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Wrapper: 
            Mobile မှာ flex-col (၂ တန်း)
            Web (lg) မှာ flex-row (၁ တန်းတည်း) 
        */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:h-[64px] transition-all duration-300">
          
          {/* --- ၁။ Logo & Search Section --- */}
          {/* Mobile မှာ Scroll ဆွဲရင် အမြင့် 0 နဲ့ ပျောက်မယ်၊ Web မှာတော့ Nav နဲ့ တစ်တန်းတည်း အမြဲပေါ်နေမယ် */}
          <div className={`
            flex items-center justify-between transition-all duration-300 ease-in-out overflow-hidden shrink-0
            ${isVisible ? 'h-[56px] opacity-100 mt-2 lg:mt-0' : 'h-0 opacity-0 lg:h-auto lg:opacity-100'}
          `}>
            <div className="flex items-center gap-3">
              <div className="flex items-baseline cursor-pointer shrink-0">
                <span className="text-2xl font-black text-black tracking-tighter">N</span>
                <span className="text-xl font-bold text-black ml-1">Skyblue</span>
              </div>
              
              <div className="hidden sm:flex lg:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
                 <span className="text-gray-400 text-[10px] font-bold">#</span>
                 <span className="text-gray-600 text-[10px] font-bold">log</span>
                 <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              </div>
            </div>

            {/* Mobile Search Icon (Web မှာ ဖျောက်ထားမယ်) */}
            <button className="p-1 lg:hidden">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* --- ၂။ Navigation & Web Right Section --- */}
          <div className="flex flex-grow items-center justify-between h-[48px] lg:h-full lg:ml-10">
            <nav className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2 h-full">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  className={`relative whitespace-nowrap text-[15px] lg:text-[16px] font-bold transition-all flex-shrink-0 h-full ${
                    link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="flex items-center h-full">{link.name}</span>
                  {link.active && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Web Only Right Section (Login & Menu) */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
               <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">&</button>
               <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                  ))}
               </div>
               <button className="p-1">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
               </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;








// import React from 'react';

// const Header = () => {
//   const navLinks = [
//     { name: "ပင်မစာမျက်နှာ", active: true },
//     { name: "နှိုင်းယှဉ်ချက်", active: false },
//     { name: "လေထုအရည်အသွေး", active: false },
//     { name: "မြေပုံ", active: false },
//   ];

//   return (
//     <>
//       {/* ၁။ Logo Section - ပုံမှန်အတိုင်းထားမယ် (Scroll ဆွဲရင် ပါသွားမယ်) */}
//       <div className="w-full bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="flex items-baseline cursor-pointer">
//               <span className="text-2xl font-black text-black tracking-tighter">N</span>
//               <span className="text-xl font-bold text-black ml-1">Skyblue</span>
//             </div>
//             {/* Hashtag Tag */}
//             <div className="hidden sm:flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
//                <span className="text-gray-400 text-[10px] font-bold">#</span>
//                <span className="text-gray-600 text-[10px] font-bold">한파</span>
//                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
//             </div>
//           </div>
          
//           {/* Web View Right Icons */}
//           <div className="hidden lg:flex items-center gap-6">
//              <button className="text-sm font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-md">로그인</button>
//              <div className="grid grid-cols-3 gap-0.5">
//                 {[...Array(9)].map((_, i) => (
//                   <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
//                 ))}
//               </div>
//           </div>
//         </div>

        
//       </div>

//       {/* ၂။ Navigation Section - ဒါကိုပဲ Sticky ပေးမယ် */}
//       {/* ⚠️ အရေးကြီးချက်: ဒီ div ကို အပေါ်က Logo div ရဲ့ အပြင်ဘက်မှာ ထားရပါမယ် */}
//       <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm w-full">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-3">
//             {navLinks.map((link) => (
//               <button 
//                 key={link.name}
//                 className={`relative whitespace-nowrap text-[15px] font-bold transition-all flex-shrink-0 ${
//                   link.active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
//                 }`}
//               >
//                 {link.name}
//                 {link.active && (
//                   <div className="absolute -bottom-[13px] left-0 right-0 h-[3px] bg-black"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
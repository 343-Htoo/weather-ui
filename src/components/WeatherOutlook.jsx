import React, { useState } from 'react';

const WeatherOutlook = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [activeWeek, setActiveWeek] = useState('Jan W5');

  const weeks = ['Jan W5', 'Feb W1', 'Feb W2', 'Feb W3'];

  return (
    <div className="max-w-2xl mx-auto p-3 font-sans">
      <h2 className="text-xl font-bold mb-6 text-slate-800">Weather Outlook</h2>

      {/* Main Tabs (Weekly / Monthly) */}
      <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-6">
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex-1 py-3 text-sm font-bold transition-all ${
            activeTab === 'weekly' ? 'bg-slate-50 text-slate-900' : 'bg-white text-slate-400'
          } border-r border-slate-200`}
        >
          Weekly Outlook
        </button>
        <button
          onClick={() => setActiveTab('monthly')}
          className={`flex-1 py-3 text-sm font-bold transition-all ${
            activeTab === 'monthly' ? 'bg-slate-50 text-slate-900' : 'bg-white text-slate-400'
          }`}
        >
          Monthly Outlook
        </button>
      </div>

      {/* Week Selection Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8">
        {weeks.map((week) => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={`px-5 py-2 text-xs font-bold whitespace-nowrap border transition-all ${
              activeWeek === week
                ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm'
                : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
            }`}
          >
            {week}
          </button>
        ))}
      </div>

      {/* Detail Content Section */}
      <div className="space-y-4 border-l-4 border-slate-200 pl-6 py-1">
        <div className="grid grid-cols-[100px_1fr] gap-y-3">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Period</span>
          <span className="text-sm font-bold text-slate-700">01.26 ~ 02.01</span>

          <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Avg Temp</span>
          <span className="text-sm font-bold text-slate-700">-1.8 ~ 0.2° (Similar)</span>

          <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Rainfall</span>
          <span className="text-sm font-bold text-slate-700">1.0 ~ 6.7mm (Relatively low)</span>
        </div>

        {/* Descriptive Text Box */}
        <div className="mt-6 pt-6 border-t border-slate-50">
          <p className="text-[13px] leading-relaxed text-slate-600 font-medium italic">
            Affected by continental high pressure and migratory high pressure. 
            Occasional snow expected along the west coast due to topographic effects. 
            There is a 50% probability that temperatures will be similar to the average, 
            and a 40% probability for low rainfall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherOutlook;
import React from 'react';
import { Plus, Calendar } from 'lucide-react';
import { INITIAL_VISITS } from '../data';

const STATUS_STYLE: Record<string, string> = {
  Used: 'bg-gray-100 text-gray-600',
  CanceledByOwner: 'bg-red-50 text-red-600',
};

export const Visits: React.FC = () => {
  return (
    <div
      id="visits-screen-content"
      className="w-full flex flex-col px-4 pt-4 pb-4 gap-3.5 select-none relative"
    >
      {INITIAL_VISITS.map((pass) => (
        <div
          key={pass.id}
          id={`visit-card-${pass.id}`}
          className="w-full bg-white rounded-2xl p-4 flex flex-col shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-start justify-between mb-2.5">
            <h3 className="text-[18px] font-extrabold text-gray-900">
              {pass.visitorName}
            </h3>
            <span
              className={`inline-block text-[12px] font-bold px-3 py-1 rounded-full shrink-0 ml-2 ${
                STATUS_STYLE[pass.status] ?? 'bg-gray-100 text-gray-600'
              }`}
            >
              {pass.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[14px] text-gray-500 mb-1">
            <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
            <span>From: {pass.fromLabel}</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-gray-500">
            <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
            <span>To: {pass.toLabel}</span>
          </div>
        </div>
      ))}

      {/* Floating "+" action button, bottom-right */}
      <button
        type="button"
        aria-label="New pass"
        className="fixed right-4 bottom-[92px] z-30 w-14 h-14 rounded-2xl bg-[#106EAD] active:bg-[#0C5A90] shadow-[0_4px_10px_rgba(16,110,173,0.4)] flex items-center justify-center"
      >
        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export const VisitsScreen = Visits;

import React from 'react';
import { X, Ruler, CheckCircle } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeTable = [
    { uk: 6, us: 7, eu: 40, cm: 24.5, inches: 9.6 },
    { uk: 7, us: 8, eu: 41, cm: 25.5, inches: 10.0 },
    { uk: 8, us: 9, eu: 42, cm: 26.5, inches: 10.4 },
    { uk: 9, us: 10, eu: 43, cm: 27.5, inches: 10.8 },
    { uk: 10, us: 11, eu: 44.5, cm: 28.5, inches: 11.2 },
    { uk: 11, us: 12, eu: 46, cm: 29.5, inches: 11.6 }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-6 border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-forest text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg tracking-tight">MEN'S FOOTWEAR SIZING GUIDE</h3>
              <p className="text-xs text-gray-200">Standard Indian & UK Foot Measurements</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 text-brand-black uppercase font-extrabold text-[11px] border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 bg-forest text-white">UK Size (India)</th>
                  <th className="py-3 px-4">US Size</th>
                  <th className="py-3 px-4">EU Size</th>
                  <th className="py-3 px-4">Foot Length (CM)</th>
                  <th className="py-3 px-4">Inches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {sizeTable.map((row) => (
                  <tr key={row.uk} className="hover:bg-forest-subtle/30 transition-colors">
                    <td className="py-3 px-4 font-black text-forest bg-forest/5">UK {row.uk}</td>
                    <td className="py-3 px-4 text-gray-700">US {row.us}</td>
                    <td className="py-3 px-4 text-gray-700">EU {row.eu}</td>
                    <td className="py-3 px-4 text-brand-black font-semibold">{row.cm} cm</td>
                    <td className="py-3 px-4 text-gray-500">{row.inches}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3">
            <h4 className="font-bold text-sm text-brand-black flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-forest" />
              <span>How to Measure Your Foot at Home</span>
            </h4>
            <ol className="list-decimal list-inside text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>Place a blank sheet of paper flat on a hard floor against a straight wall.</li>
              <li>Stand on the paper with your heel firmly touching the wall behind you.</li>
              <li>Use a pen held vertically to mark the longest tip of your longest toe.</li>
              <li>Measure the exact distance from the edge of the paper (wall) to the mark in centimetres.</li>
              <li>Compare your measurement against the chart above. If between two sizes, select the larger size.</li>
            </ol>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
            <span>Free doorstep exchange available if your size doesn't fit perfectly.</span>
            <button
              onClick={onClose}
              className="bg-forest text-white px-5 py-2 rounded-xl font-bold text-xs hover:bg-forest-light transition-colors"
            >
              GOT IT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

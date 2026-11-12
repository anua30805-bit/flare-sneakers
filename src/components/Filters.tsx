import React from 'react';
import { FilterState } from '../types/product';
import { CATEGORIES, SIZES, COLOR_FILTERS, PRICE_RANGES } from '../data/products';
import { X, RotateCcw } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  onChange: (updated: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export const Filters: React.FC<FiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalResults
}) => {
  const hasActiveFilters =
    filters.category !== 'All Sneakers' ||
    filters.priceRange !== 'All Prices' ||
    filters.size !== null ||
    filters.color !== null ||
    filters.searchQuery !== '';

  return (
    <div className="space-y-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div>
          <h3 className="font-extrabold text-sm uppercase tracking-wider text-brand-black">Filters</h3>
          <p className="text-xs text-gray-500 mt-0.5">{totalResults} Men's Sneakers</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-forest-light transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">Categories</h4>
        <div className="space-y-1.5">
          {CATEGORIES.map((category) => {
            const isSelected = filters.category === category;
            return (
              <button
                key={category}
                onClick={() => onChange({ category })}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-forest text-white font-bold shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-black'
                }`}
              >
                <span>{category}</span>
                {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Active</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">Price (INR)</h4>
        <div className="space-y-1.5">
          {PRICE_RANGES.map((range) => {
            const isSelected = filters.priceRange === range.label;
            return (
              <label
                key={range.label}
                className="flex items-center gap-2.5 text-xs text-gray-700 cursor-pointer py-1 px-1 rounded hover:text-forest"
              >
                <input
                  type="radio"
                  name="priceRange"
                  checked={isSelected}
                  onChange={() => onChange({ priceRange: range.label })}
                  className="w-4 h-4 text-forest accent-forest focus:ring-forest cursor-pointer"
                />
                <span className={isSelected ? 'font-bold text-forest' : 'font-medium'}>
                  {range.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Shoe Sizes */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">Men's Size (UK)</h4>
          {filters.size && (
            <button
              onClick={() => onChange({ size: null })}
              className="text-[11px] text-gray-400 hover:text-gray-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((size) => {
            const isSelected = filters.size === size;
            return (
              <button
                key={size}
                onClick={() => onChange({ size: isSelected ? null : size })}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  isSelected
                    ? 'border-forest bg-forest text-white shadow-sm'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                UK {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colours */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">Colour</h4>
          {filters.color && (
            <button
              onClick={() => onChange({ color: null })}
              className="text-[11px] text-gray-400 hover:text-gray-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {COLOR_FILTERS.map((col) => {
            const isSelected = filters.color === col.name;
            return (
              <button
                key={col.name}
                onClick={() => onChange({ color: isSelected ? null : col.name })}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border transition-all ${
                  isSelected
                    ? 'border-forest bg-forest text-white ring-2 ring-forest/30'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0"
                  style={{ backgroundColor: col.hex }}
                />
                <span>{col.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-100 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Active Criteria:</div>
          <div className="flex flex-wrap gap-1.5">
            {filters.category !== 'All Sneakers' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-forest-subtle text-forest font-semibold px-2.5 py-1 rounded-full">
                {filters.category}
                <button onClick={() => onChange({ category: 'All Sneakers' })}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.priceRange !== 'All Prices' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-forest-subtle text-forest font-semibold px-2.5 py-1 rounded-full">
                {filters.priceRange}
                <button onClick={() => onChange({ priceRange: 'All Prices' })}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.size !== null && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-forest-subtle text-forest font-semibold px-2.5 py-1 rounded-full">
                Size: UK {filters.size}
                <button onClick={() => onChange({ size: null })}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.color !== null && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-forest-subtle text-forest font-semibold px-2.5 py-1 rounded-full">
                Color: {filters.color}
                <button onClick={() => onChange({ color: null })}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

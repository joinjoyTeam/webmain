import React from 'react';
import './FilterBar.css';

function GroupFilters({ groups, selectedGroup, onSelect }) {
  return (
    <div className="filter-row" aria-label="Group filters">
    
      <span className="focus:outline-none focus:ring-0 inline-flex items-center gap-1 rounded-xl bg-[#1877F2] px-5 py-2 text-base font-semibold text-white shadow-md shadow-[#1877F2]/30 transition ">
      KRABI HIGHLIGHTS ROUTES</span>
      <div className="filter-row-scroll">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            className={`filter-chip filter-chip--micro ${selectedGroup === group ? 'filter-chip--active' : ''}`}
            onClick={() => onSelect(group)}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GroupFilters;

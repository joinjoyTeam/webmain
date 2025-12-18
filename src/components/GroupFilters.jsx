import React from 'react';
import './FilterBar.css';
import { normalizeGroupKey } from '../utils/groupKeys';

function formatLabel(text) {
  return text
    .replace(/And/g, " & ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, c => c.toUpperCase())
}


function GroupFilters({ groups, selectedGroup, onSelect }) {
  return (
    <div className="
        filter-row 
        flex 
        flex-col 
       
        md:items-center   ✅ ตรงนี้สำคัญที่สุด
        md:gap-4
      "
      aria-label="Group filters">
   
    <div className="flex justify-center">
    
        <span className="
          inline-flex 
          items-center 
          gap-1 
          rounded-xl 
          bg-[#1877F2] 
          px-12 md:px-20  
          py-2 
          text-base 
          md:text-lg 
          font-semibold 
          text-white 
          shadow-md 
          shadow-[#1877F2]/30 
          transition
          whitespace-nowrap
        ">
          KRABI HIGHLIGHTS ROUTES
        </span>
      
      </div>
      <div className="filter-row-scroll">
        {groups.map((group) => {
          const groupKey = normalizeGroupKey(group);
          return (
          <button
            key={group}
            type="button"
            className={`filter-chip filter-chip--micro ${selectedGroup === groupKey ? 'filter-chip--active' : ''}`}
            onClick={() => onSelect(groupKey)}
          >
            {formatLabel(group)}
          </button>
          );
        })}
      </div>
    </div>
  );
}

export default GroupFilters;

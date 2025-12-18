import React from 'react';
import './FilterBar.css';

const groupSpecialTags = {
  Shows: ['FireShow', 'ThaiBoxing'],
  Beach: ['Sunset', 'Iconic'],
  Island: ['4 Islands', 'Iconic'],
};

function SpecialFilters({ specialTags, selectedTags, onToggleTag, selectedGroup }) {
  const relatedTags = selectedGroup ? groupSpecialTags[selectedGroup] || [] : [];

  return (
    <div className="filter-row" aria-label="Special filters">
      <div className="filter-row-title">Special</div>
      <div className="filter-row-scroll">
        {specialTags.map((tag) => {
          const active = selectedTags.includes(tag);
          const isRelated = relatedTags.includes(tag);
          const isUnrelated = relatedTags.length > 0 && !isRelated;
          const className = [
            'filter-chip',
            'filter-chip--outline',
            'filter-chip--micro',
            active ? 'filter-chip--active' : '',
            isRelated && !active ? 'filter-chip--related' : '',
            isUnrelated && !active ? 'filter-chip--unrelated' : '',
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <button
              key={tag}
              type="button"
              className={className}
              onClick={() => onToggleTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SpecialFilters;

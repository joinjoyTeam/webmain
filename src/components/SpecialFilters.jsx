import React from 'react';
import './FilterBar.css';
import { ALL_GROUP_KEY, normalizeGroupKey } from '../utils/groupKeys';

const groupSpecialTags = {
  shows: ['FireShow', 'ThaiBoxing'],
  beach: ['Sunset', 'Iconic'],
  island: ['4 Islands', 'Iconic'],
};

function SpecialFilters({ specialTags, selectedTags, onToggleTag, selectedGroup }) {
  const normalizedGroup = normalizeGroupKey(selectedGroup);
  const relatedTags =
    normalizedGroup && normalizedGroup !== ALL_GROUP_KEY
      ? groupSpecialTags[normalizedGroup] || []
      : [];

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

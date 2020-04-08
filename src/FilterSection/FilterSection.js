import React from 'react';

import './FilterSection.css';

const FilterSection = ({ rows }) => {
  return (
    <section className="filter-section">
      {rows.map(row => (
        <div className="filter-section__raw">
          {row}
        </div>
      ))}
    </section>
  );
};

export default FilterSection;

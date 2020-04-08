import React from 'react';

import './FilterSection.scss';

const FilterSection = ({ cols }) => {
  return (
    <section className="filter-section">
      {cols.map(col => (
        <div className="filter-section__raw">
          {col}
        </div>
      ))}
    </section>
  );
};

export default FilterSection;

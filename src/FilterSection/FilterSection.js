import React from 'react';

import TextInput from '../TextInput';
import Button, { buttonTypes } from '../Button';
import { DropdownWithSearch, DropdownWithAvatars } from '../Dropdown';

import './FilterSection.scss';

const FilterSection = () => {
  const cars = [
    { id: 'opel', label: 'Opel' },
    { id: 'volvo', label: 'Volvo' },
    { id: 'bmv', label: 'BMW' }
  ];

  const buyers = [
    { id: 'ira', label: 'Ira', avatar: 'example/source/to/avatar' },
    { id: 'petia', label: 'Petia', avatar: 'example/source/to/avatar' }
  ];

  return (
    <section className="filter-section">
      <div className="filter-section__raw">
        <DropdownWithSearch options={cars} placeholder="Select buyer" />
        <DropdownWithAvatars options={buyers} placeholder={{ label: 'Select car' }} />
      </div>
      <div className="filter-section__raw">
        <TextInput name="example1" />
        <TextInput name="example2" />
        <TextInput name="example3" />
      </div>
      <div className="filter-section__raw">
        <Button type={buttonTypes.PRIMARY} text="Reset" />
        <Button type={buttonTypes.SECONDARY} text="Filter" />
      </div>
    </section>
  );
};

export default FilterSection;

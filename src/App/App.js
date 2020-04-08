import React from 'react';

import FilterSection from '../FilterSection';
import TextInput from '../TextInput';
import Button, { buttonTypes } from '../Button';
import { DropdownWithSearch, DropdownWithAvatars } from '../Dropdown';

import './App.css';

function App() {
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
    <div className="App">
      <FilterSection
        rows={[
          <>
            <DropdownWithSearch options={cars} placeholder="Select buyer" />
            <DropdownWithAvatars options={buyers} placeholder={{ label: 'Select car' }} />
          </>,
          <>
            <TextInput name="example1" />
            <TextInput name="example2" />
            <TextInput name="example3" />
          </>,
          <>
            <Button type={buttonTypes.PRIMARY} text="Reset" />
            <Button type={buttonTypes.SECONDARY} text="Filter" />
          </>
        ]}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({ options, renderSelection, renderOptions, placeholder }) => {
  const [selection, setSelection] = useState(placeholder);
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState('');

  const handlePanelClick = () => {
    setExpanded(!expanded);
  };

  const handleSelection = selection => {
    setExpanded(false);
    setSelection(selection);
  }

  return (
    <div className={`dropdown dropdown--options-${expanded ? 'visible' : 'hidden'}`}>
      <button className="dropdown__panel" onClick={handlePanelClick}>
        {renderSelection({ selection })}
      </button>

      <div className="dropdown__options">
        {renderOptions({ options, filter, setFilter, handleSelection })}
      </div>

    </div>
  );
};

const DropdownWithAvatars = ({ options, ...restProps }) => {
  return (
    <Dropdown
      options={options}
      renderSelection={({ selection: { avatar, label } }) => (
        <>
          {avatar && <img 
            className="dropdown-with-avatars__avatar"
            src={avatar}
            alt={label}
          />}
          <div className="dropdown-with-avatars__label">{label}</div>
        </>
      )}
      renderOptions={({ options, handleSelection }) => (
        <>
          <ul className="dropdown-with-avatars__options">
            {options
              .map(({ id, label, avatar }) => (
                <li
                  className="dropdown-with-avatars__option"
                  key={id}
                  onClick={() => {
                    handleSelection({ label, avatar });
                  }}
                >
                  <img 
                    className="dropdown-with-avatars__option-avatar"
                    src={avatar}
                    alt={label}
                  />
                  <div className="dropdown-with-avatars__option-label">{label}</div>
                </li>
              )
            )}
          </ul>
        </>
      )}
      {...restProps}
    />
  );
};

const DropdownWithSearch = ({ options, ...restProps }) => {
  return (
    <Dropdown
      options={options}
      renderSelection={({ selection }) => (selection)}
      renderOptions={({ options, filter, handleSelection, setFilter }) => (
        <>
          <input
            className="dropdown-with-search__search"
            type="text"
            placeholder="Search"
            value={filter}
            onChange={({ target: { value } }) => { setFilter(value) }}
          ></input>

          <ul className="dropdown-with-search__options">
            {options
              .filter(({ label }) => label.toLowerCase().includes(filter.toLowerCase()))
              .map(({ id, label }) => (
                <li
                  className="dropdown-with-search__option"
                  key={id}
                  onClick={() => {
                    handleSelection(label);
                  }}
                >
                  {label}
                </li>
              )
            )}
          </ul>
        </>
      )}
      {...restProps}
    />
  );
};

export {
  Dropdown as default,
  DropdownWithSearch,
  DropdownWithAvatars
};

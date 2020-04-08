import React, { useState } from 'react';

import './TextInput.css';

const TextInput = ({ name }) => {
  const [ value, setValue ] = useState('');

  return (
    <input
      className="text-input"
      type="text"
      name={name}
      placeholder="Text field"
      value={value}
      onChange={({ target: { value } }) => { setValue(value) }}
    ></input>
  );
};

export default TextInput;

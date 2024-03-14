import React from 'react';

const AnswerOption = ({ option, selected, onSelect }) => {
  return (
    <li>
      <label>
        <input
          type="radio"
          name="options"
          value={option}
          checked={selected}
          onChange={() => onSelect(option)}
        />
        {option}
      </label>
    </li>
  );
};

export default AnswerOption;
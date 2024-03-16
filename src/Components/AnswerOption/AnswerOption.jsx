import React from 'react';
import { decodeHTMLEntities } from "../../Lib/formatting";

const AnswerOption = ({ option, selected, onSelect }) => {
  return (
    <li>
      <label>
        <input
          type="radio"
          name="options"
          value={decodeHTMLEntities(option)}
          checked={selected}
          onChange={() => onSelect(option)}
        />
        {decodeHTMLEntities(option)}
      </label>
    </li>
  );
};

export default AnswerOption;
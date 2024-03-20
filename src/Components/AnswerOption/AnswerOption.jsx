import React from 'react'; // Importing React library for JSX
import { decodeHTMLEntities } from "../../Lib/formatting"; // Importing decodeHTMLEntities function from formatting module

/**
 * Functional component representing an answer option.
 * @param {object} props - Props passed to the component.
 * @param {string} props.option - The answer option text.
 * @param {boolean} props.selected - Indicates whether the option is selected.
 * @param {function} props.onSelect - Function to handle selection of the option.
 * @returns JSX element representing an answer option.
 */
const AnswerOption = ({ option, selected, onSelect }) => {
  return (
    <li className='answers'>
      <label>
        <input
          type="radio" // Radio input type
          name="options" // Radio input name
          value={decodeHTMLEntities(option)} // Decoded HTML entities as the value of the radio input
          checked={selected} // Determines whether the radio input is checked
          onChange={() => onSelect(option)} // Handles the change event when the radio input is selected
        />
        {decodeHTMLEntities(option)} {/* Displaying the decoded answer option text */}
      </label>
    </li>
  );
};

export default AnswerOption;
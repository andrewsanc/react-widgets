import react, { useState } from "react";

const Dropdown = ({ options, selectedDropdown, onSelectedChange }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const renderedOptions = options.map((optionObj) => {
    if (optionObj.value === selectedDropdown.value) {
      return null;
    }

    return (
      <div
        key={optionObj.value}
        onClick={() => onDropdownSelection(optionObj)}
        className='item'
      >
        {optionObj.label}
      </div>
    );
  });

  const onDropdownSelection = (selectedItem) => {
    onSelectedChange(selectedItem);
    setDropdownActive(false);
  };

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          onClick={() => setDropdownActive(!dropdownActive)}
          className={`ui selection dropdown ${
            dropdownActive ? "visible active" : ""
          }`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selectedDropdown.label}</div>
          <div className={`menu ${dropdownActive ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

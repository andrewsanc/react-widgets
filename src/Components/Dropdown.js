import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedDropdown, onSelectedChange }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }

      setDropdownActive(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((optionObj) => {
    if (optionObj.value === selectedDropdown.value) {
      return null;
    }

    return (
      <div
        key={optionObj.value}
        onClick={() => onSelectedChange(optionObj)}
        className='item'
      >
        {optionObj.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
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

import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input onChange={(e) => setInputText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selectedDropdown={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
        options={options}
      />
      <Convert
        selectedLanguage={selectedLanguage}
        textToTranslate={inputText}
      />
    </div>
  );
};

export default Translate;

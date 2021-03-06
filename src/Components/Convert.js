import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ selectedLanguage, textToTranslate }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(textToTranslate);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(textToTranslate);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [textToTranslate]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: selectedLanguage.value,
            key: KEY,
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [selectedLanguage, debouncedText]);

  return (
    <div>
      <h1 className='ui header'>{translatedText}</h1>
    </div>
  );
};

export default Convert;

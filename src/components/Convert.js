import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(translatedText);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const makeTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com//language/translate/v2",
        {}, // leave this empty to say we are not sending anything in the body of req
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };
    makeTranslation();
  }, [language, debouncedText]);
  return <div className="ui header">{translatedText}</div>;
};

export default Convert;

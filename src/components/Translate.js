import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label>Enter the Text </label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />

      <hr />
      <div className="ui header">Output</div>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

import { render } from "@testing-library/react";
import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedList = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Team</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedList}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

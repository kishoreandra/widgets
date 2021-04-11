import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [activeState, setActiveState] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return null;
      }
      setActiveState(false);
    };
    document.body.addEventListener("click", onBodyClick, {
      capture: true,
    });

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

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
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a Team</label>
        <div
          className={`ui selection dropdown ${
            activeState ? "visible active" : ""
          } `}
          onClick={() => setActiveState(!activeState)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${activeState ? "visible transition" : ""}`}>
            {renderedList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

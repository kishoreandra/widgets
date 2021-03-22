import React, { useState } from "react";

const Accordion = ({ iplInfo }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTeamClick = (idx) => {
    setActiveIndex(idx);
  };

  const renderedList = iplInfo.map((team, idx) => {
    const active = idx === activeIndex ? "active" : "";
    return (
      <React.Fragment key={idx}>
        <div className={`${active} title`} onClick={() => onTeamClick(idx)}>
          <i className="dropdown icon"></i>
          {team.teamName}
        </div>
        <div className={`${active} content`}>
          <p>{team.mainPlayers}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui inverted segment">
      <div className="ui inverted accordion">{renderedList}</div>
    </div>
  );
};

export default Accordion;

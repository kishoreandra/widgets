import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const iplInfo = [
  {
    teamName: "RCB",
    mainPlayers: "Virat Kohli , AB De Villiers",
  },
  {
    teamName: "CSK",
    mainPlayers: "MSD , Raina",
  },
  {
    teamName: "MI",
    mainPlayers: "Rohith Sharma , SKY",
  },
];

const options = [
  {
    label: "RCB",
    value: "rcb",
  },
  {
    label: "MI",
    value: "mi",
  },
  {
    label: "DC",
    value: "dc",
  },
  {
    label: "CSK",
    value: "csk",
  },
  {
    label: "KKR",
    value: "kkr",
  },
  {
    label: "RR",
    value: "rr",
  },
  {
    label: "SRH",
    value: "srh",
  },
  {
    label: "KXIP",
    value: "kxip",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // return <Accordion iplInfo={iplInfo} />;
  // return <Search />;
  return (
    <Dropdown
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
    />
  );
};

export default App;

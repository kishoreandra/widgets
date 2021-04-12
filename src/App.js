import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    color: "red",
  },
  {
    label: "MI",
    value: "mi",
    color: "blue",
  },
  {
    label: "DC",
    value: "dc",
    color: "brown",
  },
  {
    label: "CSK",
    value: "csk",
    color: "yellow",
  },
  {
    label: "KKR",
    value: "kkr",
    color: "goldenrod",
  },
  {
    label: "RR",
    value: "rr",
    color: "darkblue",
  },
  {
    label: "SRH",
    value: "srh",
    color: "orange",
  },
  {
    label: "KXIP",
    value: "kxip",
    color: "pink",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // return <Accordion iplInfo={iplInfo} />;
  // return <Search />;
  // return (
  //   <div>
  //     <Dropdown
  //       options={options}
  //       selected={selected}
  //       onSelectedChange={setSelected}
  //       label = 'Select a Team'
  //     />
  //     <h2 style={{ color: `${selected.color}` }}>
  //       The {selected.label} jersey is colored {selected.color}
  //     </h2>
  //   </div>
  // );
  return <Translate />;
};

export default App;

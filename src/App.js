import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
const App = () => {
  // return <Accordion iplInfo={iplInfo} />;
  return <Search />;
};

export default App;

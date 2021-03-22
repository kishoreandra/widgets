import React from "react";
import Accordion from "./components/Accordion";

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
  return <Accordion iplInfo={iplInfo} />;
};

export default App;

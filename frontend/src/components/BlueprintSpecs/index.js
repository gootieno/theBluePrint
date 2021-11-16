import React from "react";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ tab, garageTab }) => {
  if (tab === null) return null;
  let tabName = garageTab[tab];
  return (
    <div id="blueprint-specs">
      <h3 id="blueprint-title">{tabName}</h3>
      <div id="blueprint-specs-container">
        <div id="blueprint-body">some info here</div>
        <div id="blueprint-buildlist-redirect">go to buildlist</div>
      </div>
    </div>
  );
};

export default BluePrintSpecs;

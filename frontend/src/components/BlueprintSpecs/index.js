import React, { useState } from "react";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ tab, garageTab, specCategoryArray }) => {
  if (tab === null) return null;
  // let tabName = garageTab[tab];

  return (
    <div id="blueprint-specs">
      <div id="exterior-container">
        {/* <h3 id="blueprint-title">{tabName}</h3> */}
        <div id="blueprint-specs-container">
          {specCategoryArray[0].map((exteriorItem, i) => (
            <div id="blueprint-body">{exteriorItem.name}</div>
          ))}
          <div id="blueprint-buildlist-redirect">go to buildlist</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default BluePrintSpecs;

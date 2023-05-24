export const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";
export const GARAGE_ADDED = "garage/GARAGE_ADDED";

export const addBluePrint = (blueprint) => ({
  type: BLUEPRINT_ADDED,
  blueprint,
});

export const addGarage = (garage) => ({
  type: GARAGE_ADDED,
  garage,
});

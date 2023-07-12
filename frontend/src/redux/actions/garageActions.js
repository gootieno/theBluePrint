export const GARAGE_ADDED = "garage/GARAGE_ADDED";

export const addGarage = (payload) => ({
  type: GARAGE_ADDED,
  garage: payload.garage,
});

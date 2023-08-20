export const BLUEPRINTS_ADDED = "blueprints/BLUEPRINTS_ADDED";
export const BLUEPRINT_EDITED = "blueprints/BLUEPRINT_EDITED";
export const BLUEPRINT_DELETED = "blueprints/BLUEPRINT_DELETED";
export const CURRENT_BLUEPRINT_SET = "blueprints/CURRENT_BLUEPRINT_SET";

export const addBlueprints = (blueprints) => ({
  type: BLUEPRINTS_ADDED,
  blueprints,
});

export const editBlueprint = (blueprint) => ({
  type: BLUEPRINT_EDITED,
  blueprint,
});

export const deleteBlueprint = (id) => ({
  type: BLUEPRINT_DELETED,
  id,
});

export const setCurrentBlueprint = (index) => ({
  type: CURRENT_BLUEPRINT_SET,
  index,
});
